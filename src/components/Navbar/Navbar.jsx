import { useRef, useEffect } from "react";
import { downArow } from "../../assets/Index";
import { Delever, ErpSystem, Goodzone, Iman, It, LanduageEng, LanguageRus, LogoImage, MobileDevelopment, Optimization, Sms, UxUi } from "../../ui/Image";
import Button from "../../ui/Button";

const Navbar = () => {
  const ActiveRef = useRef();

  useEffect(() => {
    ActiveRef.current.focus();
  }, []);
  return (
    <>
      <header className="border-b fixed top-0 w-full z-10">
        <nav className=" custom_contianer h-[72px]    flex justify-between items-center">
          <div className=" w-[96px] h-[32px] cursor-pointer">
            <LogoImage />
          </div>

          <ul className=" flex items-center justify-between gap-8 ">
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
        </nav>
      </header>
    </>
  );
};

export default Navbar;
