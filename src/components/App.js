import React from 'react';
import Home from '../pages/Home';
import Question from '../pages/Question';
import Result from '../pages/Result';
import '../styles/style.css'
import Layout from './Layout';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <React.Fragment>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/question' element={<Question/>} />
            <Route path='/question/result' element={<Result/>} />
          </Routes>
        </Layout>
      </Router>
    </React.Fragment>
    );
}

export default App;
        // <Home/>
        // <QuestionSec/>
        // <Result/>