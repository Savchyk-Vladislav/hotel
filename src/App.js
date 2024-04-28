import './App.css';
import Logo from './components/Logo/Logo.js';
import StickyHeader from './components/StickyHeader/StickyHeader.js';
import Navbar from './components/Navbar/Navbar.js';
import Banner from './components/Banner/Banner.js';
import FormTabs from './components/FormTabs/FormTabs.js';
import Welcome from './components/Welcome/Welcome.js';
import Gutters from './components/Gutters/Gutters.js';
import EmailSubscribe from './components/EmailSubscribe/EmailSubscribe.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div>
      <Logo />
      <StickyHeader />
      <Navbar />
      <Banner />
      <FormTabs />
      <Welcome />
      <Gutters />
      <EmailSubscribe />
      <Footer />
    </div>
  );
}

export default App;
