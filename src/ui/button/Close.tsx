import { IconButton, Paper } from '@mui/material'
import React from 'react'

export default function Close({ type }: { type: 'submit' | 'reset' | 'button' | undefined }) {
  return (
    <IconButton
      type={type}
      sx={{
        p: 0,
        width: '30px',
        height: '30px',
        backgroundColor: '#43b8ff;',
        '&:hover': {
          backgroundColor: '#b9b9b9;',
        },
      }}
    >
      <Paper
        sx={{
          cursor: 'pointer',
          position: 'absolute',
          top: '23px',
          right: '6.5px',
          transform: 'translate(-50%,-50%)',
          width: '20px',
          height: '20px',
          background: 'none',
          boxShadow: 'none',
          '&:before': {
            content: '""',
            position: 'absolute',
            width: '24px',
            height: '4px',
            background: '#ffffff',
            transform: 'rotate(45deg)',
          },
          '&:after': {
            content: '""',
            position: 'absolute',
            width: '24px',
            height: '4px',
            background: '#ffffff',
            transform: 'rotate(-45deg)',
          },
        }}
      ></Paper>
    </IconButton>
  )
}
