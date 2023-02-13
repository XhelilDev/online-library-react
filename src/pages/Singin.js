// import React, { useState } from "react";

// const Singin = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [isSignedIn, setIsSignedIn] = useState(null)

//   const signin = (e) => {
//     e.preventDefault();
 
//     localStorage.setItem("username", username);
//     localStorage.setItem("password", password);
//   };

//     const signout = () => {
//       localStorage.removeItem("username");
//       localStorage.removeItem("password");
//       setIsSignedIn(false);
//     };
  

//   return (
//     <>
      
//         {isSignedIn ? (
//             <div className="d-grid mt-5" style={{width: "50%"}}>
//               <button className="btn-danger" onClick={signout} style={{width: "100%"}}>
//                 Sign out
//               </button>
//             </div>
//           ) : (
//             <form onSubmit={signin} style={{width: "50%",float:"right"}}>
//               <div className="form-group" style={{width: "50%",padding:"10px"}}>
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                 />
//               </div>
//               <div className="form-group" style={{width: "50%",padding:"10px"}}>
//                 <input
//                   type="password"
//                   className="form-control"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//               <button type="submit" className="btn-dark" style={{width: "30%",marginLeft:"8px"}}>
//                 Sign in
//               </button>
//             </form>
            
//           )}
//            </>
//           )
         
          
// };

// export default Singin;
