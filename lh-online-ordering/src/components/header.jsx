import NavItemsComponent from "./nav-items";

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
