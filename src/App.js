/* React */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
/* Material */
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
/* Components */
import MyNavbar from './components/MyNavbar';
import Home from './components/Home';

const mytheme = createMuiTheme({
  palette: {
    common: {
      black: '#2A324E',
      white: '#f2ebe3',
    },
    primary: {
      main: '#f2ebe3',
    },
    secondary: {
      main: '#CA6C73',
    },
    text: {
      primary: '#2A324E',
      secondary: '#f2ebe3',
    },
    background: {
      default: '#f2ebe3',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={mytheme}>
      <CssBaseline />
      <div className='App'>
        <Router>
          <MyNavbar />
          <Home />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
