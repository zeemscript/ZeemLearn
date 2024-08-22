import * as React from "react";
import Image from "next/image";
import Search from "../atoms/Search";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const courses = [
  { title: "Web Development Bootcamp", price: "$199" },
  { title: "JavaScript Mastery", price: "$149" },
  { title: "React for Beginners", price: "$99" },
  { title: "Advanced CSS Techniques", price: "$89" },
  { title: "Node.js Complete Guide", price: "$179" },
  { title: "Next.js with Tailwind CSS", price: "$129" },
  { title: "Full Stack Development", price: "$299" },
  { title: "Python Programming", price: "$119" },
  { title: "Machine Learning Basics", price: "$149" },
  { title: "Data Structures & Algorithms", price: "$139" },
  { title: "Mobile App Development", price: "$189" },
  { title: "UI/UX Design Fundamentals", price: "$99" },
  { title: "SEO and Digital Marketing", price: "$89" },
  { title: "DevOps Essentials", price: "$169" },
  { title: "Cloud Computing with AWS", price: "$199" },
  { title: "Cybersecurity Fundamentals", price: "$149" },
  { title: "Blockchain Development", price: "$159" },
  { title: "Artificial Intelligence Basics", price: "$189" },
  { title: "Game Development with Unity", price: "$139" },
  { title: "Frontend Developer Essentials", price: "$99" },
];

export default function Course() {
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 lg:px-16 py-12">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => (
            <Card
              key={index}
              className="w-full rounded-lg overflow-hidden shadow-md"
            >
              <CardHeader className="p-0">
                <Image
                  src="/images/tlxlandimage.jpg"
                  alt={course.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <CardTitle className="text-lg font-semibold">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Price: {course.price}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-gray-700">
                  Learn the fundamentals and advanced topics of {course.title}.
                  This course is designed for those who want to master the
                  subject.
                </p>
              </CardContent>
              <CardFooter className="p-4 flex justify-end">
                <Button className="w-full sm:w-auto">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <p className="text-center w-full col-span-full">
            No courses found matching your search.
          </p>
        )}
      </div>
    </div>
  );
}