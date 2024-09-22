import React, { FC } from 'react';
import { Box, Button, CircularProgress, Container, Menu, MenuItem, Typography } from '@mui/material';
import { useGetProfileAvatarQuery } from '@/query/profile/avatar.query';
import CustomAvatar from '../../avatar/CustomAvatar';
import TaggedText from '@/common/TaggedText';
import VerifiedIcon from '../../../ui/icon/VerifiedIcon';
import { useLogoutQuery } from '@/query/authorization/authorization.query';
import { useRouter } from 'next/router';

interface IAccountBar {
  name?: string;
  tag?: string;
  hasAvatar?: boolean;
  isVerified?: boolean;
  isVertical?: boolean;
  isLoading?: boolean
}

export default function AccountBar({
  name,
  tag,
  hasAvatar,
  isVerified,
  isVertical,
  isLoading,
}: IAccountBar) {
  const { data: avatarUrl } = useGetProfileAvatarQuery();
  const { refetch: logout } = useLogoutQuery();
  const { push } = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (isLoading) return (<CircularProgress sx={{ m: 1 }} />)
  if (!name || !tag) return (<></>)

  return (
    <Container disableGutters sx={{ display: 'flex', flexDirection: 'row', gap: 1 }} >
      {hasAvatar && <CustomAvatar img={avatarUrl} alt='AvatarAlt' width={30} height={30} />}
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Box
          sx={{
            display: { xs: 'none', md: 'flex', lg: 'flex' },
            flexDirection: isVertical ? 'column' : 'row',
            alignItems: isVertical ? 'start' : 'center',
            gap: '0 8px',
          }}
        >
          <Box sx={{ display: 'flex', gap: '8px' }}>
            <Typography variant="h5" fontWeight={700}> {name} </Typography>
            {isVerified && <VerifiedIcon />}
          </Box>
          <TaggedText color="tag.contrastText" tagSymbol="@" text={tag} />
        </Box>
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{
          '& .MuiMenu-paper': {
            top: '770px!important',
          }
        }}
      >
        <MenuItem onClick={()=>{handleClose();push('/profile')}}>Perfil</MenuItem>
        <MenuItem onClick={()=>{handleClose();logout();push('/logout')}}>Sair</MenuItem>
      </Menu>
    </Container>
  );
};