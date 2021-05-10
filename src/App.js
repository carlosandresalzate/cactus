import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Fragment } from 'react';
import MyNavbar from './components/MyNavbar';

const usesStyles = makeStyles((theme) => ({
  hedings: {
    color: '#2a324E',
  },
}));

function App() {
  const classes = usesStyles();
  return (
    <Fragment>
      <MyNavbar />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className={classes.hedings}>Encuentra el Cactus o la Suculenta para ti!</h2>
        </header>
      </div>
    </Fragment>
  );
}

export default App;
