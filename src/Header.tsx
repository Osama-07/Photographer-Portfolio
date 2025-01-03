import { useEffect } from "react";

function Header() {
  useEffect(() => {
    const menu = document.querySelector(".menu");
    const handleClick = (e: MouseEvent) => {
      const isClickOutsideMenu = menu && !menu.contains(e.target as Node);
      const isMenuVisible = menu && !menu.classList.contains("hidden");

      if (isClickOutsideMenu && isMenuVisible) {
        console.log(e.target);
        menu?.classList.add("hidden");
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <nav className="md:px-32 bg-black backdrop-blur bg-opacity-50 fixed w-full z-20 top-0 start-0">
        <div className="w-full flex flex-wrap items-center justify-around max-md:justify-between p-4">
          <a href="#home" className="flex items-center space-x-3">
            <img src="/Abodspro-Logo.PNG" className="h-10 ml-4" alt="Logo" />
            <span className="max-md:hidden self-center text-xl font-semibold whitespace-nowrap text-white">
              الـمـصـور &nbsp; <span className="main-color">|</span> &nbsp;
              عـبـدالله عـبـدالـعـزيـز
            </span>
          </a>
          <div className="md:hidden flex md:order-2 space-x-3 md:space-x-0">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 darktext-gray-400 hover:bg-gray-700 focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={(e) => {
                e.stopPropagation();
                const menu = document.querySelector(".menu");
                menu?.classList.toggle("hidden");
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="menu hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col md:bg-transparent  p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:mt-0 md:border-0">
              <li>
                <a
                  href="#home"
                  className="text-xl block mx-3 py-2 px-3 text-white md:hover:text-orange-700 rounded md:bg-transparent md:p-0 max-md:hover:bg-orange-700"
                  aria-current="page"
                >
                  الرئيسية
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-xl block mx-3 py-2 px-3 text-white md:hover:text-orange-700 rounded md:bg-transparent md:p-0 max-md:hover:bg-orange-700"
                >
                  عني
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className="text-xl block mx-3 py-2 px-3 text-white md:hover:text-orange-700 rounded md:bg-transparent md:p-0 max-md:hover:bg-orange-700"
                >
                  أعمالي
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-xl block mx-3 py-2 px-3 text-white md:hover:text-orange-700 rounded md:bg-transparent md:p-0 max-md:hover:bg-orange-700"
                >
                  خدمات
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-xl block mx-3 py-2 px-3 text-white md:hover:text-orange-700 rounded md:bg-transparent md:p-0  max-md:hover:bg-orange-700"
                >
                  تواصل
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
