import './App.css';
import Cal from './Cal.js';
import Admin from "./Admin.js";
import Main from './Main.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route exact path="/calendar" element={<Cal/>}/>
          <Route exact path="/admin" element={<Admin/>}/>
        </Routes>
      </div >
    </Router>
  );
}

export default App;
