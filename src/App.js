import './App.scss';
import { BrowserRouter as Router, Route, Navigate, Routes, Outlet } from 'react-router-dom';
import LandingPage from './LandingPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />


        </Routes>

      </div>
    </Router>
  );
};


export default App;
