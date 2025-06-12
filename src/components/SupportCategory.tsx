import Link from "next/link";
import { supportArticles } from "@/lib/support";

export const metadata = {
  title: "Support Center - intelli.coach",
  description:
    "Find answers to common questions and learn how to get the most out of intelli.coach",
};

export default function SupportCategory({ category }: { category: string }) {
  const filteredArticles = supportArticles.filter(
    (article) => article.category.toLowerCase() === category.toLowerCase(),
  );
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">{category}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {filteredArticles.map((article) => (
          <Link
            key={article.id}
            href={`/support/${article.id}`}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500 block"
          >
            <div className="mb-3">
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                {article.category}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {article.title}
            </h3>
            <p className="text-gray-600 mb-1">{article.shortDescription}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
