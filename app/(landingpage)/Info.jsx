"use clent";

import Image from "next/image";
import { Separator } from "@radix-ui/react-context-menu";
export default function Info({ id }) {
  return (
    <section
      id={id}
      className="flex flex-col items-center justify-center px-6 py-12 bg-blue-500 text-white"
    >
      <div className="text-center mb-8">
        <span className="text-4xl sm:text-5xl font-serif font-thin">
          Our Vision
        </span>
        <Separator className="w-52 bg-black  h-1 my-1 mx-auto" />

        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          TeachLeadX aims to be a global leader in online education, delivering
          accessible, flexible, and high-quality learning experiences to
          students and professionals worldwide. The organization strives to
          create a platform that not only educates but also empowers individuals
          to lead and excel in their respective fields. TeachLeadX envisions a
          world where quality education is accessible to everyone, irrespective
          of geographical, financial, or societal barriers.
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
          <span className="text-4xl sm:text-5xl font-serif font-thin">
            Our Mision
          </span>
          <Separator className="w-52 bg-black  h-1 my-1" />
          <p className="text-base md:text-lg leading-relaxed">
            The mission of TeachLeadX is to provide comprehensive online courses
            that cater to the diverse needs of learners across the globe. The
            organization is committed to fostering an inclusive learning
            environment that supports the development of skills and knowledge
            necessary for personal and professional growth. TeachLeadX endeavors
            to leverage innovative technology and expert instructors to deliver
            content that is both relevant and impactful, ensuring that students
            are well-equipped to meet the challenges of the modern world. nemo.
          </p>
        </div>
      </div>
    </section>
  );
}
