"use client";
import axios from "axios";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CourseSkeleton from "../skeleton/CourseSkeleton";
import { toast } from "sonner";
import { Clipboard } from "lucide-react";
import { ClipboardCheck } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Course() {
  const [courses, setCourses] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("/api/courses/youtube");
        setCourses(response.data.items);
        setLoading(false);
        toast.success("here you go");
      } catch (error) {
        console.error("Error fetching courses:", error);
        setError(error.message);
        setLoading(false);
        toast.error("Oh no error getting courses");
      }
    };

    fetchCourses();
  }, []);

  const handleCopyLink = (link) => {
    navigator.clipboard.writeText(link).then(() => {
      toast.success("Link copied to clipboard");
    });
  };

  return (
    <div>
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 lg:px-16 py-28">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
            <CourseSkeleton key={index} />
          ))}
        </div>
      ) : error ? (
        <p className="text-center w-full col-span-full">{error}</p>
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
                    src={course.snippet.thumbnails.default.url}
                    alt={course.snippet.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <CardTitle className="text-lg font-semibold font-serif">
                      {course.snippet.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-gray-700 x">
                    {course.snippet.description}
                  </p>
                </CardContent>
                <CardFooter className="p-4 flex justify-end">
                  <Link
                    href={`https://www.youtube.com/watch?v=${course.id.videoId}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button size="lg" className="w-full">
                      Watch on YouTube
                    </Button>
                  </Link>
                  <Button
                    size="lg"
                    className="w-full sm:w-auto ml-2"
                    onClick={() =>
                      handleCopyLink(
                        `https://www.youtube.com/watch?v=${course.id.videoId}`
                      )
                    }
                  >
                    <Clipboard className="mr-2" size={20} />
                    Copy Link
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <p>No courses found</p>
          )}
        </div>
      )}
    </div>
  );
}
