import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import ManageBL from './pages/Manage/ManageBL/ManageBL';
import ManageCH from './pages/Manage/ManageCH/ManageCH';
import ManageDC from './pages/Manage/ManageDC/ManageDC';
import ManageDV from './pages/Manage/ManageDV/ManageDV';
import ManageTS from './pages/Manage/ManageTS/ManageTS';
import Profile from './pages/Profile/Profile';
import ChangePassword from './pages/SettingMenu/ChangePassword/ChangePassword';
import Register from './pages/SettingMenu/Register/Register';
import { AdminTemplate } from './templates/AdminTemplate';
import { UserBLTemplate } from './templates/UserBLTemplate';
import {UserCHTemplate} from './templates/UserCHTemplate';
import { UserDCTemplate } from './templates/UserDCTemplate';
import { UserDVTemplate } from './templates/UserDVTemplate';
import { UserTSTemplate } from './templates/UserTSTemplate';
//import history 
import {createBrowserHistory} from 'history'
import ManageTK from './pages/Manage/MangeTK/ManageTK';
//Đối tượng giúp chuyển hướng trang bất kì file nào 
export const history =  createBrowserHistory();

function App() {
  const {type, isLogin} = (!localStorage.getItem("user")) ? {type: 0, isLogin: false} : JSON.parse(localStorage.getItem("user"));

  const renderTemplate = (props) => {
    const {type, isLogin} = props;

    if(type == 1 && isLogin){
      return(
        <Switch>
          <AdminTemplate exact path="/dancu" Component={ManageDC}/>
          <AdminTemplate exact path="/profile" Component={Profile}/>
          <AdminTemplate exact path="/register" Component={Register}/>
          <AdminTemplate exact path="/changepass" Component={ChangePassword}/>
          <AdminTemplate exact path="/home" Component={Home}/>
          <AdminTemplate exact path="/canho" Component={ManageCH}/>
          <AdminTemplate exact path="/taisan" Component={ManageTS}/>
          <AdminTemplate exact path="/bienlai" Component={ManageBL}/>
          <AdminTemplate exact path="/dichvu" Component={ManageDV}/>
          <AdminTemplate exact path="/taikhoan" Component={ManageTK}/>
          <AdminTemplate exact path="/" Component={Home}/>
        </Switch>
      )
    }else if(type == 2 && isLogin) {
      return(
        <Switch>
          <UserCHTemplate exact path="/profile" Component={Profile}/>
          <UserCHTemplate exact path="/register" Component={Register}/>
          <UserCHTemplate exact path="/changepass" Component={ChangePassword}/>
          <UserCHTemplate exact path="/home" Component={Home}/>
          <UserCHTemplate exact path="/canho" Component={ManageCH}/>
          <UserCHTemplate exact path="/" Component={Home}/>
          <UserCHTemplate exact path="/login" Component={Login}/>
        </Switch>
      )
    }else if(type == 3 && isLogin) {
      return(
        <Switch>
          <UserDCTemplate exact path="/dancu" Component={ManageDC}/>
          <UserDCTemplate exact path="/profile" Component={Profile}/>
          <UserDCTemplate exact path="/register" Component={Register}/>
          <UserDCTemplate exact path="/changepass" Component={ChangePassword}/>
          <UserDCTemplate exact path="/home" Component={Home}/>
          <UserDCTemplate exact path="/" Component={Home}/>
        </Switch>
      )
    }else if(type == 4 && isLogin) {
      return(
        <Switch>
          <UserTSTemplate exact path="/profile" Component={Profile}/>
          <UserTSTemplate exact path="/register" Component={Register}/>
          <UserTSTemplate exact path="/changepass" Component={ChangePassword}/>
          <UserTSTemplate exact path="/home" Component={Home}/>
          <UserTSTemplate exact path="/taisan" Component={ManageTS}/>
          <UserTSTemplate exact path="/" Component={Home}/>
        </Switch>
      )
    }else if(type == 5 && isLogin) {
      return(
        <Switch>
          <UserDVTemplate exact path="/profile" Component={Profile}/>
          <UserDVTemplate exact path="/register" Component={Register}/>
          <UserDVTemplate exact path="/changepass" Component={ChangePassword}/>
          <UserDVTemplate exact path="/home" Component={Home}/>
          <UserDVTemplate exact path="/dichvu" Component={ManageDV}/>
          <UserDVTemplate exact path="/" Component={Home}/>
        </Switch>
      )
    }else if(type == 6 && isLogin) {
      return(
        <Switch>
          <UserBLTemplate exact path="/profile" Component={Profile}/>
          <UserBLTemplate exact path="/register" Component={Register}/>
          <UserBLTemplate exact path="/changepass" Component={ChangePassword}/>
          <UserBLTemplate exact path="/home" Component={Home}/>
          <UserBLTemplate exact path="/bienlai" Component={ManageBL}/>
          <UserBLTemplate exact path="/" Component={Home}/>
        </Switch>
      )
    }
    else{
      return (<Login />);
    }
  }

  return (
    <Router history={history}>
    <div className="App">
    {
      renderTemplate({type: type, isLogin: isLogin})
    }
    </div>
    </Router>
  );
}

export default App;
