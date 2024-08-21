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
const Home = () => {
  return (
    <>
      <Hero />
      <About id="aboutus"/>
      <Courses id={"courses"} />
      <Empower />
      <ContactUs id={"contact"}/>
      <Whyus id={"whyus"}/>
      <Info id={"vision"}/>
      <Suscribe />
    </>
  );
};

export default Home;
