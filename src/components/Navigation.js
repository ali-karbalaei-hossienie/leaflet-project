import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import Toggle from "./Toggle";

const Navigation = () => {
  const data = useAuth();
  return (
    <header>
      <nav className="w-full h-14 dark:bg-slate-700 dark:text-white bg-white flex items-center justify-center">
        <ul className="flex w-full max-w-screen-lg  items-center justify-between   ">
          <div className="flex items-center cursor-pointer">
            <li className="mr-4  rounded hover:text-purple-700">
              <NavLink to="/">خانه</NavLink>
            </li>
            <li className="mr-4  rounded hover:text-purple-700">
              <NavLink to="/RegisterUserLeaflet">ثبت آگهی</NavLink>
            </li>
            <li>
              <Toggle />
            </li>
          </div>
          <div className="flex items-center cursor-pointer">
            <li className="mr-4 block rounded hover:text-purple-700 ">
              <NavLink to={`${data ? "/" : "/login"}`}>
                {data ? "پروفایل کاربر" : "ورود"}
              </NavLink>
            </li>
            {!data && (
              <li className={`mr-4 rounded hover:text-purple-700`}>
                <NavLink to="/signup">ثبت نام</NavLink>
              </li>
            )}
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
