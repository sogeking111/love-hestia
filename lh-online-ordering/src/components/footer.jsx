import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";

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
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Refund policy
              </a>
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
          <FaFacebookF className="cursor-pointer hover:text-black" />
          <FaTwitter className="cursor-pointer hover:text-black" />
          <FaInstagram className="cursor-pointer hover:text-black" />
        </div>

        {/* COPYRIGHT */}
        <p className="text-xs text-neutral-500">© 2026, Love Hestia</p>
      </div>
    </footer>
  );
}

export default FooterComponent;
