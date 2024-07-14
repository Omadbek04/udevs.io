// import { Hero } from "./components/Hero/Hero";
import Command from "./components/Command/Command";
import Direction from "./components/Direction/Direction";
import { Navbar } from "./components/Index";
import DevelopmentMobileApplication from "./components/Service/Developmen-of-mobile/DevelopmentMobileApplication";
import Erp from "./components/Service/Development-erp-sysytem/Erp";
import UxIx from "./components/Service/User-Intarface/UxIx";
// <Hero />


const App = () => {
  return (
    <>
    <Navbar />
    <Direction />
    <Command />
    <DevelopmentMobileApplication />
    <Erp/>
    <UxIx />
    </>
  );
};

export default App;
