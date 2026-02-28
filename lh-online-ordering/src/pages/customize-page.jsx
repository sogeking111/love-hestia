import FooterComponent from "../components/footer";
import HeaderComponent from "../components/header";
import { useLocation, useNavigate } from "react-router-dom";

function CustomizePage() {
  const navigate = useNavigate();

  return (
    <div>
      <HeaderComponent />
      <section className="bg-[#faf9f7] text-neutral-700">
        <div className="max-w-3xl mx-auto px-6 py-24">
          {/* Title */}
          <h2 className="mb-14 text-center text-3xl font-medium text-neutral-800">
            Your custom journey
          </h2>

          {/* Content */}
          <div className="space-y-6 text-sm leading-relaxed">
            {/* Send Request */}
            <div>
              <h3 className="font-semibold mb-2">Send Us Your Request</h3>
              <p className="mb-2">Message us on Facebook or Instagram with:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>The type of arrangement you’d like</li>
                <li>Any inspiration or reference images (if you have any)</li>
                <li>Your budget (Custom arrangements start at ₱1,500)</li>
              </ul>
            </div>

            {/* Stock Check */}
            <div>
              <h3 className="font-semibold mb-2">Stock Check & Quote</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  We will confirm the availability of the dried flowers you
                  requested.
                </li>
                <li>
                  Once we finalize the flowers to be used, we will provide a
                  quote for your arrangement.
                </li>
              </ul>
            </div>

            {/* Order Form */}
            <div>
              <h3 className="font-semibold mb-2">Order Form</h3>
              <ul className="list-disc list-inside">
                <li>
                  Fill out the order form with your details and delivery
                  preferences.
                </li>
              </ul>
            </div>

            {/* Payment */}
            <div>
              <h3 className="font-semibold mb-2">Payment & Confirmation</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  A 50% down payment is required to start creating your order.
                </li>
                <li>
                  Creation of custom arrangements takes 4–5 days before the
                  delivery date.
                </li>
                <li>
                  The remaining 50%, including the delivery fee (visible in the
                  order form), is due on the day of delivery.
                </li>
                <li>
                  If you prefer, you may also pick up your order instead of
                  opting for delivery.
                </li>
                <li>
                  Full payment is required to officially book and deliver your
                  order.
                </li>
              </ul>
            </div>

            {/* Revisions */}
            <div>
              <h3 className="font-semibold mb-2">Revisions</h3>
              <ul className="list-disc list-inside">
                <li>
                  You are entitled to one free revision once the arrangement is
                  completed.
                </li>
              </ul>
            </div>

            {/* Cancellations */}
            <div>
              <h3 className="font-semibold mb-2">Cancellations</h3>
              <ul className="list-disc list-inside">
                <li>
                  Orders can be cancelled, but cancellation fees may apply.
                </li>
              </ul>
            </div>

            {/* Terms */}
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-1">Terms & Conditions</h3>
                {/* Agreement */}
                <p className="text-sm text-neutral-500">
                  By placing a custom arrangement order with us, you acknowledge
                  and agree to the following terms and conditions.
                </p>

                <p className="text-sm text-neutral-500">
                  We may update these terms at any time, and any changes will
                  apply to future orders.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-1">
                  Based on Your Inspiration
                </h3>
                <p className="text-sm">
                  While we create your arrangement based on the inspiration you
                  provide, please note that it may not be an exact replica. Our
                  own style and the availability of dried flowers will influence
                  the final design.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-1">
                  No Exchanges for Small Differences
                </h3>
                <p className="text-sm">
                  Because each arrangement is handmade and unique, we do not
                  accept returns or exchanges due to slight differences in
                  color, size, or design.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-1">Handling & Care</h3>
                <p className="text-sm">
                  Dried and preserved flowers are delicate. Some petals or small
                  pieces may shift during delivery or pick-up.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-1">Authentic Materials</h3>
                <p className="text-sm">
                  Dried and preserved flowers naturally vary in color, size, and
                  shape. Minor shedding or movement of petals during delivery is
                  normal.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-1">Refunds & Returns</h3>
                <p className="text-sm">
                  Refunds are only given for items that arrive damaged. Natural
                  shedding or small imperfections are not considered damage.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-10 text-center">
              <button
                onClick={() => navigate("/order", { state: {} })}
                className="border border-[#7c8a6e] px-6 py-2 rounded-full text-sm hover:bg-[#7c8a6e] hover:text-white transition hover:cursor-pointer"
              >
                Request custom arrangement
              </button>
            </div>
          </div>
        </div>
      </section>
      <FooterComponent />
    </div>
  );
}

export default CustomizePage;
