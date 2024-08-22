"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";

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
              Why Choose
              <span className="text-md font-bold text-[#113A69] mb-4 px-1">
                TeachLeadX?
              </span>
            </span>
            <ul className="text-lg my-4 space-y-2">
              <li className="font-semibold">
                Expert-Led Courses:{" "}
                <span className="font-normal">
                  Learn from industry leaders and academic professionals.
                </span>
              </li>
              <li className="font-semibold">
                Flexible Learning:{" "}
                <span className="font-normal">
                  Study at your own pace, anytime, anywhere.
                </span>
              </li>
              <li className="font-semibold">
                Global Community:{" "}
                <span className="font-normal">
                  Connect with learners from around the world.
                </span>
              </li>
              <li className="font-semibold">
                Career-Focused:{" "}
                <span className="font-normal">
                  Gain skills that matter and advance your career.
                </span>
              </li>
              <li className="font-semibold">
                Join a Global Learning Community:{" "}
                <span className="font-normal">
                  Whether you&amp;re looking to upskill, reskill, or simply explore
                  a new passion, TeachLeadX offers a wide range of courses
                  designed to help you succeed.
                </span>
              </li>
            </ul>
            <p className="text-lg mt-4">
              With TeachLeadX, the future is in your hands. Ready to begin?
            </p>
            <Button className="mt-6" >Explore Courses</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyus;
