import {
  Button,
  IconButton,
  MenuItem,
  useTheme,
} from '@mui/material';
import React, { FC, ReactNode } from 'react';
import { useRouter } from 'next/router';

interface IMenuElem {
  navItem: {
    title: string;
    icon: ReactNode;
  };
  isActiveItem: boolean;
  url: string;
}

export default function MenuElem({ navItem, isActiveItem, url }: IMenuElem) {
  const theme = useTheme();
  const { push } = useRouter();

  return (
    <MenuItem
      disableGutters
      key={navItem.title}
      onClick={() => push(url)}
      sx={{
        display: { xs: 'flex', md: 'flex' },
        flexDirection: { xs: 'none', md: 'row' },
        gap: 2,
        justifyContent: 'start',
        alignItems: 'center',
        px: 1.5,
        my: 1.5,
      }}
    >
      <IconButton sx={{ minWidth: '35px', m: 0, p: 0, }} color="secondary" > {navItem.icon}
      </IconButton>
      <Button
        sx={{
          display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' },
          justifyContent: 'flex-start',
          gap: '10px 0',
          mx: 0,
          p: 0,
          fontFamily: theme.typography.h3.fontFamily,
          fontWeight: theme.typography.h3.fontWeight,
          fontSize: theme.typography.h3.fontSize,
          color: isActiveItem
            ? theme.palette.primary.main
            : theme.palette.primary.dark,
          cursor: 'pointer',
        }}
      >
        {navItem.title}
      </Button>
    </MenuItem>
  );
};