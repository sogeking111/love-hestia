import FooterComponent from "../components/footer";
import HeaderComponent from "../components/header";

function FaqPage() {
  return (
    <div>
      <HeaderComponent />
      <section className="bg-[#faf9f7] text-neutral-700">
        <div className="max-w-3xl mx-auto px-6 py-24">
          {/* Title */}
          <h2 className="mb-14 text-center text-3xl font-medium text-neutral-800">
            Frequently asked questions
          </h2>

          <div className="space-y-6 text-sm leading-relaxed">
            <div>
              <h3 className="font-semibold mb-2">Do you ship nationwide?</h3>
              <p className="mb-2">
                Yes, we ship nationwide through J&T. Shipping rates vary by
                location. To view the cost, simply select the product you want
                and enter your delivery address, the <b>shipping fee</b> will
                appear automatically.
              </p>
              <p className="underline">Enjoy FREE DELIVERY on orders ₱3,500+</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                How long does shipping take?
              </h3>
              <p className="mb-2">
                For orders Cebu orders eligible for Lalamove and Maxim delivery
                you will receive it same day.
              </p>
              <p className="mb-2">
                For orders outside Cebu City that aren’t eligible for Maxim or
                Lalamove, delivery typically takes 4–7 days. Orders to Mindanao
                or Luzon may take 5–10 days via J&T delivery.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Is it possible to book our own delivery rider?
              </h3>
              <p className="mb-2">
                Yes, it’s possible! After checking out your order, you can
                select this option, and the pinned location via Maxim will be
                provided. This is only applicable for Cebu orders eligible for
                Lalamove and Maxim delivery. If you choose this option, please
                let us know via Instagram or Facebook so we can provide you with
                instructions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Where is your store located?
              </h3>
              <p className="mb-2">
                We don’t have a physical shop yet, so all transactions are
                online.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Can we pick up the order?</h3>
              <p className="mb-2">
                Pick-up is available along Osmeña Blvd., Cebu City. We’ll
                provide the exact pinned location on the day of pickup.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                What are the delivery and pick-up hours?
              </h3>
              <p className="mb-2">
                For same-day deliveries or pick-ups, we can accommodate you
                between 8:00 AM and 5:00 PM
              </p>
              <p className="mb-2">
                For orders outside Cebu, we ship through J&T on the same day or
                the following day. We’ll notify you as soon as the waybill is
                available
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Are they real flowers?</h3>
              <p className="mb-2">
                Yes, we sell preserved and naturally dried flowers, and they can
                last 1–2 years when cared for properly
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Can we customize arrangements?
              </h3>
              <p className="mb-2">
                Yes, you can view the process for ordering custom arrangements
                <span className="underline">here</span>.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Do you conduct private workshops?
              </h3>
              <p className="mb-2">
                Yes, we do! You can view the pricelist{" "}
                <span className="underline">here</span>. The dried flower
                workshop may be slightly more expensive than fresh flowers, as
                dried flowers last much longer.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Do you offer fresh flower arrangements?
              </h3>
              <p className="mb-2">
                For now we only offer dried flower arrangements
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">What’s you order process?</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Browse our available products and select the item you’d like
                  to order.
                </li>
                <li>
                  Proceed to checkout and fill in the necessary delivery
                  details.
                </li>
                <li>Payment is required to confirm your order.</li>
                <li>
                  After completing the payment, send us a message with your
                  proof of payment. (no proof of payment, no reservation)
                </li>
                <li>We will then send you a photo of your order.</li>
                <li>
                  Once your order is out for delivery, we will provide the
                  delivery link or waybill.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Can we change the order?</h3>
              <p className="mb-2">
                You can change the order as long as it’s before the delivery
                date
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Can we cancel the order?</h3>
              <p className="mb-2">
                Once payment is completed, orders can no longer be canceled. You
                may change your order at the same product price, or if there’s a
                price difference, you’ll need to pay the additional amount.
              </p>
            </div>
          </div>
        </div>
      </section>
      <FooterComponent />
    </div>
  );
}

export default FaqPage;
