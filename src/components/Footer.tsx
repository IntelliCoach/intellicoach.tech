import { ANDROID_LINK, IOS_LINK } from "@/lib/links";
import { DeviceType, getDeviceType } from "@/utils/deviceDetection";
import Link from "next/link";

export default function Footer() {
  let deviceType = getDeviceType();
  if (!deviceType) deviceType = DeviceType.OTHER; // Fallback for SSR or undefined
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">intelli.coach</h3>
            <p className="text-gray-300">Sports substitutions made simple</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-white">
                Home
              </Link>
              <Link
                href="/features"
                className="block text-gray-300 hover:text-white"
              >
                Features
              </Link>
              <Link
                href="/testimonials"
                className="block text-gray-300 hover:text-white"
              >
                Testimonials
              </Link>
              <Link
                href="/support"
                className="block text-gray-300 hover:text-white"
              >
                Support
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-300 mb-2">
              <a
                href="mailto:support@intellicoach.tech"
                className="hover:text-white"
              >
                support@intellicoach.tech
              </a>
            </p>
            {[DeviceType.IOS, DeviceType.OTHER].includes(deviceType) && (
              <a
                href={IOS_LINK}
                target="_blank"
                rel="noopener"
                className="inline-block bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors mr-2 mb-2"
              >
                Download for iOS
              </a>
            )}
            {[DeviceType.ANDROID, DeviceType.OTHER].includes(deviceType) && (
              <a
                href={ANDROID_LINK}
                target="_blank"
                rel="noopener"
                className="inline-block bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors"
              >
                Download for Android
              </a>
            )}
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 intelli.coach. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
