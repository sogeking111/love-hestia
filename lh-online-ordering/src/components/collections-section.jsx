import heroImage from "../assets/hero-image.jpg";
import NavItemsComponent from "./nav-items";

function CollectionsSectionComponent() {
  return (
    <section className="py-16 bg-neutral-50 text-center">
      <h2 className="text-2xl mb-10">Our Collections</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
        {["Flower Bouquets", "Vases & Baskets", "Flower Dome"].map((item) => (
          <div key={item} className="flex flex-col items-center">
            <div className="w-64 h-80 bg-neutral-300 flex items-center justify-center mb-4">
              Image Placeholder
            </div>
            <p className="uppercase tracking-wide text-sm">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CollectionsSectionComponent;
