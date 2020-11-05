
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './Components/Pages/Home'
import Contact from './Components/Pages/Contact'
import Login from './Components/Pages/Login'
import About from './Components/Pages/About'
import Navbar from './Components/Layout/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import NotFound from './Components/Pages/NotFound';
import AddUser from './Components/UsersOperation/AddUser';
import EditUser from './Components/UsersOperation/EditUser';
import ViewUser from './Components/UsersOperation/ViewUser';
function App() {
  return (
    <Router>
      <div className="App">
     
     <Navbar/>
     <Switch> 
       <Route exact path="/" component={Home}/>
       <Route exact path="/Contact" component={Contact}/>
       <Route exact path="/Login" component={Login}/>
       <Route exact path="/About" component={About}/>
       <Route exact path="/users/add" component={AddUser}/>
       <Route exact path="/users/edit/:id" component={EditUser}/>
       <Route exact path="/ViewUser/:id" component={ViewUser}/>
       <Route component={NotFound}/>
     </Switch>
     
   </div>
    </Router>
  );
}

export default App;
