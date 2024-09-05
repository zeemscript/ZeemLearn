import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowBigLeft } from "lucide-react";
import { ArrowLeftIcon } from "lucide-react";
const posts = [
  {
    id: "1",
    title: "How to Build a Successful Career in Tech",
    description:
      "Explore the essential steps to create a thriving career in the technology industry.",
    imageUrl: "/images/bg-image.jpg",
    date: "August 22, 2024",
  },
  {
    id: "2",
    title: "Top 10 Programming Languages to Learn in 2024",
    description:
      "A comprehensive guide to the most popular programming languages you should consider learning.",
    imageUrl: "/images/bg-image.jpg",
    date: "August 15, 2024",
  },
  {
    id: "3",
    title: "Mastering Web Development: Tips and Tricks",
    description:
      "Advanced techniques and tips for mastering web development in 2024.",
    imageUrl: "/images/bg-image.jpg",
    date: "August 10, 2024",
  },
  {
    id: "4",
    title: "Designing User-Friendly Websites: Best Practices",
    description:
      "Learn how to design websites that are both visually appealing and easy to use.",
    imageUrl: "/images/bg-image.jpg",
    date: "August 5, 2024",
  },
];

const Blog = () => {
  return (
    <section className="px-4 md:px-10 py-16 bg-gray-900 text-gray-900">
      <Link href="/">
        <ArrowLeftIcon
          size={40}
          className="text-white hover:text-gray-300 w-10"
        />
       
      </Link>

      <div className="max-w-screen-lg mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-200">
            Latest Blog Posts
          </h2>
          <p className="mt-2 text-lg text-gray-400">
            Stay updated with the latest trends and insights from our experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <Link href={`/blogs/${post.id}`}>
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-6">
                <h4 className="text-2xl font-semibold mb-3">{post.title}</h4>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <p className="text-gray-500 mb-4">{post.date}</p>
                <Link href={`/blogs/${post.id}`}>
                  <Button className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition duration-300">
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
