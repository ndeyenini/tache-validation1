// import logo from './logo.svg';
// import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Navbare } from "./Components/Navbar/Navbar";
import {Hom } from "./Components/Home/Home";
import { Maine } from "./Components/Main/Main";
import { Foote } from "./Components/Footer/Footer";

function App() {
  return (
    <div className='App'>
      <Navbare />
      <Hom />
      <Maine />
      <Foote />
    </div>
  );
}

export default App;
