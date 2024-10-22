import './App.css';
import Cal from './Cal.js';
import Main from "./Main.js";
import HomeWork from './HomeWork.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Cal/>}/>
          <Route exact path="/main" element={<Main/>}/>
          <Route exact path="/homework" element={<HomeWork/>} />
        </Routes>
      </div >
    </Router>
  );
}

export default App;
