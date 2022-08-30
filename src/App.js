import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    
    <div className="App">
      <Router>
      <Routes>
        <Route exact path = '/'element = {<Login/>}></Route>
        <Route exact path = '/signup'element = {<Register/>}/>
      </Routes>
      </Router>
    </div>
    
  );
}

export default App;
