import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import Cart from './features/cart/Cart';
import Headers from './features/header/Header';
import Products from './features/products/Products';

import './App.css'

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Headers />
      <Container maxWidth="xl" disableGutters>
        <Grid container spacing={2} sx={{ alignItems: 'stretch' }}>
          <Grid size={{ xs: 12, md: 8 }} sx={{ display: 'flex', width: '100%' }}>
            <Products />
          </Grid>
          <Grid size={{ xs:12, md:4 }} sx={{ display: 'flex', width: '100%' }}>
            <Cart />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default App