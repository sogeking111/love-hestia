import { useEffect, useMemo, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import { productService } from "../services/product-service";
import { useNavigate } from "react-router-dom";

const PRODUCT_TYPE_MAP = {
  7: "Flower Dome",
  6: "Vases & Baskets",
  5: "Flower Bouquets",
};

const STORAGE_KEY = "all_products";

function ProductsPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const productTypeId = Number(id);

  const title = PRODUCT_TYPE_MAP[productTypeId] || "Products";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current) return;

    productService
      .getAll()
      .then((data) => {
        setProducts(data);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      })
      .catch((err) => {
        console.error("Failed to load products", err);
      })
      .finally(() => setLoading(false));

    effectRan.current = true;
  }, []);

  /** ✅ Filter by product-type (taxonomy) */
  const filteredProducts = useMemo(() => {
    return products.filter((item) =>
      item["product-type"]?.includes(productTypeId),
    );
  }, [products, productTypeId]);

  if (loading) {
    return <p className="py-24 text-center">Loading...</p>;
  }

  return (
    <div>
      <HeaderComponent />

      <section className="bg-neutral-50 py-24">
        <h2 className="mb-14 text-center text-3xl font-medium text-neutral-800">
          {title}
        </h2>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 sm:grid-cols-2 md:grid-cols-3">
          {filteredProducts.map((item) => {
            const imageUrl =
              item._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
              "/placeholder.jpg";

            return (
              <div key={item.id} className="flex flex-col">
                {/* Image Tile */}
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-200">
                  <img
                    src={imageUrl}
                    alt={item.title.rendered}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="mt-4 flex flex-col items-center text-center">
                  <h3 className="mb-3 text-sm font-medium tracking-wide text-neutral-800 uppercase">
                    {item.title.rendered}
                  </h3>

                  <button
                    type="button"
                    onClick={() =>
                      navigate("/order", { state: { product: item } })
                    }
                    className="rounded border border-neutral-800 px-6 py-2 text-sm tracking-widest uppercase text-neutral-800 transition hover:bg-neutral-800 hover:text-white hover:cursor-pointer"
                  >
                    Order
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <FooterComponent />
    </div>
  );
}

export default ProductsPage;
