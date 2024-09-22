import { Container, IconButton, Paper, useTheme } from '@mui/material'
import Image from 'next/image';
import React, { FC } from 'react'

interface ICustomBanner {
  img?: string | null;
  alt?: string | null;
}

export default function CustomBanner({ img, alt }: ICustomBanner) {
  const theme = useTheme()
  return (
    <Container disableGutters sx={{ flex: '0 0 auto', width: '100%', height: 'inherit' }} >
      {!img && !alt &&
        <Paper sx={{
          width: '100%',
          height: 'inherit',
          background: `linear-gradient(0deg,
            ${theme.palette.secondary.main} 0%,
            ${theme.palette.primary.main} 100%)`
        }} />
      }
      {img && alt && <IconButton sx={{ width: '100%', height: '200px', p: 0 }}>
        <Image
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL={img && img}
          style={{ objectFit: 'cover' }}
          src={img && img}
          alt={alt ? alt : 'defaultBanner'} />
      </IconButton>}
    </Container>
  )
}