import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { longFormatters } from "date-fns";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "How to Build a Successful Career in Tech",
      description:
        "Explore the essential steps to create a thriving career in the technology industrylore the essential steps to create a thriving career in the technology industrylore the essential steps to create a thriving career in the technology industrylore the essential steps to create a thriving career in the technology industrylore the essential steps to create a thriving career in the technology industrylore the essential steps to create a thriving career in the technology industrylore the essential steps to create a thriving career in the technology industrylore the essential steps to create a thriving career in the technology industry",
      imageUrl: "/images/bg-image.jpg",
      date: "August 22, 2024",
    },
    {
      id: 2,
      title: "Top 10 Programming Languages to Learn in 2024",
      description:
        "A comprehensive guide to the most popular programming languages you should consider learning.",
      imageUrl: "/images/bg-image.jpg",
      date: "August 15, 2024",
    },
    {
      id: 3,
      title: "Mastering Web Development: Tips and Tricks",
      description:
        "Advanced techniques and tips for mastering web development in 2024.",
      imageUrl: "/images/bg-image.jpg",
      date: "August 10, 2024",
    },
    {
      id: 4,
      title: "Designing User-Friendly Websites: Best Practices",
      description:
        "Learn how to design websites that are both visually appealing and easy to use.",
      imageUrl: "/images/bg-image.jpg",
      date: "August 5, 2024",
    },
  ];

  return (
    <section className="px-4 md:px-10 py-16 bg-gray-50 text-gray-900">
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Latest Blog Posts
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Stay updated with the latest trends and insights from our experts.
          </p>
        </div>

        {/* Featured Post */}
        <div className="flex flex-col md:flex-row mb-12 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="md:w-1/2">
            <Image
              src={posts[0].imageUrl}
              alt={posts[0].title}
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-semibold mb-4">{posts[0].title}</h3>
              <p className="text-lg text-gray-700 mb-6">
                {posts[0].description}
              </p>
            </div>
            <div>
              <p className="text-gray-500 mb-4">{posts[0].date}</p>
              <Link href={`/blog/${posts[0].id}`}>
                <Button className="bg-blue-600 text-white rounded-lg px-6 py-3 hover:bg-blue-700 transition duration-300">
                  Read More
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Recent Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Link href={`/blog/${post.id}`}>
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
                <Link href={`/blog/${post.id}`}>
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
