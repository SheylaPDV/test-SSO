import "./App.css";
import { useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";

function App() {
  const clientID =
    "189229751122-e073rk5pk74m8jgqopsvl8elvj9ib7mk.apps.googleusercontent.com";

  const [user, setUser] = useState({});

  // Esto es para iniciar los servicios de google
  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientId: clientID,
      });
    };
    gapi.load("client:auth2", start);
  }, []);

  // Si todo va bien
  const onSuccess = (response) => {
    setUser(response.profileObj);
    console.log(response);
  };
  // Si todo va mal
  const onFailure = (response) => {
    console.log(response);
  };

  return (
    <div className="App">
      <h1>LOGIN</h1>
      <GoogleLogin
        clientId={clientID}
        onSuccess={onSuccess} //Si el inicio de sesion es exitoso se ejecuta esta funcion
        onFailure={onFailure}
        cookiePolicy={"single-host-policy"} // En caso de no ser exitoso
      />
      <div className={user ? "profile" : "hidden"}>
        <img src={user.imageUrl} alt="" />
        <h3>{user.name}</h3>
      </div>
    </div>
  );
}

export default App;
