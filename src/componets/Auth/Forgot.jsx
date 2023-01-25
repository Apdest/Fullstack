// import * as React from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { Link as RouterLink } from "react-router-dom";
// import { Alert, createTheme, ThemeProvider } from "@mui/material";
// import { ToastContainer, toast } from "react-toastify";

// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// const theme = createTheme();

// const Forgot = () => {
//   const [email, setEmail] = React.useState("");

//   const [message, setMessage] = React.useState("");

//   const sendLink = async (e) => {
//     e.preventDefault();

//     if (email === "") {
//       toast.error("email is required!", {
//         position: "top-center",
//       });
//     } else if (!email.includes("@")) {
//       toast.warning("includes @ in your email!", {
//         position: "top-center",
//       });
//     } else {
//       const res = await fetch("/sendpasswordlink", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email }),
//       });

//       const data = await res.json();

//       if (data.status == 201) {
//         setEmail("");
//         setMessage(true);
//       } else {
//         toast.error("Invalid User", {
//           position: "top-center",
//         });
//       }
//     }
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         {/* {error ? (
//           <Alert severity="error">{error.map((item) => item)}</Alert>
//         ) : null} */}
//         <Box
//           sx={{
//             marginTop: 8,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Enter your email
//           </Typography>
//           <Box
//             component="form"
//             // onSubmit={handleSubmit}
//             noValidate
//             sx={{ mt: 1 }}
//           >
//             {message ? (
//               <p style={{ color: "green", fontWeight: "bold" }}>
//                 pasword reset link send Succsfully in Your Email
//               </p>
//             ) : (
//               ""
//             )}
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <Button
//               //   type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//               onClick={sendLink}
//             >
//               Send
//             </Button>
//             <ToastContainer />
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 8, mb: 4 }} />
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default Forgot;

// import React, { useState } from 'react'
// import { ToastContainer, toast } from 'react-toastify';

// const PasswordReset = () => {

//     const [email, setEmail] = useState("");

//     const [message, setMessage] = useState("");

//     const setVal = (e) => {
//         setEmail(e.target.value)
//     }

//     const sendLink = async (e) => {
//         e.preventDefault();

//         if (email === "") {
//             toast.error("email is required!", {
//                 position: "top-center"
//             });
//         } else if (!email.includes("@")) {
//             toast.warning("includes @ in your email!", {
//                 position: "top-center"
//             });
//         } else {
//             const res = await fetch("/sendpasswordlink", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({ email })
//             });

//             const data = await res.json();

//             if (data.status == 201) {
//                 setEmail("");
//                 setMessage(true)
//             } else {
//                 toast.error("Invalid User",{
//                     position: "top-center"
//                 })
//             }
//         }
//     }

//     return (
//         <>
//             <section>
//                 <div className="form_data">
//                     <div className="form_heading">
//                         <h1>Enter Your Email</h1>
//                     </div>

//                     {message ? <p style={{ color: "green", fontWeight: "bold" }}>pasword reset link send Succsfully in Your Email</p> : ""}
//                     <form>
//                         <div className="form_input">
//                             <label htmlFor="email">Email</label>
//                             <input type="email" value={email} onChange={setVal} name="email" id="email" placeholder='Enter Your Email Address' />
//                         </div>

//                         <button className='btn' onClick={sendLink}>Send</button>
//                     </form>
//                     <ToastContainer />
//                 </div>
//             </section>
//         </>
//     )
// }

// export default PasswordReset
