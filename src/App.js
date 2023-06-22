import './App.scss';
import Home from './home';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
      </div>
    </Router>
  );
};


export default App;
