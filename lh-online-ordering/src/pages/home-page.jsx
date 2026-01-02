import CollectionsSectionComponent from "../components/collections-section";
import FooterComponent from "../components/footer";
import HeroSectionComponent from "../components/hero-section";

function HomePage() {
  return (
    <div className="text-neutral-700 bg-neutral-50">
      {/* HERO SECTION */}
      <HeroSectionComponent />
      {/* COLLECTIONS */}
      <CollectionsSectionComponent />

      {/* CUSTOM ARRANGEMENTS */}
      <section className="py-16 bg-emerald-800 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
          <div className="h-96 bg-neutral-300 flex items-center justify-center">
            Image Placeholder
          </div>
          <div>
            <h3 className="text-2xl mb-4">Custom Arrangements</h3>
            <p className="text-sm leading-relaxed mb-6">
              We'd love to create a personalized dried-flower arrangement just
              for you. Each design is unique and crafted based on your chosen
              color palette or inspiration photos. Final pricing will depend on
              the flower varieties and arrangement size, depending on stock
              availability.
            </p>
            <button className="border border-white px-6 py-2 rounded-full text-sm hover:bg-white hover:text-emerald-800 transition">
              Custom order process
            </button>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
          <div>
            <h3 className="text-xl mb-4">Our Story</h3>
            <p className="text-sm leading-relaxed">
              Love Hestia began in 2022, born from healing, hope, and a renewed
              sense of purpose. Like many, the journey was shaped by the
              uncertainty of the pandemic.
              <br />
              <br />
              What started as a small, comforting hobby slowly grew into a
              passion and eventually a business. Today, Love Hestia creates
              premium preserved blooms that can last 1–2 years with proper care.
            </p>
          </div>
          <div className="h-96 bg-neutral-300 flex items-center justify-center">
            Image Placeholder
          </div>
        </div>
      </section>

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
