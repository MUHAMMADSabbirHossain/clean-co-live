/* import logo from './logo.svg';
import './App.css'; */

import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Services from "./Pages/Services";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      {/* <div className="App"> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Navbar>
        <Home></Home>
        <About></About>
        <Services></Services>
        <Contact></Contact>
        <Login></Login>
      </Navbar>
    </div>
  );
}

export default App;
