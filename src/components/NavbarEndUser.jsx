//redux
import { useDispatch, useSelector } from "react-redux";
//rrd
import { useState, useEffect } from "react";
//slice
import { logout } from "../app/userSlice";
import WeatherLoaction from "./WeatherLoaction";
import toast, { Toaster } from "react-hot-toast";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

let localStrog = () => {
  return localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : "light";
};

function NavbarEndUser() {
  let { user } = useSelector((state) => state.user);
  let dispetch = useDispatch();
  let [theme, setTheme] = useState(localStrog());
  const handleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  return (
    <div className="navbar-end gap-10 aligen-content">
      <WeatherLoaction />
      <div className="dropdown dropdown-bottom dropdown-end ">
        <div className="avatar" role="button" tabIndex={0}>
          <div className=" w-12 rounded-full ring ring-offset-2">
            <img src={user.photoURL} />
          </div>
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[2] w-[350px] p-2 shadow mt-1 gap-1"
        >
          <li>
            <p className=" ">Name: {user.displayName}</p>
          </li>{" "}
          <li>
            <p className="">Email: {user.email}</p>
          </li>
          <li className=" w-full text-left ">
          <label className="flex cursor-pointer gap-2 swap swap-rotate">
            {/* This hidden checkbox controls the state */}
            <input
              onClick={handleTheme}
              type="checkbox"
              checked={theme === "dark"}
              readOnly
            />

            {/* Sun icon */}
           
            <IoMdSunny className="swap-on fill-current w-10 h-10" />

            {/* Moon icon */}
            <IoMdMoon className="swap-off fill-current w-10 h-10" />
          </label>
          </li>
          <li>
            <button
              className="btn btn-primary btn-sm  ml-[75px] w-[150px]"
              onClick={() => {
                toast(`Bye Bye ${user.displayName} `, {
                 
                });
                dispetch(logout(user));
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavbarEndUser;