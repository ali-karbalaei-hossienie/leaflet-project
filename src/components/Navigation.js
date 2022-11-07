import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <nav className="w-full h-14 bg-violet-100 flex items-center justify-center">
        <ul className="flex  items-center justify-center cursor-pointer  ">
          <li className="mr-2  rounded hover:text-purple-700">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "p-2  bg-white  hover:bg-white"
                  : "hover:bg-white p-2  "
              }
              to="/"
            >
              خانه
            </NavLink>
          </li>
          <li className="mr-2 block rounded hover:text-purple-700 hover:bg-white ">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "h-full p-2 w-full block bg-white  hover:bg-white"
                  : "hover:bg-white p-2  "
              }
              // className="h-full p-2 w-full block  hover:bg-white"
              to="/signin"
            >
              ورود
            </NavLink>
          </li>
          <li className="mr-2 rounded hover:text-purple-700 hover:bg-white ">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " p-2 w-full block bg-white  hover:bg-white"
                  : "hover:bg-white p-2"
              }
              // className="h-full p-2 w-full block  hover:bg-white"
              to="/signout"
            >
              ثبت نام
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
