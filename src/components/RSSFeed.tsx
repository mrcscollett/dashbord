import React, { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress, Card, CardContent, CardMedia, Link, useTheme } from '@mui/material';
import { rssFeeds$, FeedItem } from '../observables/rssFeedService';
import { Subscription } from 'rxjs';
import './RSSFeed.scss';

const RSSFeed: React.FC = () => {
  const [feeds, setFeeds] = useState<{ [key: string]: FeedItem[] }>({});
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    const subscription: Subscription = rssFeeds$.subscribe((feedData: any) => {
      setFeeds((prevFeeds) => ({
        ...prevFeeds,
        [feedData.feedName]: feedData.items,
      }));
      setLoading(false);
    });

    return () => subscription.unsubscribe(); // Cleanup on unmount
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
                          {new Date(item.pubDate).toLocaleDateString()}
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








