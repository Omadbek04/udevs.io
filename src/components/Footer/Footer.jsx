import { Link } from "react-scroll";
import { LogoImage } from "../../ui/Image";

const Footer = () => {
  return (
    <footer className=" bg-bacground py-10 ">
      <div className="custom_contianer">
        <div className="w-[168px]  mx-auto">
          <LogoImage />
        </div>
        <div className="  flex align-center justify-between flex-col md:flex-row border-0 md:border-b pb-4  border-primary">
          <div className="flex flex-col items-start  ">
            <h3 className="py-8 font-semibold ">About us</h3>
            <Link to="direction" smooth duration={500} className=" text-primary border-b border-transparent hover:border-primary leading-7" href="#">
              Direction
            </Link>
            <Link to="team" smooth duration={500} className="text-primary border-b border-transparent hover:border-primary leading-7" href="#">
              Command
            </Link>
            <Link to="tools" smooth duration={500} className="text-primary border-b border-transparent hover:border-primary leading-7" href="#">
              Tools
            </Link>
            <Link to="clients" smooth duration={500} className="text-primary border-b border-transparent hover:border-primary leading-7" href="#">
              Clients
            </Link>
          </div>

          <div className="flex flex-col items-start ">
            <h3 className="py-8 font-semibold">Services</h3>
            <Link to="development" smooth duration={500} className="text-primary border-b border-transparent hover:border-primary leading-7" href="#">
              Development of mobile applications
            </Link>
            <Link to="erp" smooth duration={500} className="text-primary border-b border-transparent hover:border-primary leading-7" href="#">
              Development and implementation ERP systems
            </Link>
            <Link to="ux-ui" smooth duration={500} className="text-primary border-b border-transparent hover:border-primary leading-7" href="#">
            User interface, User experience design
            </Link>
            <Link to="itcons" duration={500} smooth className="text-primary border-b border-transparent hover:border-primary leading-7" href="#">
            IT consulting
            </Link>
            <Link to="optimization" smooth duration={500} className="text-primary border-b border-transparent hover:border-primary leading-7" href="#">
            Optimization IT consulting infrastructure
            </Link>
          </div>

          <div className="flex flex-col items-start ">
            <h3 className="py-8 font-semibold">Portfolio</h3>
            <Link to="delever" smooth duration={500} className="text-primary border-b border-transparent hover:border-primary leading-7" href="#">
              Delever
            </Link>
            <Link to="sms" smooth duration={500}  className="text-primary border-b border-transparent hover:border-primary leading-7" href="#">
              Sms.uz
            </Link>
            <Link to="goodzone" smooth duration={500}  className="text-primary border-b border-transparent hover:border-primary leading-7" href="#">
              Goodzone
            </Link>
            <Link to="iman  " smooth duration={500}  className="text-primary border-b border-transparent hover:border-primary leading-7" href="#">
              Iman
            </Link>
          </div>
        </div>

        <div className=" flex justify-between flex-col-reverse md:flex-row items-center gap-3 mt-2">
          <p className="text-primary"> © {new Date().getFullYear()} Udevs. All rights reserved</p>

          <div className="flex align-center">
            <div className=" cursor-pointer w-[38px] h-[38px] flex items-center justify-center mr-5 bg-footer shadow rounded-full ">
              <svg width={24} height={24} focusable="false" fill="#1b5bf7" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
              </svg>
            </div>

            <div className="  cursor-pointer w-[38px] h-[38px] flex items-center justify-center mr-5 bg-footer shadow rounded-full ">
              <svg width={24} height={24} focusable="false" fill="#1b5bf7" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
              </svg>
            </div>

            <div className=" cursor-pointer w-[38px] h-[38px] flex items-center justify-center mr-5 bg-footer shadow rounded-full ">
              <svg width={24} height={24} focusable="false" fill="#1b5bf7" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
