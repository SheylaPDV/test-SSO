import "./App.css";
import Login from "./components/Login";

console.log(
  process.env.REACT_APP_AUTH0_DOMAIN,
  "&",
  process.env.REACT_APP_AUTH0_CLIENT_ID
);

function App() {
  return (
    <div className="App">
      <h1>Application</h1>
      <Login />
    </div>
  );
}

export default App;
