import './App.css';
import { Routes, Route } from 'react-router-dom';
import HOME from "./pages/HOME/HOME.jsx";
import TVSHOW from "./pages/TVSHOW/TVSHOW.jsx";
import MOVIES from "./pages/MOVIES/MOVIES.jsx";
import NEWPOPULAR from "./pages/NEWPOPULAR/NEWPOPULAR.jsx";
import SIGNINOUT from "./Signin/Signin.jsx";
import SIGNUP from "./Signup/signup.js";
import SIGNINHINDI from "./Signin/Signinhindi.jsx"

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<SIGNUP/>} />
      <Route path="/HOME" element={<HOME />} />
      <Route path="/TVSHOW" element={<TVSHOW />} />
      <Route path="/MOVIES" element={<MOVIES />} />
      <Route path="/NEWPOPULAR" element={<NEWPOPULAR />} />
      <Route path="/sign" element={<SIGNINOUT />} />
      <Route path="/signinhindi" element={<SIGNINHINDI/>} />
    </Routes>
  );  
}

export default App;
