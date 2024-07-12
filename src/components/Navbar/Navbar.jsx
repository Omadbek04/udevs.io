import { LogoImage } from "../../ui/Image";

const Navbar = () => {
  return (
    <header>
      <nav className=" custom_contianer">
        <div className=" w-[96px] h-[32px] cursor-pointer">
          <LogoImage />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
