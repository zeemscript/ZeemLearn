"use clent";
import Image from "next/image";
const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "/images/aleem.jpg",
  },
  {
    name: "Jane Smith",
    role: "Chief Technology Officer",
    image: "/images/azeemah.jpg",
  },
  {
    name: "Michael Brown",
    role: "Lead Designer",
    image: "/images/user1.jpg",
  },
  {
    name: "Emily Davis",
    role: "Marketing Head",
    image: "/images/aleemah.jpg",
  },
];

const Team = () => {
  return (
    <section className="py-12 px-4 md:px-10 bg-gray-900">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#113A69] mb-4">Our Team</h2>
        <p className="text-lg text-gray-200">
          Meet the people who make ZeemLearn possible
        </p>
      </div>
     
        <div className="flex flex-wrap justify-center md:justify-between">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 text-center"
            >
              <div className="mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto"
                />
              </div>
              <h3 className="text-xl text-white font-semibold">{member.name}</h3>
              <p className="text-gray-200">{member.role}</p>
            </div>
          ))}
        </div>
 
    </section>
  );
};

export default Team;
