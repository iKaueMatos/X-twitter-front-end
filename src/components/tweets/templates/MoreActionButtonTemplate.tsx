import React, { FC } from 'react';
import { Button, Menu, MenuItem, useTheme } from '@mui/material';
import MoreNoBorderSVG from '@/assets/icons/MoreNoBorder.svg';
import Delete from '@/assets/icons/Delete.svg';

interface IMoreActionButtonTemplate {
  onDelete: () => void;
}

const MoreActionButtonTemplate: FC<IMoreActionButtonTemplate> = ({
  onDelete,
}) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItemStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
    background: theme.palette.primary.light,
    ':hover': { background: theme.palette.primary.main },
  };

  return (
    <>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreNoBorderSVG />
      </Button>
      <Menu
        disableScrollLock
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{ background: 'transparent', p: '0', m: '0' }}
      >
        <MenuItem onClick={onDelete} sx={menuItemStyles}>
          <Delete />
          Delete
        </MenuItem>
      </Menu>
    </>
  );
};

export default MoreActionButtonTemplate;
