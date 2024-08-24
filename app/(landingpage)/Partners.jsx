import React from "react";
import Image from "next/image";

const Partners = () => {
  return (
    <section className="px-4 md:px-10 py-12 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Our Partners</h2>
        <p className="mt-2 text-lg text-gray-600">
          Collaborating with industry leaders.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="flex items-center justify-center">
          <Image
            src="/images/partner1.jpg"
            alt="Partner 1"
            width={160}
            height={80}
            className="object-contain"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/images/partner2.jpg"
            alt="Partner 2"
            width={160}
            height={80}
            className="object-contain"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/images/partner2.jpg"
            alt="Partner 3"
            width={160}
            height={80}
            className="object-contain"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/images/partner1.jpg"
            alt="Partner 4"
            width={160}
            height={80}
            className="object-contain"
          />
        </div>
        {/* Add more partner logos as needed */}
      </div>
    </section>
  );
};

export default Partners;
