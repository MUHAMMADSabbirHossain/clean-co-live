/* import logo from './logo.svg';
import './App.css'; */

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { publicRoute } from "./routes/publicRoutes";




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
        <Routes>
          {/* <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/login" element={<Login></Login>}></Route> */}

          {
            publicRoute.map(({ path, Component }, index) => <Route key={index} path={path} element={<Component />}></Route>)
          }
        </Routes>
      </Navbar>
    </div >
  );
}

export default App;
