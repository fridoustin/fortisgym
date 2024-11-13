import React from 'react';

export const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="w-full h-[600px] bg-hero-gym bg-cover bg-center">
        <div className="flex justify-center items-center h-full text-center text-white">
          <h1 className="text-5xl font-bold">Welcome to Fortis Gym!</h1> {/* Perubahan di sini */}
          <p className="text-xl mt-4">
            Join us and achieve your fitness goals with expert trainers and community support.
          </p>
          <div className="mt-8">
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};
