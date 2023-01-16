// import React, { useState } from "react";
// import GoogleLogin from "react-google-login";

// const clientId =
//   "189229751122-e073rk5pk74m8jgqopsvl8elvj9ib7mk.apps.googleusercontent.com";

// const Login = () => {
//   const [user, setUser] = useState({});

//   const onSuccess = (res) => {
//     setUser(res.profileObj);

//     console.log("LOGIN SUCCESS! Current user:", res.profileObj);
//   };

//   const onFailure = (res) => {
//     console.log("LOGIN FAILED! res:", res);
//   };
//   return (
//     <div id="signInButton">
//       <GoogleLogin
//         clientId={clientId}
//         buttonText="Login"
//         onSuccess={onSuccess}
//         onFailure={onFailure}
//         cookiePolicy={"single_host_origin"}
//         isSignedIn={true}
//       />
//       <img src={user.imageUrl} />
//     </div>
//   );
// };

// export default Login;
