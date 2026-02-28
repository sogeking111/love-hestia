import flowerBouquetImage from "../assets/flower-bouquets.JPG";
import vaseAndBasketImage from "../assets/vase-and-basket.JPG";
import flowerDomeImage from "../assets/flower-dome.JPG";
import { Link } from "react-router-dom";

function CollectionsSectionComponent() {
  // Array of objects with name and image URL
  const collections = [
    {
      title: "Flower Bouquets",
      image: flowerBouquetImage,
      productKey: 5,
    },
    {
      title: "Vases & Baskets",
      image: vaseAndBasketImage,
      productKey: 6,
    },
    {
      title: "Flower Domes",
      image: flowerDomeImage,
      productKey: 7,
    },
  ];

  return (
    <section className="bg-neutral-50 py-24 text-center">
      <h2 className="mb-14 text-3xl font-medium text-neutral-800">
        Our Collections
      </h2>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-24 px-6 md:grid-cols-3">
        {collections.map((item) => (
          <Link to={`/shop/${item.productKey}`}>
            <div
              key={item.title}
              className="group flex cursor-pointer flex-col items-center"
            >
              {/* Image wrapper */}
              <div className="relative mb-6 h-86 w-70 overflow-hidden">
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/25 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* Text */}
              <p className="text-[13px] font-medium tracking-widest uppercase text-neutral-800">
                {item.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CollectionsSectionComponent;
