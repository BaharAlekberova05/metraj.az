import { CgMenu } from "react-icons/cg";
import { OpenContext } from "../contexts/OpenContext";
import { IoMdClose } from "react-icons/io";
import { FaAngleDown, FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiLogoLinkedin } from "react-icons/bi";
import { FiInstagram } from "react-icons/fi";

const Navbar = () => {
  const { isOpen, setIsOpen } = useContext(OpenContext);

  return (
    <div className="h-20 w-full p-4 flex items-center justify-between relative">
      <div className="w-[40%] h-full">
        <img
          src="src/assets/img/logo.png"
          alt="Site logo"
          className="size-full object-cover"
        />
      </div>

      <div className="flex items-center space-x-3">
        <div className="flex items-center justify-center border-[0.8px] border-[#ECECEC] rounded-md p-2 cursor-pointer">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.749 6C15.749 6.99456 15.3539 7.94839 14.6507 8.65165C13.9474 9.35491 12.9936 9.75 11.999 9.75C11.0044 9.75 10.0506 9.35491 9.34735 8.65165C8.64409 7.94839 8.249 6.99456 8.249 6C8.249 5.00544 8.64409 4.05161 9.34735 3.34835C10.0506 2.64509 11.0044 2.25 11.999 2.25C12.9936 2.25 13.9474 2.64509 14.6507 3.34835C15.3539 4.05161 15.749 5.00544 15.749 6ZM4.5 20.118C4.53213 18.1504 5.33634 16.2742 6.73918 14.894C8.14202 13.5139 10.0311 12.7405 11.999 12.7405C13.9669 12.7405 15.856 13.5139 17.2588 14.894C18.6617 16.2742 19.4659 18.1504 19.498 20.118C17.1454 21.1968 14.5871 21.7535 11.999 21.75C9.323 21.75 6.783 21.166 4.5 20.118Z"
              stroke="#2C2E33"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <CgMenu
          className="size-6 text-(--custom-color) cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />

        {/* SIDEBAR */}
        <div
          className={`bg-white z-10 absolute left-0 top-0 h-screen w-[80%] flex flex-col justify-between p-4 transition-all ease-in-out duration-500 transform border-r-[0.8px] border-(--custom-border) ${
            isOpen ? "left-0" : "left-[-100%]"
          }`}
        >
          {/* TOP SIDEBAR */}
          <div>
            <div className="flex items-center justify-between">
              <div className="w-[40%]">
                <img src="src/assets/img/logo.png" alt="Site logo" />
              </div>

              <IoMdClose
                className="text-3xl cursor-pointer text-(--custom-black)"
                onClick={() => setIsOpen(false)}
              />
            </div>

            <hr className="text-(--custom-border) my-3" />

            <nav>
              <ul>
                <li className="border-b border-(--custom-border) py-2 ">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `flex items-center justify-between ${
                        isActive
                          ? "text-(--custom-color)"
                          : "text-(--custom-black)"
                      }`
                    }
                  >
                    Home
                    <FaAngleDown />
                  </NavLink>
                </li>

                <li className="border-b border-(--custom-border) py-2 ">
                  <NavLink
                    to="/listing"
                    className={({ isActive }) =>
                      `flex items-center justify-between ${
                        isActive
                          ? "text-(--custom-color)"
                          : "text-(--custom-black) hover:text-(--custom-color) transition-all duration-300"
                      }`
                    }
                  >
                    Listing
                    <FaAngleDown />
                  </NavLink>
                </li>

                <li className="border-b border-(--custom-border) py-2 ">
                  <NavLink
                    to="/pages"
                    className={({ isActive }) =>
                      `flex items-center justify-between ${
                        isActive
                          ? "text-(--custom-color)"
                          : "text-(--custom-black) hover:text-(--custom-color) transition-all duration-300"
                      }`
                    }
                  >
                    Pages
                    <FaAngleDown />
                  </NavLink>
                </li>

                <li className="border-b border-(--custom-border) py-2 ">
                  <NavLink
                    to="/blogs"
                    className={({ isActive }) =>
                      `flex items-center justify-between ${
                        isActive
                          ? "text-(--custom-color)"
                          : "text-(--custom-black) hover:text-(--custom-color) transition-all duration-300"
                      }`
                    }
                  >
                    Blogs
                    <FaAngleDown />
                  </NavLink>
                </li>

                <li className="border-b border-(--custom-border) py-2 ">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `flex items-center justify-between ${
                        isActive
                          ? "text-(--custom-color)"
                          : "text-(--custom-black) hover:text-(--custom-color) transition-all duration-300"
                      }`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          {/* BOTTOM SIDEBAR */}
          <div className="flex flex-col space-y-4">
            <Link
              to={"/contact"}
              className="text-sm font-medium underline hover:text-(--custom-color) transition-all duration-300"
            >
              Need help?
            </Link>

            <div className="flex flex-col space-y-2">
              <p className="text-(--custom-gray) text-md font-semibold">
                Call Us Now:{" "}
                <span className="text-(--custom-black)">1-555-678-8888</span>
              </p>
              <p className="text-(--custom-gray) text-md font-semibold">
                Support 24/7:{" "}
                <a
                  href="mailto:themesflat@gmail.com"
                  className="text-(--custom-black)"
                >
                  themesflat@gmail.com
                </a>
              </p>
              <p className="text-(--custom-gray) text-md font-semibold flex items-center space-x-2">
                <span>Follow us:</span>{" "}
                <div className="flex items-center space-x-2 text-(--custom-black)">
                  <a href="#">
                    <FaFacebookF />
                  </a>
                  <a href="#">
                    <FaXTwitter />
                  </a>
                  <a href="#">
                    <BiLogoLinkedin />
                  </a>
                  <a href="#">
                    <FiInstagram />
                  </a>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
