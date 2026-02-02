import NavItemsComponent from "./nav-items";
import { Search, User, ShoppingBag } from "lucide-react";

function HeaderComponent() {
  return (
    <div>
      <header className="w-full border-b border-neutral-200 py-15">
        {/* Navigation */}
        <NavItemsComponent />
      </header>
    </div>
  );
}

export default HeaderComponent;
