import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import './App.css';
import AddCourse from './Components/AddCourse';
import Allcourses from './Components/Allcourses';
import Course from './Components/Course';
import Header from './Components/Header';
import Home from './Components/Home';
import Menu from './Components/Menu';


function App() {
  return (
    
      <div>

        <Router>
        <Container>
      <Header/>
        <Row>
          <Col md={3}> 
          <Menu/>
          </Col>

          <Col md={9}> 
         <Routes>
         <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/add-course' element={< AddCourse />}></Route>
          <Route exact path='/view-courses' element={< Allcourses />}></Route>
         </Routes>
           </Col>
        </Row>
      </Container>
        </Router>

      </div>

  );
}

export default App;

