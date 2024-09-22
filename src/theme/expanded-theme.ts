import '@material-ui/core/styles';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    border?: Palette['primary'];
    tag?: Palette['primary'];
    buttonLike?: Palette['primary'];
    buttonWidget?: Palette['primary'];
  }
  interface PaletteOptions {
    border?: PaletteOptions['primary'];
    tag?: PaletteOptions['primary'];
    buttonLike?: PaletteOptions['primary'];
    buttonWidget?: PaletteOptions['primary'];
  }
}
