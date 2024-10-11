import React, { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress, Card, CardContent, CardMedia, Link, useTheme } from '@mui/material';
import './RSSFeed.scss';

interface FeedItem {
  title: string;
  link: string;
  thumbnail?: string;
  pubDate?: string;  
}

const RSSFeed: React.FC = () => {
  const [feeds, setFeeds] = useState<{ [key: string]: FeedItem[] }>({});
  const [loading, setLoading] = useState(true);
  
  const theme = useTheme();  

 
  const rssUrls = {
    "Krebs on Security": 'https://api.rss2json.com/v1/api.json?rss_url=https://krebsonsecurity.com/feed/',
    "Threatpost": 'https://api.rss2json.com/v1/api.json?rss_url=https://threatpost.com/feed/',
    "The Hacker News": 'https://api.rss2json.com/v1/api.json?rss_url=https://feeds.feedburner.com/TheHackersNews',
    "SecurityWeek": 'https://api.rss2json.com/v1/api.json?rss_url=https://www.securityweek.com/rss',
    "Dark Reading": 'https://api.rss2json.com/v1/api.json?rss_url=https://www.darkreading.com/rss_simple.asp',
  };

  
  const fetchFeeds = async () => {
    try {
      const fetchedFeeds: { [key: string]: FeedItem[] } = {};

      
      await Promise.all(
        Object.entries(rssUrls).map(async ([feedName, url]) => {
          const response = await fetch(url);
          const data = await response.json();

          if (data && data.items) {
            fetchedFeeds[feedName] = data.items.map((item: any) => ({
              title: item.title,
              link: item.link,
              thumbnail: item.thumbnail, 
              pubDate: item.pubDate,      
            }));
          }
        })
      );

      setFeeds(fetchedFeeds);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching RSS feeds:", error);
      setLoading(false);
    }
  };

  
  useEffect(() => {
    fetchFeeds(); 

    
    const interval = setInterval(() => {
      fetchFeeds();  
    }, 60000);  

    
    return () => clearInterval(interval);
  }, []);

  return (
    <Box className="rss-feed-container" sx={{ maxHeight: '400px', overflowY: 'auto', padding: '16px', borderRadius: '8px', backgroundColor: 'background.paper' }}>
      <Typography variant="h6" color="textPrimary">Cybersecurity News</Typography>

      {loading ? (
        <CircularProgress />
      ) : (
        Object.entries(feeds).map(([feedName, feedItems]) => (
          <Box key={feedName} sx={{ marginY: 2 }}>
            <Typography variant="subtitle1" color="textSecondary">{feedName}</Typography>
            <Box className="feed-items">
              {feedItems.map((item, index) => (
                <Card
                  key={index}
                  sx={{
                    display: 'flex',
                    marginBottom: '16px',
                    backgroundColor: theme.palette.mode === 'dark' ? '#424242' : '#f5f5f5', 
                    color: theme.palette.mode === 'dark' ? 'white' : 'black',  
                  }}
                >
                  { }
                  {item.thumbnail && (
                    <CardMedia
                      component="img"
                      image={item.thumbnail}
                      alt={item.title}
                      sx={{ width: 160, objectFit: 'cover' }}
                    />
                  )}
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography component="h5" variant="h6">
                        <Link href={item.link} target="_blank" rel="noopener noreferrer" color="primary">
                          {item.title}
                        </Link>
                      </Typography>
                      {item.pubDate && (
                        <Typography variant="body2" color="textSecondary">
                          {new Date(item.pubDate).toLocaleDateString()} { }
                        </Typography>
                      )}
                    </CardContent>
                  </Box>
                </Card>
              ))}
            </Box>
          </Box>
        ))
      )}
    </Box>
  );
};

export default RSSFeed;







