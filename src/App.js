
// import {  BrowserRouter,Routes, Route,Router,Switch } from 'react-router-dom';
import {
  BrowserRouter,
  Route,
  
  Routes,Link, Navigate
} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState,useEffect ,useNavigate,} from 'react';
import './App.css';
import Home from './pages/Home';
import Book from './pages/Book';
import Books from './pages/Books';
import Error404 from './pages/Error404';
import BookByGenre from './pages/BooksbyGenre';
import Nav from './componets/Nav';
import BookbyAuthoryear from './pages/BookbyAuthoryear';
import Login from './pages/Login';
import Protected from './pages/Protected';
import Logout from './pages/Logout';



{/* <Route path="/signup" element={<Signup />} /> */}


//  function App(){

//   const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const navigate = useNavigate(true);

  // useEffect(() => {
  //   const storedValue = localStorage.getItem('isLoggedIn');
  //   if (storedValue === 'true') {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate('/login');
  //   }
  // }, [isLoggedIn, navigate]);
  
  //  return (
  //  <>
  //    <BrowserRouter>
  //     <Nav />
           
  //         <div className="container">
  //         <Routes>
  //           <Route path="/" element={<Home />} />
  //         <Route path="/books" element={<Books />} />
  //         <Route path="/bookbygenre" element={<BookByGenre />} />
  //         <Route path="/books/:id" element={<Book />} />
  //         <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
  //         <Route path="/bookbyauthoryear" element={<BookbyAuthoryear />} />
         
       
  //         </Routes>
  //       </div>
  
         
        
  //       </BrowserRouter>
      
  //  </>
  //  );
  export default function App() {
    const [isSignedIn, setIsSignedIn] = useState(null)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const signin = () => {
      const expectedUsername = "myUsername";
      const expectedPassword = "myPassword";
      if (username === expectedUsername && password === expectedPassword) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        setIsSignedIn(true);
      } else {
        alert("Incorrect username or password. Please try again.");
      }
    };
  
    const signout = () => {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      setIsSignedIn(false);
    };
  
     return (
      <div className="container mt-5">
        <h2 className="mb-5 text-center">Online Free Library</h2>
        {isSignedIn ? (
            <div className="d-grid mt-5" style={{width: "50%"}}>
              <button className="btn-danger" onClick={signout} style={{width: "20%"}}>
                Sign out
              </button>
            </div>
          ) : (
            <form onSubmit={signin} style={{width: "50%"}}>
              <div className="form-group" style={{width: "50%",padding:"10px"}}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group" style={{width: "50%",padding:"10px"}}>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn-dark" style={{width: "30%",marginLeft:"8px"}}>
                Sign in
              </button>
            </form>
          )}
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/books"
              element={
                <Protected isSignedIn={isSignedIn}>
                  <Books />
                </Protected>
              }
            />
            <Route
              path="/books/:id"
              element={
                <Protected isSignedIn={isSignedIn}>
                  <Book />
                </Protected>
              }
            />
            <Route
              path="/bookbygenre"
              element={
                <Protected isSignedIn={isSignedIn}>
                  <BookByGenre />
                </Protected>
              }
            />
            <Route
              path="/bookbyauthoryear"
              element={
                <Protected isSignedIn={isSignedIn}>
                  <BookbyAuthoryear />
                </Protected>
              }
            />
             <Route
              path="*"
              element={
                <Protected isSignedIn={isSignedIn}>
                  <Error404  />
                </Protected>
              }
            />
           
          </Routes>
          
        </BrowserRouter>
      </div>
    );

     };
    
    
    
    
   // export default App;
  
  



//}

//export default App;
