import { useState } from 'react';

const Tools = () => {
  const [selected, setSelected] = useState('');

  const handleCheckboxChange = (e) => {
    setSelected(e.target.id);
  };

  return (
    <section id="tools" className="py-4 md:py-[80px]">
      <div className="custom_contianer">
        <h1 className="text-[32px] md:text-[64px] font-extrabold text-primary">Tools</h1>
        <div className="flex gap-[100px] md:gap-5 mt-5 md:mt-[80px]">
          <div className="flex gap-5 flex-col md:flex-row">
            {/* Frontend */}
            <div className="flex items-center gap-1 cursor-pointer">
              <div className="inline-flex items-center">
                <label
                  className="relative w-7 h-7 flex items-center justify-center border-2 border-primary rounded-full cursor-pointer"
                  htmlFor="frontend"
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4 cursor-pointer appearance-none rounded-full border-[#1b5bf7] transition-all checked:bg-[#1b5bf7]"
                    id="frontend"
                    checked={selected === 'frontend'}
                    onChange={handleCheckboxChange}
                  />
                </label>
              </div>
              <span className="text-[14px] leading-8 font-semibold">Frontend</span>
            </div>

            {/* Backend */}
            <div className="flex items-center gap-1 cursor-pointer">
              <div className="inline-flex items-center">
                <label
                  className="relative w-7 h-7 flex items-center justify-center border-2 border-primary rounded-full cursor-pointer"
                  htmlFor="backend"
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4 cursor-pointer appearance-none rounded-full border-[#1b5bf7] transition-all checked:bg-[#1b5bf7]"
                    id="backend"
                    checked={selected === 'backend'}
                    onChange={handleCheckboxChange}
                  />
                </label>
              </div>
              <span className="text-[14px] leading-8 font-semibold">Backend</span>
            </div>

            {/* Devops */}
            <div className="flex items-center gap-1 cursor-pointer">
              <div className="inline-flex items-center">
                <label
                  className="relative w-7 h-7 flex items-center justify-center border-2 border-primary rounded-full cursor-pointer"
                  htmlFor="devops"
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4 cursor-pointer appearance-none rounded-full border-[#1b5bf7] transition-all checked:bg-[#1b5bf7]"
                    id="devops"
                    checked={selected === 'devops'}
                    onChange={handleCheckboxChange}
                  />
                </label>
              </div>
              <span className="text-[14px] leading-8 font-semibold">Devops</span>
            </div>

            {/* Testing */}
            <div className="flex items-center gap-1 cursor-pointer">
              <div className="inline-flex items-center">
                <label
                  className="relative w-7 h-7 flex items-center justify-center border-2 border-primary rounded-full cursor-pointer"
                  htmlFor="testing"
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4 cursor-pointer appearance-none rounded-full border-[#1b5bf7] transition-all checked:bg-[#1b5bf7]"
                    id="testing"
                    checked={selected === 'testing'}
                    onChange={handleCheckboxChange}
                  />
                </label>
              </div>
              <span className="text-[14px] leading-8 font-semibold">Testing</span>
            </div>
          </div>

          <div className="flex gap-5 flex-col md:flex-row">
            {/* UX/UI */}
            <div className="flex items-center gap-1 cursor-pointer">
              <div className="inline-flex items-center">
                <label
                  className="relative w-7 h-7 flex items-center justify-center border-2 border-primary rounded-full cursor-pointer"
                  htmlFor="ux/ui"
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4 cursor-pointer appearance-none rounded-full border-[#1b5bf7] transition-all checked:bg-[#1b5bf7]"
                    id="ux/ui"
                    checked={selected === 'ux/ui'}
                    onChange={handleCheckboxChange}
                  />
                </label>
              </div>
              <span className="text-[14px] leading-8 font-semibold">UX/UI</span>
            </div>

            {/* Infrastructure */}
            <div className="flex items-center gap-1 cursor-pointer">
              <div className="inline-flex items-center">
                <label
                  className="relative w-7 h-7 flex items-center justify-center border-2 border-primary rounded-full cursor-pointer"
                  htmlFor="infrastructure"
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4 cursor-pointer appearance-none rounded-full border-[#1b5bf7] transition-all checked:bg-[#1b5bf7]"
                    id="infrastructure"
                    checked={selected === 'infrastructure'}
                    onChange={handleCheckboxChange}
                  />
                </label>
              </div>
              <span className="text-[14px] leading-8 font-semibold">Infrastructure</span>
            </div>

            {/* Mobile */}
            <div className="flex items-center gap-1 cursor-pointer">
              <div className="inline-flex items-center">
                <label
                  className="relative w-7 h-7 flex items-center justify-center border-2 border-primary rounded-full cursor-pointer"
                  htmlFor="mobile"
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4 cursor-pointer appearance-none rounded-full border-[#1b5bf7] transition-all checked:bg-[#1b5bf7]"
                    id="mobile"
                    checked={selected === 'mobile'}
                    onChange={handleCheckboxChange}
                  />
                </label>
              </div>
              <span className="text-[14px] leading-8 font-semibold">Mobile</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
