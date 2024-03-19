import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
// import { Icons } from '@/components/icons';
import Link from "next/link";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            About Me
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-200 lg:mx-auto">
            Learn more about the person behind the AI-powered resume tailoring
            service.
          </p>
        </div>
        <div className="mt-16 flex flex-col items-center justify-center">
          <Avatar className="h-24 w-24">
            <AvatarImage src="/avatar.jpg" alt="Avatar" />
            <AvatarFallback>
              <Image
                alt="me | Sahil"
                src={"/me.png"}
                width={"200"}
                height={"200"}
                className="h-full w-full"
              />
            </AvatarFallback>
          </Avatar>
          <h3 className="mt-6 text-2xl font-bold text-white">Sahil Gupta</h3>
          <p className="mt-2 text-lg text-gray-300">Founder & CEO</p>
          <div className="mt-8 space-y-4">
            <p className="text-gray-200 text-center max-w-md">
              As a passionate entrepreneur and technology enthusiast, I founded
              this AI-powered resume tailoring service to help job seekers stand
              out in a competitive market. My mission is to leverage the power
              of artificial intelligence to create personalized and compelling
              resumes that showcase each individual's unique strengths and
              experiences.
            </p>
            <p className="text-gray-200 text-center max-w-md">
              With years of experience in the tech industry and a deep
              understanding of the hiring process, I've witnessed firsthand the
              challenges job seekers face in crafting resumes that truly
              resonate with potential employers. That's why I've dedicated
              myself to developing this cutting-edge solution, empowering
              individuals to present their best selves and increase their
              chances of landing their dream job.
            </p>
          </div>
          <div className="mt-8">
            <Link href="/contact" className="w-full">
              <Button size="lg" className="w-full">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
