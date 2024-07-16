import { useState } from "react";
import { toolsCard } from "../../constants";

const Tools = () => {
  const [selected, setSelected] = useState("");

  const handleCheckboxChange = (e) => {
    setSelected(e.target.id);
    if (selected == e.target.id) {
      setSelected("");
    }
  };

 

  const toolsLink = [
    {
      styleClass: "frontend",
      styleId: "frontend",
      title: "Frontend",
    },
    {
      styleClass: "backend",
      styleId: "backend",
      title: "Backend",
    },
    {
      styleClass: "devops",
      styleId: "devops",
      title: "Devops",
    },
    {
      styleClass: "testing",
      styleId: "testing",
      title: "Testing",
    },
    {
      styleClass: "ux-ui",
      styleId: "ux/ui",
      title: "UXUI",
    },
    {
      styleClass: "infrastructure",
      styleId: "infrastructure",
      title: "Infrastructure",
    },
    {
      styleClass: "mobile",
      styleId: "mobile",
      title: "Mobile",
    },
  ];

  return (
    <section id="tools" className="py-4 md:py-[80px] bg-bacground">
      <div className="custom_contianer">
        <h1 className="text-[32px] md:text-[64px] font-extrabold text-primary">Tools</h1>

        <div className="flex gap-[100px] md:gap-5 mt-5 md:mt-[80px] mb-10">
          <div className="flex gap-5 flex-col md:flex-row">
            {toolsLink.slice(0, 4).map((tool) => (
              <div key={tool.title} className="flex items-center gap-1 cursor-pointer">
                <div className="inline-flex items-center">
                  <label className="relative w-7 h-7 flex items-center justify-center border-2 border-primary rounded-full cursor-pointer" htmlFor={tool.styleId}>
                    <input type="checkbox" className="h-4 w-4 cursor-pointer appearance-none rounded-full border-[#1b5bf7] transition-all checked:bg-[#1b5bf7]" id={tool.styleId} checked={selected === tool.styleId} onChange={handleCheckboxChange} />
                  </label>
                </div>
                <span className="text-[14px] leading-8 font-semibold">{tool.title}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-5 flex-col md:flex-row">
            {toolsLink.slice(4).map((tool) => (
              <div key={tool.title} className="flex items-center gap-1 cursor-pointer">
                <div className="inline-flex items-center">
                  <label className="relative w-7 h-7 flex items-center justify-center border-2 border-primary rounded-full cursor-pointer" htmlFor={tool.styleId}>
                    <input type="checkbox" className="h-4 w-4 cursor-pointer appearance-none rounded-full border-[#1b5bf7] transition-all checked:bg-[#1b5bf7]" id={tool.styleId} checked={selected === tool.styleId} onChange={handleCheckboxChange} />
                  </label>
                </div>
                <span className="text-[14px] leading-8 font-semibold">{tool.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className=" grid  grid-cols-5 md:grid-cols-12 gap-4">
          {toolsCard.map((item) => (
            <div key={item.title} className={`h-[90px] w-full flex flex-col justify-center items-center rounded-[5px] ${selected === "" || item.styleId === selected ? item.styleClass : "hide"}`}>
              <img src={item.src} alt={item.title} className="w-[24px] h-[24px] mb-[15px]" />
              <span className="text-[13px] whitespace-nowrap leading-3 text-ellipsis">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
