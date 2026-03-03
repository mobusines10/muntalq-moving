import Header from "./components/Header";
import Slider from "./components/Slider";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Map from "./components/Map";
import WhatsAppButton from "./components/WhatsAppButton";
import CallButton from "./components/CallButtton";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Slider />
      <Services />
      <Contact />
      <Map/>
      <WhatsAppButton />
      <CallButton/>
      <Footer/>
    </div>
  );
}

export default App;