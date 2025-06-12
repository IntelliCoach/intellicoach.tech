"use client";
import { ANDROID_LINK, IOS_LINK } from "@/lib/links";
import { DeviceType, getDeviceType } from "@/utils/deviceDetection";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  let deviceType = getDeviceType();
  if (!deviceType) deviceType = DeviceType.OTHER; // Fallback for SSR or undefined
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-6">
          Ready to Transform Your Coaching?
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Join thousands of coaches across 40+ countries who are already using
          intelli.coach to optimize their lineups and revolutionize their
          coaching experience
        </p>
        {[DeviceType.IOS, DeviceType.OTHER].includes(deviceType) && (
          <a
            href={IOS_LINK}
            className={
              "bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-12 py-6 rounded-full font-semibold text-xl hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-2xl inline-flex items-center gap-3" +
              (deviceType === DeviceType.OTHER ? " mr-4" : "")
            }
            style={
              {
                background: "linear-gradient(to right, #0891b2, #1093c8)",
                "--hover-from": "#0e7490",
                "--hover-to": "#0d82b8",
              } as React.CSSProperties
            }
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background =
                "linear-gradient(to right, #0e7490, #0d82b8)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background =
                "linear-gradient(to right, #0891b2, #1093c8)";
            }}
          >
            Download{" "}
            {deviceType === DeviceType.OTHER ? "for iOS" : "intelli.coach Now"}
            <ArrowRight className="w-6 h-6" />
          </a>
        )}
        {[DeviceType.ANDROID, DeviceType.OTHER].includes(deviceType) && (
          <a
            href={ANDROID_LINK}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-12 py-6 rounded-full font-semibold text-xl hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-2xl inline-flex items-center gap-3"
            style={
              {
                background: "linear-gradient(to right, #0891b2, #1093c8)",
                "--hover-from": "#0e7490",
                "--hover-to": "#0d82b8",
              } as React.CSSProperties
            }
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background =
                "linear-gradient(to right, #0e7490, #0d82b8)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background =
                "linear-gradient(to right, #0891b2, #1093c8)";
            }}
          >
            Download{" "}
            {deviceType === DeviceType.OTHER
              ? "for Android"
              : "intelli.coach Now"}
            <ArrowRight className="w-6 h-6" />
          </a>
        )}
      </div>
    </section>
  );
}
