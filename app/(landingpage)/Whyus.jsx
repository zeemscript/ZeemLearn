import Image from "next/image";

const Whyus = () => {
  return (
    <section className="px-4 md:px-10 bg-white py-12">
      <div className="flex flex-wrap justify-center md:justify-between items-center sm:mx-[100px] mx-none">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0 md:pr-8">
          <Image
            src={"/images/tlxlandimage.jpg"}
            alt="World best professional"
            width={400}
            height={350}
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="flex flex-col justify-center md:justify-start">
            <span className="text-2xl my-2 font-serif">
              Why
              <span className="text-md font-bold text-[#113A69] mb-4 px-1 ">
                TeachLeadX
              </span>
            </span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
            dicta provident fugiat beatae, nihil accusantium. Quisquam quam quos
            excepturi, possimus voluptatum, omnis quidem, atque ut neque in
            inventore sed saepe! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsum veniam vero iusto, expedita cupiditate
            provident sequi, voluptatibus fuga sapiente quo porro eveniet
            deserunt eaque dolor maiores eius nobis! Totam, natus! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Similique, a
            dignissimos repellat tempora excepturi reprehenderit at,
            voluptatibus maxime, explicabo sapiente nobis aperiam vero. Vel ab
            architecto culpa sequi nihil hic? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Doloribus debitis officiis fuga,
            quibusdam cupiditate iste nam, libero, earum amet odio atque
            assumenda eaque reiciendis nemo architecto aliquid reprehenderit
            optio consectetur.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyus;
