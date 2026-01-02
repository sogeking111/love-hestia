import CollectionsSectionComponent from "../components/collections-section";
import CustomArrangementSectionComponent from "../components/custom-arrangements-section";
import FooterComponent from "../components/footer";
import HeroSectionComponent from "../components/hero-section";
import OurStorySectionComponent from "../components/our-story-section";

function HomePage() {
  return (
    <div className="text-neutral-700 bg-neutral-50">
      {/* HERO SECTION */}
      <HeroSectionComponent />

      {/* COLLECTIONS */}
      <CollectionsSectionComponent />

      {/* CUSTOM ARRANGEMENTS */}
      <CustomArrangementSectionComponent />

      {/* OUR STORY */}
      <OurStorySectionComponent />

      {/* WORKSHOP */}
      <section className="relative py-24 bg-neutral-400 text-white text-center">
        <div className="absolute inset-0 flex items-center justify-center">
          Workshop Image Placeholder
        </div>
        <div className="relative z-10">
          <h3 className="text-3xl mb-2">Private Dried Flower Workshop</h3>
          <p className="mb-4 text-sm">Birthdays · Bridal Shower · Events</p>
          <button className="border px-6 py-2 rounded-full text-sm hover:bg-white hover:text-neutral-700 transition">
            Learn more
          </button>
        </div>
      </section>

      {/* FLORIST FOR A DAY */}
      <section className="py-20 bg-neutral-50 text-center">
        <h3 className="text-2xl mb-4">Florist for a Day</h3>

        <p className="italic text-sm mb-10 max-w-2xl mx-auto">
          "There's no wrong way to make a bouquet. If it makes you smile, that's
          all the magic you need."
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto px-6">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="h-64 bg-neutral-300 flex items-center justify-center"
            >
              Image Placeholder
            </div>
          ))}
        </div>
      </section>

      <FooterComponent />
    </div>
  );
}

export default HomePage;
