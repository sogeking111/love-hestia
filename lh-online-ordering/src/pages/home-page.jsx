import CollectionsSectionComponent from "../components/collections-section";
import CustomArrangementSectionComponent from "../components/custom-arrangements-section";
import FooterComponent from "../components/footer";
import HeroSectionComponent from "../components/hero-section";
import OurStorySectionComponent from "../components/our-story-section";
import workshopImage from "../assets/workshop-image.jpg";
import floristForADay1 from "../assets/florist-for-a-day1.jpg";
import floristForADay2 from "../assets/florist-for-a-day2.JPG";

function HomePage() {
  const floristForADayImages = [
    { imgUrl: floristForADay1 },
    { imgUrl: floristForADay2 },
  ];

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
      <section className="relative py-60 bg-[#d8cbb5] text-white text-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={workshopImage}
            alt="Workshop Image"
            className="w-full h-full object-cover rounded"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10">
          <p className="text-5xl mb-3">Private Dried Flower Workshop</p>
          <p className="mb-4 text-sm">Birthdays · Bridal Shower · Events</p>
          <button className="border px-6 py-2 rounded-full text-sm hover:bg-white hover:text-neutral-700 transition hover:cursor-pointer">
            Learn more
          </button>
        </div>
      </section>

      {/* FLORIST FOR A DAY */}
      <section className="py-20 bg-neutral-50 text-center">
        <h1 className="mb-4">Florist for a Day</h1>

        <p className="italic text-lg mb-10 max-w-2xl mx-auto">
          "There's no wrong way to make a bouquet. If it makes you smile, that's
          all the magic you need."
        </p>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
          {floristForADayImages.map((i) => (
            <div
              key={i}
              className="h-80 bg-neutral-300 flex items-center justify-center"
            >
              <img
                src={i.imgUrl}
                alt="Workshop Image"
                className="w-full h-full object-cover rounded"
              />
            </div>
          ))}
        </div>
      </section>

      <FooterComponent />
    </div>
  );
}

export default HomePage;
