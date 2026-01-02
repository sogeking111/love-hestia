import { Link } from "react-router-dom";

const navItemClass =
  "relative text-white transition-colors duration-300 hover:text-gray-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-full";

function NavItemsComponent() {
  return (
    <ul className="flex gap-20 text-white text-lg font-normal tracking-wide">
      <li>
        <Link to="/" className={navItemClass}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/shop" className={navItemClass}>
          Shop
        </Link>
      </li>
      <li>
        <Link to="/customize" className={navItemClass}>
          Customize
        </Link>
      </li>
      <li>
        <Link to="/faq" className={navItemClass}>
          FAQ's
        </Link>
      </li>
    </ul>
  );
}

export default NavItemsComponent;
