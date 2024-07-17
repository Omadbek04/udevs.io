import { useState } from "react";
import { YMaps, Map, Placemark } from 'react-yandex-maps';
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "" });
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!name) newErrors.name = "Fill in the field";
    if (!email) newErrors.email = "Fill in the field";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      // Formani jo'natish kodini yozing
      console.log("Form submitted", { name, email, projectDescription });
    }
  };

  return (
    <section id="contact" className=" mb-9" data-aos="zoom-in-up">
      <div className="custom_contianer">
        <h1 className="text-[32px] md:text-[64px] text-start font-extrabold text-primary mb-[42px]">Contact us</h1>

        <div className=" mt-5 p-0  md:mt-20 md:pt-[40px] md:px-[98px] md:pb-[88px]   md:bg-white conact ">
        <h2 className=" text-secondary font-semibold text-[20px] mb-3 ">Leave us a message</h2>
        <div className="flex items-start justify-between gap-[30px]  flex-col md:flex-row">
        <form onSubmit={handleSubmit} className="space-y-6 w-full md:max-w-[424px]">
            <div className="w-full border-0 m-0 inline-flex p-0 relative min-w-0 flex-col align-top">
              {errors.name && <div className="text-red-500 mb-2 text-lg">{errors.name}</div>}
              <input placeholder="Name" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="w-full border-0 m-0 inline-flex p-0 relative min-w-0 flex-col align-top">
              {errors.email && <div className="text-red-500 mb-2 text-lg">{errors.email}</div>}
              <input placeholder="Email" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="w-full border-0 m-0 inline-flex p-0 relative min-w-0 flex-col align-top">
              <textarea placeholder="Briefly describe your project" id="projectDescription" rows="4" value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)} className=" resize-none mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="mt-6">
              <a href="#" className={` block w-[248px] mx-auto md:mx-0 text-center bg-primary py-[10px] cursor-pointer  px-4 text-white rounde rounded-md  tracking-wide  outline-none btn`}>
                Send
              </a>
            </div>
          </form>

          <div className=" flex flex-col gap-4 w-full md:max-w-[424px]">
            <a className=" flex gap-1 text-secondary items-center  font-medium " target="_blank" href="https://yandex.com/map-widget/v1/?um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&source=constructor">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDE0QzEzLjY1NjkgMTQgMTUgMTIuNjU2OSAxNSAxMUMxNSA5LjM0MzE1IDEzLjY1NjkgOCAxMiA4QzEwLjM0MzEgOCA5IDkuMzQzMTUgOSAxMUM5IDEyLjY1NjkgMTAuMzQzMSAxNCAxMiAxNFoiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTcuNjU3IDE2LjY1NjdMMTMuNDE0IDIwLjg5OTdDMTMuMDM5IDIxLjI3NDMgMTIuNTMwNiAyMS40ODQ4IDEyLjAwMDUgMjEuNDg0OEMxMS40NzA0IDIxLjQ4NDggMTAuOTYyIDIxLjI3NDMgMTAuNTg3IDIwLjg5OTdMNi4zNDMgMTYuNjU2N0M1LjIyNDIyIDE1LjUzNzkgNC40NjIzNCAxNC4xMTI0IDQuMTUzNjkgMTIuNTYwNkMzLjg0NTA0IDExLjAwODcgNC4wMDM0OSA5LjQwMDIyIDQuNjA5MDEgNy45Mzg0NEM1LjIxNDUyIDYuNDc2NjUgNi4yMzk5IDUuMjI3MjUgNy41NTU0OCA0LjM0ODIxQzguODcxMDcgMy40NjkxOCAxMC40MTc4IDMgMTIgM0MxMy41ODIyIDMgMTUuMTI4OSAzLjQ2OTE4IDE2LjQ0NDUgNC4zNDgyMUMxNy43NjAxIDUuMjI3MjUgMTguNzg1NSA2LjQ3NjY1IDE5LjM5MSA3LjkzODQ0QzE5Ljk5NjUgOS40MDAyMiAyMC4xNTUgMTEuMDA4NyAxOS44NDYzIDEyLjU2MDZDMTkuNTM3NyAxNC4xMTI0IDE4Ljc3NTggMTUuNTM3OSAxNy42NTcgMTYuNjU2N1YxNi42NTY3WiIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
                alt="Location"
              />
              <span>Ташкент, Мирзо-Улугбекский район, 5-й пр. Курган, 32 адрес</span>
            </a>

            <a href="tel:+998916977181" className=" flex gap-1 text-secondary   font-medium items-center">
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNiA0SDEwTDEyIDlMOS41IDEwLjVDMTAuNTcxIDEyLjY3MTUgMTIuMzI4NSAxNC40MjkgMTQuNSAxNS41TDE2IDEzTDIxIDE1VjE5QzIxIDE5LjUzMDQgMjAuNzg5MyAyMC4wMzkxIDIwLjQxNDIgMjAuNDE0MkMyMC4wMzkxIDIwLjc4OTMgMTkuNTMwNCAyMSAxOSAyMUMxNS4wOTkzIDIwLjc2MyAxMS40MjAyIDE5LjEwNjUgOC42NTY4MyAxNi4zNDMyQzUuODkzNSAxMy41Nzk4IDQuMjM3MDUgOS45MDA3NCA0IDZDNCA1LjQ2OTU3IDQuMjEwNzEgNC45NjA4NiA0LjU4NTc5IDQuNTg1NzlDNC45NjA4NiA0LjIxMDcxIDUuNDY5NTcgNCA2IDQiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K" alt="Phone" />
              <span>+998 91 697 71 81</span>
            </a>

            <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" className=" flex gap-1 items-center text-secondary">
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5IDVINUMzLjg5NTQzIDUgMyA1Ljg5NTQzIDMgN1YxN0MzIDE4LjEwNDYgMy44OTU0MyAxOSA1IDE5SDE5QzIwLjEwNDYgMTkgMjEgMTguMTA0NiAyMSAxN1Y3QzIxIDUuODk1NDMgMjAuMTA0NiA1IDE5IDVaIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTMgN0wxMiAxM0wyMSA3IiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==" alt="Email icon" />
              <span>abdullayevomadbek709@gmail.com</span>
            </a>
            <a href="https://t.me/A_Omadbek" target="_blank" className="   font-medium flex gap-1 items-center text-primary">
              <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" fill="#1B5BF7" width={24} height={24}>
                <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"></path>
              </svg>
              <span>t.me/A_Omadbek</span>
            </a>

            <div className=" flex items-center gap-4 ">
              <a href="https://udevs-eight.vercel.app/" target="_blank">
                <svg className=" hover:fill-red-600 fill-primary" width={24} height={24} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"></path>
                </svg>
              </a>
              <a href="https://udevs-eight.vercel.app/" target="_blank">
                <svg focusable="false" viewBox="0 0 24 24" className=" hover:fill-red-400 fill-primary" aria-hidden="true" width={24} height={24} >
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                </svg>
              </a>
              <a href="https://udevs-eight.vercel.app/"  target="_blank"  >
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" className=" hover:fill-blue-800 fill-primary" width={24} height={24}>
                  <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path>
                </svg>
              </a>
              <a href="https://udevs-eight.vercel.app/"  >
                <svg focusable="false" viewBox="0 0 24 24"   className=" hover:fill-cyan-500 fill-primary" aria-hidden="true" target="_blank" width={24} height={24}>
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                </svg>
              </a>
            </div>
                <div className="hidden md:block  w-full">
                <YMaps>
                <Map defaultState={{ center: [55.751574, 37.573856], zoom: 9 }} style={{ width: '100%', height: '200px' }}>
                  <Placemark geometry={[55.751574, 37.573856]} />
                </Map>
              </YMaps>
                </div>
          </div>
        </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
