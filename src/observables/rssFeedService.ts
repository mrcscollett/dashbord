import { from, of, timer } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { switchMap, catchError, map, retry, mergeMap } from 'rxjs/operators';

export interface FeedItem {
  title: string;
  link: string;
  thumbnail?: string;
  pubDate?: string;
}

const rssUrls = {
  "Krebs on Security": 'https://api.rss2json.com/v1/api.json?rss_url=https://krebsonsecurity.com/feed/',
  "Threatpost": 'https://api.rss2json.com/v1/api.json?rss_url=https://threatpost.com/feed/',
  "The Hacker News": 'https://api.rss2json.com/v1/api.json?rss_url=https://feeds.feedburner.com/TheHackersNews',
  "SecurityWeek": 'https://api.rss2json.com/v1/api.json?rss_url=https://www.securityweek.com/rss',
  "Dark Reading": 'https://api.rss2json.com/v1/api.json?rss_url=https://www.darkreading.com/rss_simple.asp',
};

// Fetch a single RSS feed
const fetchFeed = (feedName: string, url: string) => {
  return fromFetch(url).pipe(
    switchMap((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error fetching RSS feed');
      }
    }),
    map((data: any) => ({
      feedName,
      items: data.items.map((item: any) => ({
        title: item.title,
        link: item.link,
        thumbnail: item.thumbnail,
        pubDate: item.pubDate,
      })),
    })),
    retry(2), // Retry up to 2 times on error
    catchError((error) => {
      console.error(`Error fetching ${feedName}:`, error);
      return of({ feedName, items: [] });
    })
  );
};

// Observable that fetches all feeds periodically
export const rssFeeds$ = timer(0, 60000).pipe( // Emit first value immediately, then every 60 seconds
  mergeMap(() =>
    from(Object.entries(rssUrls)).pipe(
      mergeMap(([feedName, url]) => fetchFeed(feedName, url)),
      map((feed) => feed), // Pass the feed data along
      catchError((error) => {
        console.error('Error fetching feeds:', error);
        return of([]); // Return empty array on error
      })
    )
  )
);
