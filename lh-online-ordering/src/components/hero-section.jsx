import heroImage from "../assets/hero-image.jpg";
import NavItemsComponent from "./nav-items";

function HeroSectionComponent() {
  return (
    <section className="relative w-screen min-h-screen">
      {/* HERO IMAGE AS BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Optional overlay to darken image */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Navigation links */}
      <nav className="absolute text-white top-5 left-1/2 transform -translate-x-1/2 w-full flex justify-center py-6 z-20">
        <NavItemsComponent />
      </nav>

      {/* Overlay content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-4xl md:text-5xl italic mb-2">
          Love written in flowers
        </h1>
        <p className="tracking-wide text-2xl">Flower Studio</p>
      </div>
    </section>
  );
}

export default HeroSectionComponent;
