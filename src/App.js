import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/Navbar/Navigation";
import Router from "./Routers";

function App() {
  return (
    <>
      <Navigation />
      <Router />
    </>
  );
}

export default App;
