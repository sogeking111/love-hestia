import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function FooterComponent() {
  return (
    <footer className="bg-[#f6f6f6] text-neutral-700">
      {/* TOP SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* QUICK LINKS */}
        <div>
          <h3 className="font-medium mb-10">Quick links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:underline">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:underline">
                FAQ's
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-medium mb-10">Contact Us</h3>
          <p className="text-sm mb-4">
            Need something else? We're here for you!
          </p>
          <p className="text-sm">
            Please don't hesitate to reach us at Instagram{" "}
            <span className="font-medium">@_lovehestia</span>.
          </p>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-[#dbdbdb]" />

      {/* BOTTOM SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col items-center gap-4">
        {/* SOCIAL ICONS */}
        <div className="flex gap-6 text-neutral-600">
          <a
            href="https://www.facebook.com/giftshophestia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hestia Facebook"
            className="hover:text-black transition-colors"
          >
            <FaFacebookF className="cursor-pointer text-lg" />
          </a>

          <a
            href="https://www.instagram.com/lovehestiaflowers"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hestia Instagram"
            className="hover:text-black transition-colors"
          >
            <FaInstagram className="cursor-pointer text-lg" />
          </a>
        </div>

        {/* COPYRIGHT */}
        <p className="text-xs text-neutral-500">© 2026, Love Hestia</p>
      </div>
    </footer>
  );
}

export default FooterComponent;
