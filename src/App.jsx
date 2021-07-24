// import logo from './logo.svg';
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Landing } from "./components/Landing/Landing";
import { Campaign } from "./components/Campaign/Campaign";
import { Catagory } from './components/Catagory/Catagory'
import { CatagoryMsg } from './components/Catagory/CatagoryMessage'
import { CountFundrais } from './components/CountFundrais/CountFundrais'
import {TopFundraiser} from './components/TopFundraiser/TopFundraiser'
import { SuccessfulFundraiser } from './components/SuccessfulFundraiser/SuccessfulFundraiser'
import {DownloadApp} from './components/DownloadApp/DownloadApp'
import { Partner } from './components/Partner/Partner'
// import { Footer } from './components/Footer/Footer'
import { How } from './components/HowItWork/How'
import {FundRaiser} from './components/browsingfundraiser/fundraiser'


function App() {



  return (
    <div>
      {/* <Navbar />
      <Landing />
      <Campaign />
      <Catagory/>
      <CatagoryMsg />
      <CountFundrais />
      <TopFundraiser/>
      <SuccessfulFundraiser />
      <DownloadApp/>
      <Partner />
      <Footer/> */}
      <FundRaiser/>
      
      
      
      

    </div>
  );
}

export default App;
