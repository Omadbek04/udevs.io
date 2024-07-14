import { useRef, useEffect, useState } from "react";
import { burgerMenu, downArow } from "../../assets/Index";
import { Delever, ErpSystem, Goodzone, Iman, It, LanduageEng, LanguageRus, LogoImage, MobileDevelopment, Optimization, Sms, UxUi } from "../../ui/Image";
import Button from "../../ui/Button";

const Navbar = () => {
  const ActiveRef = useRef();
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    ActiveRef.current.focus();
  }, []);
  return (
    <>
      <header className="border-b fixed top-0 w-full z-10 mb-8 bg-white">
        <nav className=" custom_contianer h-[72px]    flex justify-between items-center">
          <a href="/hero" className=" w-[96px] h-[32px] cursor-pointer">
            <LogoImage />
          </a>

          <ul className="hidden md:flex items-center justify-between gap-6 xl:gap-8 ">
            <li>
              <a ref={ActiveRef} href="#" className={` text-[14px] font-semibold outline-none border-b-2  border-white ${ActiveRef ? " focus:border-primary focus:border-b-2" : "border-white"} hover:border-primary py-[10px] `}>
                Direction
              </a>
            </li>

            <li>
              <a href="#" className="text-[14px] font-semibold  border-b-2 border-white hover:border-primary py-[10px] focus:border-primary">
                Command
              </a>
            </li>

            <li className="text-[14px] font-semibold flex items-center py-[10px] gap-1 relative group hover:last:block">
              <a href="#" className="text-[14px] font-semibold border-b-2  border-white focus:border-primary">
                Services
              </a>
              <img src={downArow} alt="down arrow" width={12} height={12} />

              <ul className="hidden py-3 bg-white border min-w-[300px] shadow-dropdown rounded-md absolute z-10 top-[90%] group-hover:block ">
                <p className="text-[12px] font-bold leading-4 text-gray-400 ml-[1.45rem] mb-5">Services</p>

                <li className="mb-2">
                  <a href="#" className="flex w-full items-center py-2 pl-[34px] pr-[11px] text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 gap-3 focus:bg-primary focus:text-white">
                    <div>
                      <MobileDevelopment />
                    </div>
                    <span className="leading-5 text-[13px] font-normal">Development of mobile applications</span>
                  </a>
                </li>

                <li className="mb-2">
                  <a href="#" className="flex w-full items-center py-2 pl-[34px] pr-[11px] text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 gap-3 focus:bg-primary focus:text-white">
                    <div>
                      <ErpSystem />
                    </div>
                    <span className="leading-5 text-[13px] font-normal">Development and implementation ERP systems</span>
                  </a>
                </li>

                <li className="mb-2">
                  <a href="#" className="flex w-full items-center py-2 pl-[34px] pr-[11px] text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 gap-3 focus:bg-primary focus:text-white">
                    <div>
                      <UxUi />
                    </div>
                    <span className="leading-5 text-[13px] font-normal">User interface, User experience design</span>
                  </a>
                </li>

                <li className="mb-2">
                  <a href="#" className="flex w-full items-center py-2 pl-[34px] pr-[11px] text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 gap-3 focus:bg-primary focus:text-white">
                    <div>
                      <It />
                    </div>
                    <span className="leading-5 text-[13px] font-normal">IT consulting</span>
                  </a>
                </li>

                <li>
                  <a href="#" className="flex w-full items-center py-2 pl-[34px] pr-[11px] text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 gap-3 focus:bg-primary focus:text-white">
                    <div>
                      <Optimization />
                    </div>
                    <span className="leading-5 text-[13px] font-normal">Optimization IT consulting infrastructure</span>
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#" className=" text-[14px] font-semibold border-b-2 border-white hover:border-primary py-[10px] focus:border-primary">
                Tools
              </a>
            </li>

            <li>
              <a href="#" className=" text-[14px] font-semibold border-b-2 border-white hover:border-primary py-[10px] focus:border-primary">
                Clients
              </a>
            </li>

            <li className=" text-[14px] font-semibold flex items-center py-[10px] gap-1 group hover:last:block relative ">
              <a href="#">Portfolio</a>
              <img src={downArow} alt="down arrow" width={12} height={12} />

              <ul className=" hidden py-3 bg-white border min-w-[300px] shadow-dropdown rounded-md absolute z-10 top-[90%]   group-hover:block ">
                <p className="text-[12px] font-bold leading-4 text-gray-400 ml-[1.45rem] mb-5">Portfolio</p>

                <li className="mb-2">
                  <a href="#" className="flex w-full items-center py-2 pl-[34px] pr-[11px] text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 gap-3 focus:bg-primary focus:text-white">
                    <div>
                      <Delever />
                    </div>
                    <span className="leading-5 text-[13px] font-normal">Delever</span>
                  </a>
                </li>

                <li className="mb-2">
                  <a href="#" className="flex w-full items-center py-2 pl-[34px] pr-[11px] text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 gap-3 focus:bg-primary focus:text-white">
                    <div>
                      <Sms />
                    </div>
                    <span className="leading-5 text-[13px] font-normal">Sms.uz</span>
                  </a>
                </li>

                <li className="mb-2">
                  <a href="#" className="flex w-full items-center py-2 pl-[34px] pr-[11px] text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 gap-3 focus:bg-primary focus:text-white">
                    <div>
                      <Goodzone />
                    </div>
                    <span className="leading-5 text-[13px] font-normal">Goodzone</span>
                  </a>
                </li>

                <li className="mb-2">
                  <a href="#" className="flex w-full items-center py-2 pl-[34px] pr-[11px] text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 gap-3 focus:bg-primary focus:text-white">
                    <div>
                      <Iman />
                    </div>
                    <span className="leading-5 text-[13px] font-normal">Iman</span>
                  </a>
                </li>
              </ul>
            </li>

            <li className=" text-[14px] font-semibold flex items-center py-[10px] gap-1  group hover:last:block relative">
              <a href="#">Language</a>
              <img src={downArow} alt="down arrow" width={12} height={12} />

              <ul className=" hidden py-3 bg-white border min-w-[120px] shadow-dropdown rounded-md absolute z-10 top-[90%] left-9   group-hover:block ">
                <li className="mb-2">
                  <a href="#" className="flex w-full items-center py-2 pl-[24px] pr-[11px] text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 gap-3 ">
                    <div className=" w-7 h-7">
                      <LanguageRus />
                    </div>
                    <span className="leading-5 text-[13px] font-normal">Рус</span>
                  </a>
                </li>

                <li className="mb-2">
                  <a href="#" className="flex w-full items-center py-2 pl-[24px] pr-[11px] text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 gap-3 ">
                    <div className=" w-7 h-7">
                      <LanduageEng />
                    </div>
                    <span className="leading-5 text-[13px] font-normal">Eng</span>
                  </a>
                </li>
              </ul>
            </li>

            <li className=" text-[14px] font-semibold ">
              <Button title={"Contact"} url={"#"} py={10} p={16} />
            </li>
          </ul>

          <div className="block md:hidden cursor-pointer" onClick={() => setToggle((prev) => !prev)}>
            <img src={burgerMenu} alt=" burger menu" />
          </div>
        </nav>
      </header>

      <section className=" block md:hidden  w-[100vw]  relative">
        <div className={`${toggle ? " translate-0 " : "translate-x-[100%] "} fixed flex  z-50 top-0 right-0 transition-all ease-in duration-500 flex-col justify-between  pb-[50px] px-5 w-full  bg-navbarClose h-screen `}>
          <div className=" flex  items-center justify-between h-[64px] ">
            <div className="w-[96px] ">
              <LogoImage />
            </div>
            <span className=" cursor-pointer text-2xl font-medium text-primary" onClick={() => setToggle((prev) => !prev)}>
              x
            </span>
          </div>

          <div className=" flex flex-col gap-3 font-semibold text-[32px] text-center">
            <a href="">Services</a>
            <a href="">Clients</a>
            <a href="">Command</a>
          </div>

          <div className=" flex flex-col gap-6">
            <a href="#" className={`   bg-primary flex items-center justify-center w-[99%] h-[56px] hover:h-[57px] text-[20px] font-semibold transition-all hover:w-full duration-300  mx-auto  text-white rounde rounded-md  tracking-wide  outline-none `}>
              Contact
            </a>
            <div className=" flex justify-center items-center gap-6">
              <div className=" bg-primary w-[44px] h-[44px] rounded-full flex items-center justify-center cursor-pointer">
                <svg width={27} height={27} focusable="false" fill="#fff" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                </svg>
              </div>
              <div className=" bg-primary w-[44px] h-[44px] rounded-full flex items-center justify-center cursor-pointer">
                <svg width={27} height={27} fill="#fff" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                </svg>
              </div>
              <div className=" bg-primary w-[44px] h-[44px] rounded-full flex items-center justify-center cursor-pointer">
                <svg width={27} height={27} fill="#fff" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
