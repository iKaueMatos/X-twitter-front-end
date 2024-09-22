import React, { FC, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tweets from '@/components/tweets/Tweets';
import { Alert, CircularProgress, Container } from '@mui/material';
import { IDataTweet } from '@/components/tweets/types';

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

export type ITweetList = {
  userData: IDataTweet[];
  userIsLoading: boolean;
  userIsError: boolean;
  userReplies: IDataTweet[];
  userRepliesIsLoading: boolean;
  userRepliesIsError: boolean;
};

const TweetList: FC<ITweetList> = ({
  userData,
  userIsLoading,
  userIsError,
  userReplies,
  userRepliesIsLoading,
  userRepliesIsError,
}) => {
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
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }
          }}
          value={value}
          onChange={handleChange}
          aria-label="abas"
        >
          <Tab label="Tweets" {...a11yProps(0)} />
          <Tab label="Respostas" {...a11yProps(1)} />
          <Tab label="Destaques" {...a11yProps(2)} />
          <Tab label="Mídia" {...a11yProps(3)} />
          <Tab label="Curtidas" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box width='100%' textAlign='center'> {userIsLoading && <CircularProgress sx={{ m: 1 }} />} </Box>
        <Tweets tweets={userData || []} />
        {userIsError && (<Alert severity="error">Erro ao carregar os tweets do usuário</Alert>)}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box width='100%' textAlign='center'>{userRepliesIsLoading && <CircularProgress sx={{ m: 1 }} />}</Box>
        <Tweets tweets={userReplies || []} />
        {userRepliesIsError && (<Alert severity="error">Erro ao carregar as respostas do usuário</Alert>)}
      </TabPanel>
      <TabPanel value={value} index={2}>
        Destaques
      </TabPanel>
      <TabPanel value={value} index={3}>
        Mídia
      </TabPanel>
      <TabPanel value={value} index={4}>
        Curtidas
      </TabPanel>
    </Container>
  );
};