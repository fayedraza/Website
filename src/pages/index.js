import React , { useState }from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Introduction from '../components/Introduction';
import Experience from '../components/Experience';
import Questions from '../components/Questions';
import {
  BrowserRouter as Router
} from 'react-router-dom';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

  return (
  <>
 <Router>
      <Sidebar isOpen = {isOpen} toggle = {toggle}/>
       <Navbar toggle = {toggle}/>
       
       <Introduction/>
       <Experience/>
       <Questions/>

       </Router>  
     
  </>
  );
}

export default Home;