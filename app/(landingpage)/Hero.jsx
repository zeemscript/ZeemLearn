import React from 'react'

const Hero = () => {
  return (
    <div className="flex flex-col h-[90vh] justify-center items-center  mx-auto my-auto bg-hero bg-cover bg-center font-serif">
      <span className="flex flex-col text-4xl sm:text-6xl -pt-32 text-center font-serif text-black  justify-center items-center">
        Welcome to TeachLeadX
        <br />
        <span className="py-4">Empowering Education, Inspiring Innovation.</span>
      </span>
    </div>
  );
}

export default Hero
