import { useEffect } from "react";
import { LogoImage } from "../../ui/Image";
import { hero } from "../../assets/Index";

export const Hero = () => {
  useEffect(() => {
    consoleText(["D", "e", "v", "e", "l", "o", "p", "m", "e", "n", "t", " ", "o", "f", " ", "m", "o", "b", "i", "l", "e", " ", "a", "p", "p", "l", "i", "c", "a", "t", "i", "o", "n", "s"]);
  }, []);

  function consoleText(chars) {
    const target = document.getElementById("text");
    let letterCount = 0;
    let increment = 1;
    let waiting = false;

    const interval = setInterval(() => {
      if (target) {
        if (!waiting) {
          target.innerHTML = chars.slice(0, letterCount).join("");
          letterCount += increment;

          if (letterCount > chars.length) {
            waiting = true;
            setTimeout(() => {
              increment = -1;
              waiting = false;
            }, 1000);
          } else if (letterCount < 0) {
            increment = 1;
            waiting = true;
            setTimeout(() => {
              waiting = false;
            }, 1000);
          }
        }
      }
    }, 150);
  }

  return (
    <section id="hero" className=" h-screen flex flex-col justify-center ">
      <div className=" custom_contianer">
        <div className="mt-[140px]  flex items-center justify-between flex-col gap-12 md:gap-0 md:flex-row">
          <div className=" flex flex-col items-center md:items-stretch">
            <div className=" w-[125px] md:w-[269px]  mb-6">
              <LogoImage />
            </div>
            <h1 className=" text-[24px] md:text-[40px]  mb-[20px] font-extrabold text-secondary w-full  md:w-[462px]">IT-Outsourcin Company</h1>
            <div className=" w-full  md:w-[462px]">
              <span id="text" className=" text-[24px] md:text-[40px] font-semibold text-primary"></span>
            </div>
            <a href="#" className={` mt-7 hidden md:block  max-w-[248px] bg-primary py-[12px] font-bold  px-4 text-white text-center rounded-md  tracking-wide  outline-none btn`}>
              Contact
            </a>
          </div>
          <div>
            <img src={hero} alt=" hero title" />
          </div>
        </div>
      </div>
    </section>
  );
};
