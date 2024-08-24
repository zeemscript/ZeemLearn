import React from "react";
import Image from "next/image";

const TrustedBy = () => {
  return (
    <section className="px-4 md:px-10 py-12 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Trusted By</h2>
        <p className="mt-2 text-lg text-gray-600">
          Leading organizations that trust us.
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8">
        <div className="w-32 h-16 flex items-center justify-center">
          <Image
            src="/images/partner1.jpg"
            alt="Company 1"
            width={128}
            height={64}
            className="object-contain"
          />
        </div>
        <div className="w-32 h-16 flex items-center justify-center">
          <Image
            src="/images/partner1.jpg"
            alt="Company 2"
            width={128}
            height={64}
            className="object-contain"
          />
        </div>
        <div className="w-32 h-16 flex items-center justify-center">
          <Image
            src="/images/partner1.jpg"
            alt="Company 3"
            width={128}
            height={64}
            className="object-contain"
          />
        </div>
        {/* Add more logos as needed */}
      </div>
    </section>
  );
};

export default TrustedBy;
