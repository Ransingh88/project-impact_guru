// import logo from './logo.svg';
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Landing } from "./components/Landing/Landing";
import { Campaign } from "./components/Campaign/Campaign";
import {Catagory} from './components/Catagory/Catagory'


function App() {



  return (
    <div>
      <Navbar />
      <Landing />
      <Campaign />
      <Catagory/>
      

    </div>
  );
}

export default App;
