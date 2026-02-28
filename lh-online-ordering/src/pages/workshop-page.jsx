import FooterComponent from "../components/footer";
import HeaderComponent from "../components/header";
import workshop1 from "../assets/w1.jpg";
import workshop2 from "../assets/w2.jpg";
import workshop3 from "../assets/w3.jpg";
import workshop4 from "../assets/w4.jpg";

function WorkshopPage() {
  return (
    <div>
      <HeaderComponent />
      <section className="bg-[#faf9f7] text-neutral-700">
        {/* Workshop images */}
        <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto py-18">
          <div className="overflow-hidden">
            <img
              src={workshop1}
              alt="Dried flower workshop"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="overflow-hidden">
            <img
              src={workshop2}
              alt="Dried flower workshop"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="overflow-hidden">
            <img
              src={workshop3}
              alt="Dried flower workshop"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="overflow-hidden">
            <img
              src={workshop4}
              alt="Dried flower workshop"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 pb-24">
          {/* Title */}
          <h2 className="mb-14 text-center text-3xl font-medium text-neutral-800">
            Dried flower workshop
          </h2>

          <div className="space-y-6 text-sm leading-relaxed">
            <div>
              <h3 className="font-semibold mb-2">BOOKING PROCESS</h3>
              <h3 className="font-semibold mb-2">Pricing</h3>
              <p className="mb-2">
                The workshop rate depends on your chosen inspiration
                arrangement, the number of attendees, and the event location.
                (Send your inspo. and details{" "}
                <a
                  className="underline"
                  href="https://www.instagram.com/lovehestiaflowers?igsh=a2xyaDg1am8yNGt2&utm_source=qr"
                >
                  here
                </a>
                )
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Minimum Participants</h3>
              <p className="mb-2">
                A minimum of 6 participants is required to book a private
                workshop.
              </p>
              <p className="mb-2">
                (Duration :The workshop runs for approximately 2–3 hours.)
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Preparation</h3>
              <p className="mb-2">
                Once we finalize the pricing, we will begin ordering and
                preparing all materials based on your chosen theme.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Payment & Reservation</h3>
              <p className="mb-2">
                Full payment is required to secure your slot. Reservations must
                be made 3–4 weeks in advance to allow time for materials to
                arrive.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Cancellation Policy</h3>
              <p className="mb-2">
                Cancellations will incur a 30% fee to cover reserved materials
                and preparation.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Booking Link</h3>
              <p className="mb-2">
                A booking link will be sent once all details are confirmed.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Inclusions:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  The workshop includes a dried flower arrangement for each
                  participant.
                </li>
                <li>A certificate of participation will be provided.</li>
                <li>
                  All necessary floral tools will be available for use during
                  the workshop.
                </li>
                <li>
                  A care tips card will be given to help you maintain your dried
                  flower arrangement.
                </li>
                <li>
                  Each participant will receive a flower bag to take their
                  arrangement home safely.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <FooterComponent />
    </div>
  );
}

export default WorkshopPage;
