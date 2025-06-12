import { FaYoutube, FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  // <div
  //   className="relative py-10 px-20 bg-mainAlt"
  //   id="contact"
  //   data-section={"contact"}
  // >
  //   <h1 className="text-center text-white text-4xl font-extrabold mb-20">
  //     تــو<span className="text-main">ا</span>صــل
  //   </h1>
  //   <div className="bg-main md:w-1/2 mx-auto p-10 rounded-xl flex justify-center items-center max-md:flex-col max-md:justify-center">
  //     {/* <h1 className="text-right text-white text-5xl font-extrabold max-md:text-[30px]">
  //       عــبـدالـلـه عــبـدالـعـزيـز
  //     </h1> */}
  //     <div className="flex gap-4">
  //       <a href="https://www.youtube.com/@abodspro1" target="_blank">
  //         <FontAwesomeIcon
  //           icon={faYoutube}
  //           size="2x"
  //           color="red"
  //           className="rounded-xl w-[60px] h-[46px] translate-x-[-7px] translate-y-[-3px] hover:scale-110 duration-300 cursor-pointer"
  //         />
  //       </a>
  //       <a href="https://www.instagram.com/abodspro1/" target="_blank">
  //         <FontAwesomeIcon
  //           icon={faInstagram}
  //           size="2x"
  //           color="white"
  //           className="rounded-xl px-2 py-1 bg-gradient-to-t from-[#F58529] via-[#DD2A7B] to-[#8134AF] cursor-pointer hover:scale-110 duration-300"
  //         />
  //       </a>
  //       <a href="https://wa.me/966531177595" target="_blank">
  //         <FontAwesomeIcon
  //           icon={faWhatsapp}
  //           size="2x"
  //           color="white"
  //           className="rounded-xl px-2 py-1 bg-[#25D366] hover:scale-110 duration-300 cursor-pointer"
  //         />
  //       </a>
  //     </div>
  //   </div>
  // </div>
  return (
    <footer id="contact" className="flex justify-center bg-[#473824]">
      <div className="flex max-w-[960px] flex-1 flex-col">
        <footer className="flex flex-col gap-6 px-5 pt-10 pb-3 text-center @container">
          <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
            <a
              className="text-[#c8b192] text-3xl font-bold leading-normal min-w-40"
              href="#"
            >
              تواصل
            </a>
          </div>
          <div className="flex justify-center gap-4 text-[#c8b192] text-2xl">
            <a
              className="text-4xl transition-all hover:scale-110"
              href="https://www.youtube.com/@abodspro1"
              target="_blank"
            >
              <FaYoutube />
            </a>
            <a
              className="text-4xl transition-all hover:scale-110"
              href="https://wa.me/966531177595"
              target="_blank"
            >
              <FaWhatsapp />
            </a>
            <a
              className="text-4xl transition-all hover:scale-110"
              href="https://www.instagram.com/abodspro"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a
              className="text-4xl transition-all hover:scale-110"
              href="https://x.com/abodspro"
              target="_blank"
            >
              <FaXTwitter />
            </a>
            <a
              className="text-4xl transition-all hover:scale-110"
              href="https://www.tiktok.com/@abodspro"
              target="_blank"
            >
              <FaTiktok />
            </a>
          </div>
          <p
            style={{ direction: "ltr" }}
            className="text-[#c8b192] text-xl font-normal leading-normal"
          >
            &copy;2025 Made With &quot;Osama Abdulaziz&quot;
          </p>
        </footer>
      </div>
    </footer>
  );
};

export default Contact;
