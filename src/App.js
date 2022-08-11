import './App.css';
import React from 'react';
// import {Routes, Route, Link} from 'react-router-dom';
import Data from "./components/data";
// import CreateData from './components/CreateData';
// import Delete from './components/Delete';


// function WelcomeMessage() {
//   return <p>Welcome!</p>
// }
function App() {
    return (
      <div className="container">
        <Data/>
        {/* <nav>
          <Link to='/view'>View</Link>
          <Link to='/add'>Add Data</Link>
          <Link to='/delete'>Delete</Link>
        </nav>
        <Routes>
          <Route path='view' element={<Data/>}/>
          <Route path='add' element={<CreateData/>}/>
          <Route path='delete' element={<Delete/>}/>
        </Routes> */}
      </div>
    );
  }
  
  export default App;