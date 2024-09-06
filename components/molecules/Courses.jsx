"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Course() {
  const [courses, setCourses] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=programming+courses&type=video&key=AIzaSyBvvWNt_2ZqnfbtVSAnkmoOOOk4y5GExfA`
        );
        const data = await response.json();

        const fetchedCourses = data.items.map((item) => ({
          title: item.snippet.title,
          link: `https://www.youtube.com/watch?v=${item.id.videoId}`,
          thumbnail: item.snippet.thumbnails.medium.url,
          description: item.snippet.description,
        }));

        setCourses(fetchedCourses);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-gray-600"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
          <p className="text-center py-12 ml-4">Loading courses...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 lg:px-16 py-28">
          {courses.length > 0 ? (
            courses.map((course, index) => (
              <Card
                key={index}
                className="w-full rounded-lg overflow-hidden shadow-md"
              >
                <CardHeader className="p-0">
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <CardTitle className="text-lg font-semibold font-serif">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-sm">
                      Video Link: {course.link}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-gray-700">{course.description}</p>
                </CardContent>
                <CardFooter className="p-4 flex justify-end">
                  <Link
                    href={course.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button size="lg" className="w-full">Watch on YouTube</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))
          ) : (
            <p className="text-center w-full col-span-full">
              No courses found.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
