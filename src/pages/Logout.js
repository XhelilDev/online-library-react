import React from 'react';
import {BrowserRouter, Routes, Route,Link,Router} from 'react-router-dom';


const Logout = () => {
  return (
    
    <div>
      <h1>Logout</h1>
      <Link to="/">Login</Link>
    </div>
  );
};

export default Logout;