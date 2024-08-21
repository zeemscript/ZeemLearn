"use client"
import React from 'react';
import { toast } from "sonner";
import Hero from './(landingpage)/Hero';
import About from './(landingpage)/About';
import Courses from './(landingpage)/Courses';
import ContactUs from './(landingpage)/Contactus';
import Suscribe from './(landingpage)/Suscribe';
import Info from './(landingpage)/Info';
const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Courses />
      <ContactUs />
    <Info/>
      <Suscribe />
    </>
  );
}

export default Home;
