import React, {useEffect, Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'font-awesome/css/font-awesome.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddButton from './components/layout/AddButton';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {

  useEffect(() => {
    //initialize MaterializeJS
    M.AutoInit();
  })
  return <Provider store={store}>
    <SearchBar />
    <div className="container">
      <Logs />
      <AddButton />
      <AddLogModal />
      <EditLogModal />
      <AddTechModal />
      <TechListModal />
    </div>
  </Provider>
}

export default App;
