
import {  BrowserRouter,Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Book from './pages/Book';
import Books from './pages/Books';
import Error404 from './pages/Error404';
import BookByGenre from './pages/BooksbyGenre';
import Nav from './componets/Nav';
import BookbyAuthoryear from './pages/BookbyAuthoryear';
import Login from './pages/Login';
import ProtectedRoute from './pages/ProtectedRoute';
import signup from './pages/Signup'
import Signup from './pages/Signup';


{/* <Route path="/signup" element={<Signup />} /> */}


 function App(){

//   const [auth, setAuth] = useState({ token: false });
   return (
   <>
     <BrowserRouter>
      <Nav />
           
          <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/bookbygenre" element={<BookByGenre />} />
          <Route path="/books/:id" element={<Book />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bookbyauthoryear" element={<BookbyAuthoryear />} />
         
       
          </Routes>
        </div>
  
         
        
        </BrowserRouter>
      
   </>
   );

}

export default App;
