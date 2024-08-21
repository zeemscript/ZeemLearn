import Image from "next/image";

export default function Info() {
  return (
    <section
      className="flex flex-col items-center justify-center px-6 py-12 bg-blue-700 text-white"
    >
      <div className="text-center mb-8">
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          At TeachLeadX, Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Eius totam nisi consequatur ullam perspiciatis exercitationem
          illum reiciendis error sunt illo labore quae, eos at dolores, nulla
          minus earum maxime voluptatem. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Dolore consequatur cupiditate nostrum aut nihil!
          Quibusdam mollitia repellat et quisquam ullam facilis perferendis
          soluta ipsa. Consectetur dicta excepturi eveniet exercitationem nemo.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center max-w-5xl mx-auto gap-8">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <Image
            src={"/images/tlxlandimage.jpg"}
            alt="Our Team"
            width={600}
            height={400}
            layout="intrinsic"
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-base md:text-lg leading-relaxed">
           Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Eius totam nisi consequatur ullam perspiciatis exercitationem
          illum reiciendis error sunt illo labore quae, eos at dolores, nulla
          minus earum maxime voluptatem. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Dolore consequatur cupiditate nostrum aut nihil!
          Quibusdam mollitia repellat et quisquam ullam facilis perferendis
          soluta ipsa. Consectetur dicta excepturi eveniet exercitationem nemo.
        </p>
        </div>
      </div>
    </section>
  );
}
