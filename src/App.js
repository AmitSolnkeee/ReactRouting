
import './App.css';
import Home from './mycomp/Home';
import Mounting from './mycomp/Mounting';
import Updating from './mycomp/Updating';
import Unmounting from './mycomp/Unmounting';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Router>
        <div className="App">
        <h1 style={{fontSize:'50px'}}>Component Life Cycle</h1>
        <div className="linkName">
        <Link to="/home" style={{ textDecoration: 'inherit', color:'aliceblue' ,fontSize:'20px',marginRight:'30px' }}>Home</Link>
        <Link to="/mounting"  style={{ textDecoration: 'inherit', color:'aliceblue' ,fontSize:'20px',marginRight:'30px' }}>Mounting</Link>
        <Link to="/updating" style={{ textDecoration: 'inherit', color:'aliceblue' ,fontSize:'20px',marginRight:'30px' }}>Uptating</Link>
        <Link to="/unmounting" style={{ textDecoration: 'inherit', color:'aliceblue' ,fontSize:'20px',marginRight:'30px' }}>Unmounting</Link>
        

        </div>
        </div>
        
        <Route path="/home" component={Home}></Route>
        <Route path="/mounting" component={Mounting}></Route>
        <Route path="/updating" component={Updating}></Route>
        <Route path="/unmounting" component={Unmounting}></Route>
      </Router>
     
      
    </div>
  );
}

export default App;
