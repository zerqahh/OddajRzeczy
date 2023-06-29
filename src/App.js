import './App.scss';
import { BrowserRouter as Router, Route, Navigate, Routes, Outlet } from 'react-router-dom';
import LandingPage from './LandingPage';
import LoginPage from './loginpage';
import RegisterPage from './registerpage';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/logowanie" element={<LoginPage />} />
          <Route path="/rejestracja" element={<RegisterPage />} />
        </Routes>

      </div>
    </Router>
  );
};


export default App;
