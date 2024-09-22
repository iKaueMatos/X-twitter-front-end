import React, { FC, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import PanelTweets from './PanelTweets';
import PanelReplies from './PanelReplies';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `tweet-tab-${index}`,
    'aria-controls': `tweet-tabpanel-${index}`,
  };
};

const TweetTabPanel: FC = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container disableGutters sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          sx={{
            '& .MuiTabs-flexContainer': {
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }
          }}
          value={value}
          onChange={handleChange}
          aria-label="tabs"
        >
          <Tab label="Tweets" {...a11yProps(0)} />
          <Tab label="Respostas" {...a11yProps(1)} />
          <Tab label="Destaques" {...a11yProps(2)} />
          <Tab label="Mídia" {...a11yProps(3)} />
          <Tab label="Curtidas" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <PanelTweets/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PanelReplies/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Highlights
      </TabPanel>
      <TabPanel value={value} index={3}>
        Media
      </TabPanel>
      <TabPanel value={value} index={4}>
        Likes
      </TabPanel>
    </Container>
  );
};