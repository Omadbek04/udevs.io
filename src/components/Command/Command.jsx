import { useEffect, useState } from "react";
import { teamImage } from "../../assets/Index";

const Command = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="team" className="bg-navbarClose py-20">
      <div className="custom_contianer">
        <h1 className="text-[32px] md:text-[64px] text-start font-extrabold text-primary mb-[42px]">Team</h1>
        <div className="flex items-center justify-between flex-col-reverse md:flex-row gap-3 md:gap-0">
          <div className="flex-1">
            <p className="max-w-[500px] mb-[30px] text-[20px]  font-medium text-secondary leading-10">For each project, we form a team that includes a project manager, business analyst, UI / UX designer, DevOps, QA engineer, backend and front-end developers.</p>
            <div className="flex items-center text-primary text-[80px] md:text-[120px] mb-4 font-bold leading-0 md:leading-[70px]">
              <span>{counter}</span>

              <span className={` ${counter == 100 ? " opacity-100" : " opacity-0"} transition-all   duration-1000`}>+</span>
            </div>
            <p className=" text-[27px] md:text-[40px]  text-secondary  font-extrabold  mb-[26px]">Dedicated team</p>
          </div>
          <div>
            <img src={teamImage} alt="Software development agency" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Command;
