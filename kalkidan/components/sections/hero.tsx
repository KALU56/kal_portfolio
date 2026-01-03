"use client";

import FadeUp from "@/components/animations/fade-up";
import DotGrid from "@/components/backgrounds/dot-grid";
import MouseGlow from "@/components/backgrounds/mouse-glow";
import { Button } from "@/components/ui/button";
import { Home, User, Folder } from "lucide-react"; // import icons

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden py-40 flex items-center justify-center text-center">
      {/* Background effects */}
      <DotGrid />
      <MouseGlow />

      {/* Main content container */}
      <div className="flex w-full max-w-5xl px-6">
        {/* Left column: Icons */}
        <div className="flex flex-col items-center space-y-8 mr-12">
          <Home className="text-white w-8 h-8 cursor-pointer hover:text-green-500" />
          <User className="text-white w-8 h-8 cursor-pointer hover:text-green-500" />
          <Folder className="text-white w-8 h-8 cursor-pointer hover:text-green-500" />
        </div>

        {/* Right column: Hero text */}
        <div className="flex-1 flex flex-col justify-center items-start text-left px-4 md:px-12 xl:px-24">
          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            I create modern and interactive web experiences.
          </p>
          <Button className="text-white">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
