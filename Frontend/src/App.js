import NavBar from './Components/Navbar/NavBar';
import './assets/fontawesome-free/css/all.css'
import './assets/styles.css'
import './assets/MyStyle.css'
import Header from './Components/Header/Header';
import Portfolio from './Components/Portfolio/Portfolio';
import AboutSection from './Components/AboutSection/AboutSection';
import ContactSection from './Components/ContactSection/ContactSection';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Portfolio />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
