import { AppBar, Toolbar, useTheme } from '@mui/material';
import { authorizedNavigationList, unauthorizedNavigationList } from '@/components/navigation/configNavigation';
import NavigationItem from './NavigationItem';

import { INavigation, INavigationElement, IPlan } from './types';

export default function Navigation({ plan = 'unauthorized', activeItem }: INavigation) {
  const theme = useTheme();

  const PLAN_VIEW: IPlan = {
    authorized: authorizedNavigationList,
    unauthorized: unauthorizedNavigationList
  }

  const planView = PLAN_VIEW[plan as keyof typeof PLAN_VIEW]
  return (
    <AppBar
      className='component-navigation'
      position="relative"
      sx={{
        width: 'auto',
        background: theme.palette.primary.light,
        boxShadow: 'none',
      }}
    >
        <Toolbar
          disableGutters
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}
        >
          {planView.map((navItem: INavigationElement) => (
            <NavigationItem
              key={navItem.title}
              navItem={navItem}
              isActiveItem={activeItem === navItem.title}
            />
          ))}
        </Toolbar>
    </AppBar>
  );
};