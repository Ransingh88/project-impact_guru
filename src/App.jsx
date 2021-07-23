// import logo from './logo.svg';
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Landing } from "./components/Landing/Landing";
import { Campaign } from "./components/Campaign/Campaign";
import { Catagory } from './components/Catagory/Catagory'
import { CatagoryMsg } from './components/Catagory/CatagoryMessage'
import {CountFundrais} from './components/CountFundrais/CountFundrais'


function App() {



  return (
    <div>
      <Navbar />
      <Landing />
      <Campaign />
      <Catagory/>
      <CatagoryMsg />
      <CountFundrais/>

    </div>
  );
}

export default App;
