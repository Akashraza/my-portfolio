import logo from './logo.svg';
import './App.css';
import Main from './Components/Header/Main';
import About from './Components/about/About';
import { Experience } from './Components/Experience/Experience';
import Servies from './Components/services/Servies';
import { Portfolio } from './Components/portfolio/Portfolio';
import { Contact } from './Components/contact/Contact';
import { Footer } from './Components/footer/Footer';
import { Nav } from './Components/nav/Nav';


function App() {
  return (
    <div className="App">
      <Main />
      <About />
      <Experience />
      <Servies />
      <Portfolio />
      <Contact />
      <Footer />
      <Nav />
    </div>
  );
}

export default App;
