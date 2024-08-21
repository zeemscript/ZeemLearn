"use client";
import React from "react";
import Hero from "./(landingpage)/Hero";
import About from "./(landingpage)/About";
import Courses from "./(landingpage)/Courses";
import ContactUs from "./(landingpage)/ContactUs"; 
import Suscribe from "./(landingpage)/Suscribe";
import Info from "./(landingpage)/Info";
import Whyus from "./(landingpage)/Whyus";
const Home = () => {
  return (
    <>
      <Hero />
      <About id="aboutus"/>
      <Courses />
      <ContactUs id={"contact"}/>
      <Whyus/>
      <Info />
      <Suscribe />
    </>
  );
};

export default Home;
