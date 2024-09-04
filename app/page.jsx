"use client";
import React from "react";
import Hero from "./(landingpage)/Hero";
import About from "./(landingpage)/About";
import Courses from "./(landingpage)/Courses";
import ContactUs from "./(landingpage)/ContactUs";
import Suscribe from "./(landingpage)/Suscribe";
import Info from "./(landingpage)/Info";
import Whyus from "./(landingpage)/Whyus";
import Empower from "./(landingpage)/Empower";
import Team from "./(landingpage)/Team";
import Testimonial from "./(landingpage)/Testimonial";
import Blog from "./(landingpage)/Blog";
import Partners from "./(landingpage)/Partners";
import TrustedBy from "./(landingpage)/Trust";

const Home = () => {
  return (
    <>
      <Hero />
      <About id="aboutus" />
      <Courses id={"courses"} />
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
    </>
  );
};

export default Home;
