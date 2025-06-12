import Features from "@/components/Features";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Features - intelli.coach",
  description:
    "Discover powerful AI-powered features for modern sports coaching",
};

export default function FeaturesPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Powerful Features</h1>
        </div>
      </div>
      <Features />
      <CTA />
    </div>
  );
}
