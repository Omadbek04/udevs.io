// import { Hero } from "./components/Hero/Hero";
import Clients from "./components/Clients/Clients";
import Command from "./components/Command/Command";
import Contact from "./components/Contact/Contact";
import Direction from "./components/Direction/Direction";
import { HowWeWork } from "./components/HowWeWork";
import { Navbar } from "./components/Index";
import Delever from "./components/Portfolio/Delever/Delever";
import Goodzone from "./components/Portfolio/GoodZone/Goodzone";
import Iman from "./components/Portfolio/Iman/Iman";
import Sms from "./components/Portfolio/Sms-uz/Sms";
import DevelopmentMobileApplication from "./components/Service/Developmen-of-mobile/DevelopmentMobileApplication";
import Erp from "./components/Service/Development-erp-sysytem/Erp";
import ItConsulting from "./components/Service/It-consulting/ItConsulting";
import Optimization from "./components/Service/Optimazition-it-consulting/Optimization";
import UxIx from "./components/Service/User-Intarface/UxIx";
import Tools from "./components/Tools/Tools";
// <Hero />

const App = () => {
  return (
    <>
      <Navbar />
      <Direction />
      <Command />
      <DevelopmentMobileApplication />
      <Erp />
      <UxIx />
      <Optimization />
      <ItConsulting/>
      <Tools/>
      <Clients/>
      <Delever/>
      <Sms/>
      <Goodzone/>
      <Iman/>
      <HowWeWork/>
      <Contact/>
    </>
  );
};

export default App;
