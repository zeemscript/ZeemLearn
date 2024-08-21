import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Courses = ({id}) => {
  return (
    <div id={id} className="font-serif bg-blue-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <span className="block text-3xl font-semibold text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Explore Courses
        </span>
        <Separator className="w-24 sm:w-48 lg:w-64 bg-black h-1 mx-auto mt-4 mb-6" />
      </div>
      <div className="relative">
        <Carousel
          opts={{
            align: "start",
            perPage: 1,
            breakpoints: {
              640: { perPage: 1 },
              768: { perPage: 2 },
              1024: { perPage: 3 },
              1280: { perPage: 4 },
            },
          }}
          className="w-full"
        >
          <CarouselContent>
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="p-4">
                <Card className="max-w-sm mx-auto bg-white shadow-lg rounded-lg">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <span className="text-4xl font-bold text-blue-600 mb-4">
                      {index + 1}
                    </span>
                    <p className="text-lg text-gray-800">
                      Course Description {index + 1}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-blue-700 p-2 rounded-full cursor-pointer" />
          <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-blue-700 p-2 rounded-full cursor-pointer" />
        </Carousel>
      </div>
    </div>
  );
};

export default Courses;
