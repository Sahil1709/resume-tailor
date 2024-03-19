import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";
import { HoverCard } from "@/components/card-hover";
import { GoogleGemini } from "@/components/google-gemini";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <GoogleGemini />
      <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block">AI-Powered</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-600 to-indigo-500">
              Resume Tailoring
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-200 lg:mx-auto">
            Effortlessly tailor your resume to match job descriptions with our
            cutting-edge AI technology.
          </p>
        </div>
        <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <Link href="/upload" className="w-full">
              <Button size="lg" className="w-full">
                Get Started
              </Button>
            </Link>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <Link href="/about" className="w-full">
              <Button variant="outline" size="lg" className="w-full">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative mt-16 w-full h-96">
        <HoverCard />
      </div>
    </div>
  );
};

export default Home;
