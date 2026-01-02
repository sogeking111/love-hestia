import { Link } from "react-router-dom";

function NavItemsComponent() {
  return (
    <ul className="flex gap-20 text-white text-lg font-normal tracking-wide">
      <li>
        <Link
          to="/"
          className="relative text-white transition-colors duration-300 hover:text-gray-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-full"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/shop"
          className="relative text-white transition-colors duration-300 hover:text-gray-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-full"
        >
          Shop
        </Link>
      </li>
      <li>
        <Link
          to="/customize"
          className="relative text-white transition-colors duration-300 hover:text-gray-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-full"
        >
          Customize
        </Link>
      </li>
      <li>
        <Link
          to="/faq"
          className="relative text-white transition-colors duration-300 hover:text-gray-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-full"
        >
          FAQ's
        </Link>
      </li>
    </ul>
  );
}

export default NavItemsComponent;
