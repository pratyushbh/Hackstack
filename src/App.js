import './App.css';
import Navbar from './components/navbar';
import Form from './components/form';
import List from './components/list';
import About from './about';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import { Fragment } from 'react';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/"element={
        <Fragment>
          <Form/>
        </Fragment>      
      }/>
      <Route path="/about"element={
        <Fragment>
          <About/>
        </Fragment>      
      }/>
      <Route path="/list/:title/:prob"element={
        <Fragment>
          <List/>
        </Fragment>      
      }/>
      </Routes>
     </div> 
    </BrowserRouter>
  );
}

export default App;
