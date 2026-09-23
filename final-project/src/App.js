import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header"/>
      <img
        src={logo.jpg}
        className="App-logo"
        alt="logo"
      />
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
