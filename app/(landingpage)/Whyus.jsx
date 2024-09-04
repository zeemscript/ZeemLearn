"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Whyus = () => {
  return (
    <section className="px-4 md:px-10 bg-white py-12">
      <div className="flex flex-wrap justify-center md:justify-between items-center sm:mx-[100px] mx-none">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0 md:pr-8">
          <Image
            src={"/images/whyus.jpg"}
            alt="World best professional"
            width={400}
            height={350}
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="flex flex-col justify-center md:justify-start">
            <span className="text-2xl sm:text-4xl my-2 font-serif">
              Why Choose
              <span className="text-md font-bold text-[#113A69] mb-4 px-1">
                ZeemLearn?
              </span>
            </span>
            <ul className="text-lg my-4 space-y-2">
              <li className="font-semibold font-serif  text-xl">
                Expert-Led Courses:
                <br />
                <span className="font-light px-4">
                  Learn from industry leaders and academic professionals.
                </span>
              </li>
              <li className="font-semibold font-serif text-xl">
                Flexible Learning: <br />
                <span className="font-normal px-4">
                  Study at your own pace, anytime, anywhere.
                </span>
              </li>
              <li className="font-semibold font-serif text-xl">
                Global Community: <br />
                <span className="font-normal px-4">
                  Connect with learners from around the world.
                </span>
              </li>
              <li className="font-semibold font-serif text-xl">
                Career-Focused: <br />
                <span className="font-normal font-serif px-4">
                  Gain skills that matter and advance your career.
                </span>
              </li>
              <li className="font-semibold font-serif text-center py-10 text-xl">
                Join a Global Learning Community:
                <br />
                <span className="font-normal px-4">
                  Whether you&apos;re looking to upskill, reskill, or simply
                  explore a new passion, ZeemLearn offers a wide range of
                  courses designed to help you succeed.
                </span>
              </li>
            </ul>
            <p className="text-lg mt-4">
              With ZeemLearn, the future is in your hands. Ready to begin?
            </p>
            <Button className="mt-6">Explore Courses</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyus;
