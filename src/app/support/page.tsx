import { supportCategories } from "@/lib/support";
import { CheckCircle } from "lucide-react";
import { ANDROID_LINK, IOS_LINK } from "@/lib/links";
import SupportCategory from "@/components/SupportCategory";

type Props = Promise<{ category: string }>;

export const metadata = {
  title: "Support Center - intelli.coach",
  description:
    "Find answers to common questions and learn how to get the most out of intelli.coach",
};

export default async function SupportPage({ params }: { params: Props }) {
  const { category } = await params;
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Support Center</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Find answers to common questions and learn how to get the most out
            of intelli.coach
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            {(category ? [category] : supportCategories).map((category, i) => (
              <SupportCategory category={category} key={i} />
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Quick Links
              </h3>
              <div className="space-y-3">
                <a
                  href="mailto:support@intellicoach.tech"
                  className="block text-blue-600 hover:text-blue-800 flex items-center gap-2"
                >
                  <CheckCircle className="w-4 h-4" />
                  Email Support
                </a>
                <a
                  href={IOS_LINK}
                  className="block text-blue-600 hover:text-blue-800 flex items-center gap-2"
                >
                  <CheckCircle className="w-4 h-4" />
                  App Store Page
                </a>
                <a
                  href={ANDROID_LINK}
                  className="block text-blue-600 hover:text-blue-800 flex items-center gap-2"
                >
                  <CheckCircle className="w-4 h-4" />
                  Play Store Page
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white p-6 rounded-lg mt-6">
              <h3 className="text-lg font-semibold mb-3">Still Need Help?</h3>
              <p className="text-blue-100 mb-4 text-sm">
                Our support team typically responds within 24 hours.
              </p>
              <a
                href="mailto:support@intellicoach.tech"
                className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
