import { useRef, useEffect } from "react";
import { downArow } from "../../assets/Index";
import { LogoImage } from "../../ui/Image";
import Button from "../../ui/Button";

const Navbar = () => {
  const ActiveRef = useRef();

  useEffect(() => {
    ActiveRef.current.focus();
  }, []);
  return (
    <header className="border-b fixed top-0 w-full z-10">
      <nav className=" custom_contianer h-[72px]    flex justify-between items-center">
        <div className=" w-[96px] h-[32px] cursor-pointer">
          <LogoImage />
        </div>

        <ul className=" flex items-center justify-between gap-8 ">

          <li>
            <a ref={ActiveRef} href="#" className={` text-[14px] font-semibold outline-none border-b-2  border-white ${ActiveRef ? " focus:border-primary focus:border-b-2" : "border-white"} hover:border-primary py-[10px] `}>Direction</a>
          </li>

          <li >
            <a href="#" className="text-[14px] font-semibold  border-b-2 border-white hover:border-primary py-[10px] focus:border-primary">Command</a>
          </li>

          <li className=" text-[14px] font-semibold flex items-center py-[10px] gap-1">
            <a href="#">Services</a>
            <img src={downArow} alt="down arrow" width={12} height={12} />
                
          </li>

          <li>
            <a href="#"  className=" text-[14px] font-semibold border-b-2 border-white hover:border-primary py-[10px] focus:border-primary">Tools</a>
          </li>

          <li>
            <a href="#"  className=" text-[14px] font-semibold border-b-2 border-white hover:border-primary py-[10px] focus:border-primary">Clients</a>
          </li>

          <li className=" text-[14px] font-semibold flex items-center py-[10px] gap-1">
            <a href="#">Portfolio</a>
            <img src={downArow} alt="down arrow" width={12} height={12} />
          </li>

          <li className=" text-[14px] font-semibold flex items-center py-[10px] gap-1">
            <a href="#">Language</a>
            <img src={downArow} alt="down arrow" width={12} height={12} />
          </li>
          
          <li className=" text-[14px] font-semibold ">
           <Button title={"Contact"} url={"#"}  py={10} p={16}/>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
