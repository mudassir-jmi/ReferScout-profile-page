import React from 'react'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { ProSidebarProvider } from 'react-pro-sidebar';

import { Box,ThemeProvider } from '@mui/material';
import SideNav from './components/SideNav';
import theme from './config/theme';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './router/AppRoutes';


function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <ProSidebarProvider>
          <CssBaseline />

          <Box sx={styles.container}>
            <BrowserRouter>
              <SideNav />
              <Box
                component={'main'}
                sx={styles.mainSection}
              >
                <AppRoutes />
              </Box>
            </BrowserRouter>

          </Box>
        </ProSidebarProvider>
      </ThemeProvider>

    </React.Fragment>
  )
}

/**
 * @type {import('@mui/material').SxProps}
 */
const styles = {
  container: {
    display: 'flex',
    bgcolor: 'neutral.light',
    height: 'calc(100% - 64px)'
  },
  mainSection: {
    p: 4,
    width: '100%',
    height: '100%',
    overflow: 'auto',
  }
}
export default App