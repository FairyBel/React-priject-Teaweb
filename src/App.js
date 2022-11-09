import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from './About';
import Contacts from './Contacts';
import Home from './Home';
import Benefits from './Benefits';
import FirstPage from './FirstPage';
import logo from './logo.jpg';


function App() {

  return (
  <Router>
    <nav>
    <Link to ='/'><img className='logo' src={logo} alt='logotip'/></Link>
      <Link to ='/' className='link'>Tea Lives</Link>
      <Link to ='/about' className='link'>About</Link>
      <Link to ='/catalog' className='link'>Catalog</Link>
      <Link to ='/benefits' className='link'>Health_Benefits</Link>
      <Link to ='/contacts' className='link'>Contacts</Link>
    </nav>

    <Routes>
      <Route path='/' element={<FirstPage />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/catalog' element={<Home />}/>
      <Route path='/benefits' element={<Benefits />}/>
      <Route path='/contacts' element={<Contacts />}/>
    </Routes>

  </Router>
  )
}

export default App;
