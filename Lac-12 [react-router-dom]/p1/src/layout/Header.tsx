import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between  sticky top-0 z-10 rounded-sm border-gray-200 bg-white shadow px-4 lg:px-6 py-2.5">
      <Link to="/">
        <img
          src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
          alt="Logo Image"
          className="h-12"
        />
      </Link>
      <nav className="hidden lg:flex lg:relative gap-4 font-semibold">
        <NavLink
          to="/"
          className={(props) => {
            console.log("props:::", props);
            return props.isActive ? "text-orange-700" : "text-gray-700";
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-orange-700" : "text-gray-700"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-orange-700" : "text-gray-700"
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/github"
          className={({ isActive }) =>
            isActive ? "text-orange-700" : "text-gray-700"
          }
        >
          Github
        </NavLink>
      </nav>
      <div className="flex gap-4 items-center text-sm font-semibold">
        <Link to="#" className="text-sm ">
          Log in
        </Link>
        <Link to="#" className="text-white bg-[#c2410c] px-5 py-2.5 rounded-md">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Header;
