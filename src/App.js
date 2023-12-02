/* import logo from './logo.svg';
import './App.css'; */

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Home from "./Pages/Home/Home";
// import About from "./Pages/About";
// import Services from "./Pages/Services";
// import Contact from "./Pages/Contact";
// import Login from "./Pages/Login";
import { publicRoute } from "./routes/publicRoutes";
import { privateRoutes } from "./routes/privateRoutes";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";
import Services from "./Pages/Services";
import PrivateRoute from "./authentication/PrivateRoute";
import About from "./Pages/About";




function App() {

  useEffect(() => {
    AOS.init();
  }, []);


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
            publicRoute.map(({ path, Component }, index) => <Route
              key={index}
              path={path}
              element={<Component />}></Route>)
          }

          <Route element={<PrivateRoute />}>
            {/* <Route path="/about" element={<About></About>}></Route>
            <Route path="/services" element={<Services></Services>}></Route> */}
            {
              privateRoutes.map(({ path, Component }, index) => <Route
                key={index}
                path={path}
                element={<Component />}></Route>)
            }
          </Route>

        </Routes>
      </Navbar>
    </div >
  );
}

export default App;
