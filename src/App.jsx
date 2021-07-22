// import logo from './logo.svg';
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Landing } from "./components/Landing/Landing";
import { Campaign } from "./components/Campaign/Campaign";
import { Catagory } from './components/Catagory/Catagory'
import {CatagoryMsg} from './components/Catagory/CatagoryMessage'


function App() {



  return (
    <div>
      <Navbar />
      <Landing />
      <Campaign />
      <Catagory/>
      <CatagoryMsg/>

    </div>
  );
}

export default App;
