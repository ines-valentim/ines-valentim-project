import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import OrderOnline from './components/OrderOnline';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header"/>
      <img
        src={logo.jpg}
        className="App-logo"
        alt="logo"
      />
      <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
      <nav/>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
      <main/>
      <footer/>
      <ul>
        <li><img></img></li>
        <li>Doormat</li>
        <li> Contact </li>
        <li>Social Media Links</li>
      </ul>
    </div>
  );
}

export default App;
