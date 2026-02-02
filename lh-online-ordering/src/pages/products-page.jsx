import FooterComponent from "../components/footer";
import HeaderComponent from "../components/header";

const productCollection = [
  {
    title: "Flower Bouquets",
    products: [
      {
        title: "LYRA",
        price: 800,
      },
      {
        title: "JANE",
        price: 800,
      },
      {
        title: "THEA",
        price: 800,
      },
      {
        title: "OLIVETTE",
        price: 800,
      },
      {
        title: "INES",
        price: 800,
      },
      {
        title: "NOEMI",
        price: 800,
      },
      {
        title: "NYRA",
        price: 800,
      },
    ],
  },
];

function ProductsPage() {
  return (
    <div>
      <HeaderComponent />

      <section className="bg-neutral-50 py-24">
        {/* Title */}
        <h2 className="mb-14 text-center text-3xl font-medium text-neutral-800">
          {products.title}
        </h2>

        {/* Grid */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 sm:grid-cols-2 md:grid-cols-3">
          {collections.map((item) => (
            <div
              key={item.title}
              className="group relative aspect-square cursor-pointer overflow-hidden"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/25 opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-[15px] font-medium tracking-widest uppercase text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FooterComponent />
    </div>
  );
}

export default ProductsPage;
