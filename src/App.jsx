// import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar/Navbar'
import { Carousel } from './components/Carousel/Carausel'
import {Campaign} from './components/Campaign/Campaign'

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Campaign/>
    </div>
  );
}

export default App;
