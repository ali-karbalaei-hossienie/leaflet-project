import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const Navigation = () => {
  const data = useAuth();
  return (
    <header>
      <nav className="w-full h-14 bg-violet-100 flex items-center justify-center">
        <ul className="flex  w-full max-w-screen-md  items-center justify-between   ">
          <div className="flex items-center cursor-pointer">
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
            <li className="mr-2  rounded hover:text-purple-700">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "p-2  bg-white  hover:bg-white"
                    : "hover:bg-white p-2  "
                }
                to="/userLeafLetMap"
              >
                ثبت آگهی
              </NavLink>
            </li>
          </div>
          <div className="flex items-center cursor-pointer">
            <li className="mr-2 block rounded hover:text-purple-700 hover:bg-white ">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "h-full p-2 w-full block bg-white  hover:bg-white"
                    : "hover:bg-white p-2  "
                }
                // className="h-full p-2 w-full block  hover:bg-white"
                to={`${data ? "/" : "/login"}`}
              >
                {data ? "پروفایل کاربر" : "ورود"}
              </NavLink>
            </li>
            <li
              className={`mr-2 rounded hover:text-purple-700 hover:bg-white ${
                data && "hidden"
              }`}
            >
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? " p-2 w-full block bg-white  hover:bg-white"
                    : "hover:bg-white p-2"
                }
                // className="h-full p-2 w-full block  hover:bg-white"
                to="/signup"
              >
                ثبت نام
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
