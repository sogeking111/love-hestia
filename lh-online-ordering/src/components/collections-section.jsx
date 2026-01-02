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
    <section className="py-20 bg-neutral-50 text-center">
      <h2 className="mb-10">Our Collections</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-40 max-w-5xl mx-auto px-6">
        {collections.map((item) => (
          <div key={item.name} className="flex flex-col items-center">
            <div className="w-70 h-86 mb-4">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-full object-cover rounded"
              />
            </div>
            <p className="uppercase tracking-wide text-sm">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CollectionsSectionComponent;
