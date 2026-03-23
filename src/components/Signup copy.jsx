// import React from 'react';

// const Form = () => {
//   return (
    
//       <div className="container">
//         <div className="heading">Sign In</div>
//         <form className="form" action>
//           <input placeholder="E-mail" 
//           id="email" 
//           name="email"
//            type="email" 
//            className="input" 
//            required />

//           <input placeholder="Password" 
//           id="password"
//            name="password"
//             type="password"
//              className="input" 
//              required />

//           <span className="forgot-password"><a href="#">Forgot Password ?</a></span>

//           <input defaultValue="Sign In" type="submit" className="login-button" />
//         </form>
//         <div className="social-account-container">
//           <span className="title">Or Sign in with</span>
//           <div className="social-accounts">
//             <button className="social-button google">
//               <svg viewBox="0 0 488 512" height="1em" xmlns="http://www.w3.org/2000/svg" className="svg">
//                 <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
//               </svg>
//             </button>
//             <button className="social-button apple">
//               <svg viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg" className="svg">
//                 <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
//               </svg>
//             </button>
//             <button className="social-button twitter">
//               <svg viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg" className="svg">
//                 <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
//               </svg>
//             </button>
//           </div>
//         </div>
//         <span className="agreement"><a href="#">Learn user licence agreement</a></span>
//       </div>
    
//   );
// }



// export default Form;






// import axios from 'axios';
// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';

// const Signup = () =>{
//     // Initialize the hooks
//     const [firstname, setFirstname] = useState("");
//     const [lastname, setLastname] = useState("");
//     const[username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [tel, setTel] = useState("");


//     // Define the three states an application will move to
//     const [loading, setLoading] = useState("");
//     const [success, setSuccess] = useState("");
//     const [error, setError] = useState("");

//     // Below is a function that will handle the submit action.
//     const handleSubmit = async(e) =>{
//         // Below we prevent our site from reloading
//         e.preventDefault()

//         // Update our loading hook with a message that will be displayed to the users who are trying to register.
//         setLoading("Registration in progress...")

//         try{
//             // Create a form data object that will enable you to capture the four details enetered on the form
//             const formdata = new FormData();

//             // Insert the four details interms of key-value pairs
//             formdata.append("firstname", firstname);
//             formdata.append("lastname", lastname);
//             formdata.append("username", username);
//             formdata.append("email", email);
//             formdata.append("password", password);
//             formdata.append("tel", tel);

//             // setTimeout(() => {
//             //     setSuccess("");
//             // },1000);

//             // By use of axios, we can access the method post
//             const response =await axios.post("https://keyarie.alwaysdata.net/api/signup", formdata)

//             // Set back the loading to default
//             setLoading("");

//             // Incase all goes well, update the success hook with a message
//             setSuccess(response.data.message)

//             // Clear your hooks
//             setFirstname("");
//             setLastname("");
//             setUsername("");
//             setEmail("");
//             setPassword("");
//             setTel("");
//         }

//         catch(error){
//             // Set the loading back to default
//             setLoading("");

//             // Update the error hook with the message given back from the response
//             setError(error.message)
//         }
//     }

//     return(
        
//         <div className='row justify-content-center mt-4 '>
//             <div className="card shadow  col-md-6 p-4">
//                 <h1 className='text-warning'>
//                     SIGN UP
//                 </h1>
//                 <h2>
//                     Fill in the Form Below to Create an Account...
//                 </h2>
//                 <h5 className="text-warning">{loading}</h5>
//                 <h5 className="text-success">{success}</h5>


//                 <form onSubmit={handleSubmit}>
//                     <input type="text"
//                     placeholder='Enter Your First Name'
//                     className='form-control' 
//                     value={firstname}
//                     onChange={(e) => setFirstname(e.target.value)}
//                     required/>
//                     <br />

//                     <input type="text"
//                     placeholder='Enter Your Last Name'
//                     className='form-control' 
//                     value={lastname}
//                     onChange={(e) => setLastname(e.target.value)}
//                     required/>
//                     <br />

//                     <input type="text"
//                     placeholder='Enter Your UserName'
//                     className='form-control' 
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required/>
//                     <br />

//                     {/* {username} */}

//                     <input type="email" 
//                     placeholder='Enter Your Email Address'
//                     className='form-control'
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required/>
//                     <br />

//                     {/* {email} */}

//                     <input type="password"
//                     placeholder='Enter Your Password'
//                     className='form-control'
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)} />
//                     <br />

//                     {/* {password} */}

//                     <input type="tel"
//                     placeholder='Enter Your Phone Number' 
//                     className='form-control'
//                     value={tel}
//                     onChange={(e) => setTel(e.target.value)}/>
//                     <br />

//                     {/* {tel} */}

//                     <input type="submit" value="Create Account" className='btn btn-dark form-control' /> <br /> <br />

//                     Already have an account?<Link to={'/signin'}>SingIn</Link>

//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Signup;

// // research on Axios in reactjs
// // axios.get() fetches data.
// // response.data contains the API data.
// // useState stores the data.
// // useEffect runs when the component loads.

// // GET – Retrieve data
// // POST – Send data
// // PUT – Update data
// // DELETE – Remove data
// Axios helps connect the React frontend with the backend API