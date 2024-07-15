// import { Hero } from "./components/Hero/Hero";
import Command from "./components/Command/Command";
import Direction from "./components/Direction/Direction";
import { Navbar } from "./components/Index";
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
    </>
  );
};

export default App;
