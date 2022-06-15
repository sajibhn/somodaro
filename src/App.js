import { Box, Container, Paper, createTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import './App.css';
import Footer from './components/global/Footer';
import Header from './components/global/Header';
import Home from './components/home/Home';

function App() {
  const [mode, setMode] = useState('light')
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"}>
        <Container maxWidth="md">
          <Box display="flex" justifyContent="center" alignItems="center" sx={{ minWidth: "100%", minHeight: "100vh" }}>
            <Paper sx={{ width: "100%" }}>
              <Header mode={mode} setMode={setMode} />
              <Home />
              <Footer />
            </Paper>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
