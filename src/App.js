import Home from "./pages/Home";
import Loginpage from "./components/Loginpage/indexLogo"
import Publish from "./components/Publish/index"
import QrCODE from './components/QrCODE/index'
import './App.css'
import {
  Routes,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

const App = () => {
  return (
    <>
     <Router>
        <Routes>
          <Route exact path='/'  element={<Home/>} />
          <Route exact path='/Loginpage' element={<Loginpage/>} />
          <Route exact path='/Publish' element={<Publish/>} />
          <Route exact path='/QrCODE' element={<QrCODE/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;