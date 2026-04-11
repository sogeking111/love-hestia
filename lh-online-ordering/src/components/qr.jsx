import { useState } from "react";
import gcash from "../assets/gcash.jpg";
import bpi from "../assets/bpi.jpg";

function QrComponent() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="mb-4">
      {/* Images */}
      <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-center">
        <div className="text-center">
          <img
            src={gcash}
            alt="GCash QR Code"
            className="w-50 border cursor-pointer hover:opacity-80"
            onClick={() => setSelectedImage(gcash)}
          />
          <p className="text-xs text-neutral-500 mt-1">Tap for better view</p>
        </div>

        <div className="text-center">
          <img
            src={bpi}
            alt="BPI QR Code"
            className="w-74 border cursor-pointer hover:opacity-80"
            onClick={() => setSelectedImage(bpi)}
          />
          <p className="text-xs text-neutral-500 mt-1">Tap for better view</p>
        </div>
      </div>

      <p className="mt-2 text-sm text-neutral-600 text-center">
        Scan to pay (GCash / BPI)
      </p>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Fullscreen QR"
            className="max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()} // prevents closing when clicking image
          />

          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}

export default QrComponent;
