import { Link } from "react-router-dom";

const navItemClass =
  "relative transition-colors duration-300 hover:text-gray-300";

function NavItemsComponent() {
  return (
    <nav className="flex justify-center">
      <ul className="flex gap-20 text-lg font-normal tracking-wide">
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
    </nav>
  );
}

export default NavItemsComponent;
