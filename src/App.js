
import './App.css';
import Header from './components/header/header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Work from './components/work/Work';


function App() {
  return ( 
    <div>
         <Header/>
        <main className='main'>
          <Home/>
          <About/>
          <Skills/>
          <Qualification/>
          <Work/>
           <Contact/>
          
        </main>
          <Footer/>
          <ScrollUp/>
    </div>
  );
}

export default App;
