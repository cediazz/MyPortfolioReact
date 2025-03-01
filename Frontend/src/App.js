import NavBar from './Components/Navbar/NavBar';
import './assets/fontawesome-free/css/all.css'
import './assets/styles.css'
import './assets/MyStyle.css'
import Header from './Components/Header/Header';
import Portfolio from './Components/Portfolio/Portfolio';
import AboutSection from './Components/AboutSection/AboutSection';
import ContactSection from './Components/ContactSection/ContactSection';
import Footer from './Components/Footer/Footer';
import { UserProvider } from './context/userContext';

function App() {
  return (
    <UserProvider>
      <NavBar />
      <Header />
      <Portfolio />
      <AboutSection />
      <ContactSection />
      <Footer />
    </UserProvider>
  );
}

export default App;
