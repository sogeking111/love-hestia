import flowerBouquetImage from "../assets/flower-bouquets.JPG";
import vaseAndBasketImage from "../assets/vase-and-basket.JPG";
import flowerDomeImage from "../assets/flower-dome.JPG";

function CollectionsSectionComponent() {
  // Array of objects with name and image URL
  const collections = [
    { name: "Flower Bouquets", imageUrl: flowerBouquetImage },
    { name: "Vases & Baskets", imageUrl: vaseAndBasketImage },
    { name: "Flower Dome", imageUrl: flowerDomeImage },
  ];

  return (
    <section className="bg-neutral-50 py-24 text-center">
      <h2 className="mb-14 text-3xl font-medium text-neutral-800">
        Our Collections
      </h2>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-24 px-6 md:grid-cols-3">
        {collections.map((item) => (
          <div
            key={item.name}
            className="group flex cursor-pointer flex-col items-center"
          >
            {/* Image wrapper */}
            <div className="relative mb-6 h-86 w-70 overflow-hidden">
              {/* Image */}
              <img
                src={item.imageUrl}
                alt={item.name}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/25 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>

            {/* Text */}
            <p className="text-[13px] font-medium tracking-widest uppercase text-neutral-800">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CollectionsSectionComponent;
