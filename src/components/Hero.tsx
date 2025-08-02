"use client";
import React from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import { getDeviceType, DeviceType } from "@/utils/deviceDetection";
import { ANDROID_LINK, IOS_LINK } from "@/lib/links";

export default function Hero() {
  let deviceType = getDeviceType();
  if (!deviceType) deviceType = DeviceType.OTHER; // Fallback for SSR or undefined
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-600 via-blue-600 to-blue-800">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl">
        <div className="flex-1 text-center lg:text-left text-white lg:max-w-3xl mt-12 lg:mt-0">
          <Image
            src="/icon.webp"
            alt="intelli.coach Logo"
            width={150}
            height={150}
            priority
            className="mx-auto lg:mx-0 mb-8 rounded-md shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
          />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            intelli.coach
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-cyan-100">
            Sports substitutions made simple
          </p>
          <p className="text-base md:text-lg lg:text-xl mb-12 text-cyan-200 leading-relaxed">
            Generate optimized lineups that provide fair playing time to all
            players while maximizing team strength at critical moments
          </p>

          <div className="lg:hidden flex justify-center mt-8 mb-8">
            <div className="relative">
              <Image
                src="/screenshot.webp"
                alt="intelli.coach App Screenshot"
                width={250}
                height={500}
                priority
                className="rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center text-center mb-10">
            {[DeviceType.IOS, DeviceType.OTHER].includes(deviceType) && (
              <a
                href={IOS_LINK}
                target="_blank"
                rel="noopener"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-50 transform hover:scale-105 transition-all duration-300 shadow-2xl flex items-center gap-3"
                style={{ color: "#1093c8" }}
              >
                Download on App Store
                <ArrowRight className="w-5 h-5" />
              </a>
            )}
            {[DeviceType.ANDROID, DeviceType.OTHER].includes(deviceType) && (
              <a
                href={ANDROID_LINK}
                target="_blank"
                rel="noopener"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-50 transform hover:scale-105 transition-all duration-300 shadow-2xl flex items-center gap-3"
                style={{ color: "#1093c8" }}
              >
                Download on Play Store
                <ArrowRight className="w-5 h-5" />
              </a>
            )}
            <a
              href="#features"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white transform hover:scale-105 transition-all duration-300"
              style={{ "--hover-color": "#1093c8" } as React.CSSProperties}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#1093c8")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "white")
              }
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="hidden lg:flex flex-1 justify-center lg:justify-end max-w-md">
          <div className="relative">
            <Image
              src="/screenshot.webp"
              alt="intelli.coach App Screenshot"
              width={300}
              height={600}
              priority
              className="rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white opacity-60" />
      </div>
    </section>
  );
}
