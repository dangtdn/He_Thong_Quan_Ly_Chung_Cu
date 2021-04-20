import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import ManageBL from './pages/Manage/ManageBL/ManageBL';
import ManageCH from './pages/Manage/ManageCH/ManageCH';
import ManageDC from './pages/Manage/ManageDC/ManageDC';
import ManageDV from './pages/Manage/ManageDV/ManageDV';
import ManageTS from './pages/Manage/ManageTS/ManageTS';
import { HomeTemplate } from './templates/HomeTemplate';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <HomeTemplate exact path="/dancu" Component={ManageDC}/>
        <HomeTemplate exact path="/canho" Component={ManageCH}/>
        <HomeTemplate exact path="/taisan" Component={ManageTS}/>
        <HomeTemplate exact path="/bienlai" Component={ManageBL}/>
        <HomeTemplate exact path="/dichvu" Component={ManageDV}/>
        <HomeTemplate exact path="/" Component={Home}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
