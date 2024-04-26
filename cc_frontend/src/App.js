
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import EventInfo from './Pages/EventInfo/EventInfo';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import CreaterInput from './Pages/CreaterPage/CreaterInput';
import CreaterPage from './Pages/CreaterPage/CreaterPage';
import Communities from './Pages/Communities/Communities';
import Login from './Pages/Login/SignUp/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import Devtrack from './Pages/AllCommunities/Devtrack';
import Face from './Pages/AllCommunities/Face';
import Force from './Pages/AllCommunities/Force';
import Facit from './Pages/AllCommunities/FACIT';
import PostCategory from './Pages/PostCategory/PostCategory';

function App() {
  return (
    <Router>
    <div className="App">

      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>  
        <Route path="/Devtrack" element={<Devtrack category='Devtrack'/>}/>
        <Route path="/Face" element={<Face category='Face'/>}/>
        <Route path="/Force" element={<Force category='Force'/>}/>
        <Route path="/Facit" element={<Facit category='Facit'/>}/>
        <Route path="/EventInfo" element={<EventInfo/>}>
          <Route path=':EventInfoId' element={<EventInfo/>}/>
        </Route>
        <Route path="/CreaterInput" element={<CreaterInput/>}/>
        <Route path="/CreaterPage" element={<CreaterPage/>}/>
        <Route path="/Communities" element={<Communities/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path="/SD" element={<PostCategory category='Devtrack'/>}/>
        <Route path="/SF" element={<PostCategory category='Face'/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
