import React from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "John Doe",
    role: "Software Engineer",
    image: "/images/2.png",
    text: "This platform has completely transformed the way I work. The courses are top-notch and have helped me improve my skills significantly.",
  },
  {
    name: "Jane Smith",
    role: "UI/UX Designer",
    image: "/images/2.png",
    text: "The best learning experience I have ever had! The content is well-structured and the instructors are very knowledgeable.",
  },
  {
    name: "Alice Johnson",
    role: "Product Manager",
    image: "/images/user1.jpg",
    text: "A game-changer in the industry. The courses are relevant, up-to-date, and extremely useful for my career development.",
  },
];

const Testimonial = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-serif text-center text-gray-800 mb-8">
          What Our Clients Say
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 relative">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    layout="fill"
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">{`"${testimonial.text}"`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
