import React from 'react';
import Image from 'next/image';
export const Home = () => {
   
  return (
    <div className="container mx-auto px-4 py-8 pt-28">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-800">Welcome to Our Gym!</h1>
        <p className="text-xl text-gray-600 mt-4">
          Join us and achieve your fitness goals with expert trainers and community support.
        </p>
        <div className="mt-8">
          <button className="btn btn-primary">Get Started</button>
        </div>
      </section>

      <div className="mt-8">
        <Image 
          src="/home_images/home-img.jpg" 
          alt="Hero Gym" 
          width={1200} 
          height={600} 
          className="object-cover rounded-lg" 
        />
      </div>
    </div>
  );
};

export default Home;