import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Header from './components/Header/Header';
import Help from './components/Help/Help';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Help />
    </div>
  );
}

export default App;
