import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const side = useRef(null);
  const main = useRef(null);
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const clearSess = async () => {
    localStorage.clear();
  };

  const handleSidebarView = ({ isSidebarOpen, isMobile, refs }) => {
    if (!isSidebarOpen) {
      if (isMobile) {
        refs.current?.classList.remove("-ml-64");
        refs.current?.classList.add("ml-0");
      } else {
        refs.current?.classList.add("md:-ml-64");
        refs.current?.classList.remove("md:ml-0");
      }
    } else {
      if (isMobile) {
        refs.current?.classList.add("-ml-64");
        refs.current?.classList.remove("ml-0");
      } else {
        refs.current?.classList.remove("md:-ml-64");
        refs.current?.classList.add("md:ml-0");
      }
    }
  };

  const handleMainView = ({ isSidebarOpen, isMobile, refs }) => {
    if (!isSidebarOpen) {
      if (isMobile) {
        refs.current?.classList.remove("ml-0");
        refs.current?.classList.add("ml-64");
      } else {
        refs.current?.classList.add("md:ml-0");
        refs.current?.classList.remove("md:ml-64");
      }
    } else {
      if (isMobile) {
        refs.current?.classList.add("ml-0");
        refs.current?.classList.remove("ml-64");
      } else {
        refs.current?.classList.remove("md:ml-0");
        refs.current?.classList.add("md:ml-64");
      }
    }
  };

  const handleMenu = () => {
    let menu;
    const user = JSON.parse(localStorage.getItem("user"));
    if (user.id !== 1) {
      menu = [
        { menu: "Home", to: "/dashboard" },
        { menu: "Object", to: "/objects" },
        { menu: "Laporan", to: "/report" },
        { menu: "Logout", to: "/" },
      ];
    } else {
      menu = [
        { menu: "Home", to: "/superadmin" },
        { menu: "List user", to: "/list-user" },
        { menu: "Logout", to: "/" },
      ];
    }
    return menu;
  };

  useEffect(() => {
    handleSidebarView({ isSidebarOpen, isMobile, refs: side });
    handleMainView({ isSidebarOpen, isMobile, refs: main });
  }, [isSidebarOpen]);

  return (
    <>
      <div className={`flex h-full`}>
        <div
          ref={side}
          className={`transition-all duration-500 ease-in-out w-64 fixed -ml-64 md:ml-0 h-full border-r z-20 md:z-10
              `}
        >
          <nav className="flex flex-col lg:w-64 sm:max-w-xs bg-white h-full relative border-r">
            <div className="flex w-full items-center px-6 py-6 ">
              <img
                className="w-full h-full object-cover"
                src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
                alt="logo"
              />
            </div>
            <div className="px-4 pb-6 overflow-y-auto">
              <ul className="mb-8 text-sm">
                <div role="navigation">
                  <h3
                    data-testid="title"
                    className="my-2 text-xs uppercase text-slate-900 font-semibold"
                  >
                    Menu
                  </h3>
                  <div className="border-l ">
                    {handleMenu().map((v, i) => (
                      <NavLink
                        onClick={() => v.menu === "Logout" && clearSess()}
                        key={i}
                        to={v.to}
                        role="menuitem"
                        className={({ isActive }) =>
                          `flex p-1 pl-3 border-l -ml-px  ${
                            isActive
                              ? "text-primary-600 font-medium  text-blue-700 border-blue-500"
                              : "hover:text-slate-700 hover:border-l-slate-700"
                          }`
                        }
                      >
                        <span>{v.menu}</span>
                      </NavLink>
                    ))}
                  </div>
                </div>
              </ul>
            </div>
          </nav>
        </div>
        <div
          ref={main}
          className={`transition-all duration-500 ease-in-out flex flex-1 flex-col ml-0 md:ml-64`}
        >
          <section className="z-10 fixed h-14 w-full bg-white border-b flex items-center px-4">
            <button
              className=" flex items-center rounded hover:ring-blue-200 hover:ring-2 focus:ring-blue-100"
              onClick={() => setSidebarOpen(!isSidebarOpen)}
            >
              <svg
                className="text-slate-500 bg-white hover:bg-primary-400  block h-8 w-8 p-2 rounded"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
            <div
              //   ref={profile}
              className={` transition-all duration-500 ease-in-out ml-auto mr-0 md:mr-64`}
            >
              {/* <ProfileDropDown /> */}
            </div>
          </section>
          <div className="pt-20 min-h-screen relative bg-slate-100">
            <div className={`container h-full mx-auto px-4 `}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      {isMobile && !isSidebarOpen && (
        <div
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="absolute inset-0 z-10 backdrop-blur-sm bg-white/30"
        />
      )}
    </>
  );
};

export default Layout;
