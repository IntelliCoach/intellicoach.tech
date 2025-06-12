import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Testimonials - intelli.coach",
  description: "See what coaches are saying about intelli.coach",
};

export default function TestimonialsPage() {
  return (
    <div className="pt-20">
      <Testimonials />
      <CTA />
    </div>
  );
}
