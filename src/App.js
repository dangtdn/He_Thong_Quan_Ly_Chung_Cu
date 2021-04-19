import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import { HomeTemplate } from './templates/HomeTemplate';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <HomeTemplate exact path="/" Component={Home}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
