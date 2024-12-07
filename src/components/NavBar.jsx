import React from "react";
import { Link, NavLink } from "react-router";

const NavBar = () => {
  const List = [
    {
      page: "Home",
      url: "/",
    },
    {
      page: "About",
      url: "/About",
    },
    {
      page: "Products",
      url: "/Products",
    },
    {
      page: "Contact",
      url: "/Contact",
    },
  ];
  return (
    //we use NavLink when we  need to style Active link
    //Link when we dont need to

    <nav className="flex gap-4 p-2 items-center justify-center">
      <ul
        className="mx-auto flex gap-4 rounded-full bg-blue-900 w-fit py-2 px-3  
                    items-center justify-center
                   text-white font-semibold"
      >
        {List.map((item, index) => {
          return (
            <NavLink
              key={index}
              to={item.url}
              className={({ isActive }) =>
                `hover:text-yellow-300 transition ${
                  isActive ? "text-yellow-500 " : ""
                }`
              }
            >
              {item.page}
            </NavLink>
          );
        })}
      </ul>
      <Link
        to={"/Login"}
        className="bg-yellow-700 hover:bg-yellow-600 
        transition duration-300 ease-in-out
        rounded-full text-white px-8 py-2"
      >
        Login
      </Link>
    </nav>
  );
};

export default NavBar;
