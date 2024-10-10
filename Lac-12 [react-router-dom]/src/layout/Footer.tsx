import { Link, NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { PiBeachBallLight } from "react-icons/pi";

const Footer = () => {
  return (
    <div>
      <hr />
      <div className="p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between">
        <Link to="/">
          <img
            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
            alt="Logo Image"
            className="h-16"
          />
        </Link>
        <div className="flex gap-2">
          <div className="flex flex-col">
            <h2>RESOURCES</h2>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-orange-700" : "text-gray-700"
              }
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
          </div>
          <div className="flex flex-col">
            <h2>FOLLOW US</h2>
            <Link to="/">Github</Link>
            <Link to="/">Discord</Link>
          </div>
          <div className="flex flex-col">
            <h2>LEGAL</h2>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <p>
          &copy; 2023{" "}
          <a href="https://rahulbhutaiya.vercel.app/">rahulbhutaiya</a>. All
          Rights Reserved.
        </p>
        <div>
          <FaFacebookF />
          <FaDiscord />
          <BsTwitterX />
          <FaGithub />
          <PiBeachBallLight />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Footer;
