import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Knowledge from './components/Knowledge/Knowledge';
import Proyects from './components/Proyects/Proyects';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Contact />
      <About />
      <Proyects />
      <Knowledge />
    </div>
  );
}

export default App;
