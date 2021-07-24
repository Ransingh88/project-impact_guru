// import logo from './logo.svg';
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Landing } from "./components/Landing/Landing";
import { Campaign } from "./components/Campaign/Campaign";
import { Catagory } from "./components/Catagory/Catagory";
import { CatagoryMsg } from "./components/Catagory/CatagoryMessage";
import { CountFundrais } from "./components/CountFundrais/CountFundrais";
import { TopFundraiser } from "./components/TopFundraiser/TopFundraiser";
import { SuccessfulFundraiser } from "./components/SuccessfulFundraiser/SuccessfulFundraiser";
import { DownloadApp } from "./components/DownloadApp/DownloadApp";
import { Partner } from "./components/Partner/Partner";
import { Footer } from "./components/Footer/Footer";
import { How } from "./components/HowItWork/How";
import { UserForm } from "./components/UserForm/UserForm";
// import {FundRaiser} from './components/browsingfundraiser/fundraiser'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/start-funraiser">Start a Fundraiser</Link>
      <Link to="/how-crowdfun-works">How it Works!</Link>
      <Link to="/fundraisers">Browse Funraisers</Link>
      <Route path="/" exact>
        <Navbar />
        <Landing />
        {/* <Campaign />
        <Catagory />
        <CatagoryMsg />
        <CountFundrais />
        <TopFundraiser />
        <SuccessfulFundraiser />
        <DownloadApp />
        <Partner /> */}
        <Footer />
      </Route>

      <Route path="/start-fundraiser" exact>
        <UserForm />
      </Route>

      <Route path="/how-it-works" exact>
        <Navbar />
        <How />
      </Route>

      <Route path="/fundraisers" exact>
        <Navbar />
      </Route>
    </Router>
  );
}

export default App;
