import CssBaseline from '@material-ui/core/CssBaseline';
import { Fragment } from 'react';
import MyNavbar from './components/MyNavbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <div className='App'>
        <MyNavbar />
        <ItemListContainer greeting='Hola Tutor Gaston!' />
      </div>
    </Fragment>
  );
}

export default App;
