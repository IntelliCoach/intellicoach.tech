import { Star } from "lucide-react";
import { testimonials } from "@/lib/testimonials";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Loved by Coaches Worldwide
          </h2>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            See what coaches are saying about their experience with
            intelli.coach
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-white mb-6 text-lg leading-relaxed">
                &quot;{testimonial.text}&quot;
              </p>
              <div>
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-cyan-200">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-cyan-100 max-w-3xl mx-auto">
            Want to share your story? Send us a testimonial at{" "}
            <a href="mailto:testimonials@intellicoach.tech">
              testimonials@intellicoach.tech
            </a>
            !
          </p>
        </div>
      </div>
    </section>
  );
}
