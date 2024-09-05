"use client";
import React from "react";
import Navbar from "@/components/atoms/Navbar";
import Footer from "@/components/atoms/Footer";
import Hero from "./Hero";
import About from "./About";
import Courses from "./Courses";
import ContactUs from "./ContactUs";
import Suscribe from "./Suscribe";
import Info from "./Info";
import Whyus from "./Whyus";
import Empower from "./Empower";
import Team from "./Team";
import Testimonial from "./Testimonial";
import Blog from "./Blog";
import Partners from "./Partners";
import TrustedBy from "./Trust";

const Home = () => {
  return (
    <>
      <div className="relative">
        <Navbar />
        <main>
          <Hero />
          <About id="aboutus" />
          {/* <Courses id={"courses"} /> */}
          <Empower />
          <Whyus id={"whyus"} />
          <Info id={"vision"} />
          <Testimonial />
          <Team />
          <Partners />
          <TrustedBy />
          <Blog />
          <ContactUs id={"contact"} />
          <Suscribe />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
