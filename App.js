import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as router, Switch, Router } from "react-router-dom";

function App() {
  return (
    <>
      <router>
        <navbar />
        <switch>
          <route path="/" exact />
        </switch>
      </router>
    </>
  );
}

export default App;
