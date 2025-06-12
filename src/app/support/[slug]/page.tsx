import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { supportArticles } from "@/lib/support";
import { ArrowRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import YouTubeEmbed from "@/components/YoutubeEmbed";

type Props = Promise<{ slug: string }>;

export function generateStaticParams() {
  return supportArticles.map((article) => ({
    slug: article.id,
  }));
}

export async function generateMetadata({ params }: { params: Props }) {
  const { slug } = await params;
  const article = supportArticles.find(
    (a) => a.id.toLowerCase() === slug.toLowerCase(),
  );

  if (!article) {
    return {
      title: "Article Not Found - intelli.coach Support",
    };
  }

  return {
    title: `${article.title} - intelli.coach Support`,
    description: article.content,
  };
}

export default async function SupportArticlePage({
  params,
}: {
  params: Props;
}) {
  const { slug } = await params;
  const article = supportArticles.find(
    (a) => a.id.toLowerCase() === slug.toLowerCase(),
  );

  if (!article) {
    notFound();
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <Link
          href="/support"
          className="text-blue-600 hover:text-blue-800 mb-8 inline-flex items-center gap-2"
        >
          ← Back to Support
        </Link>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <Link href={`/support/category/${article.category}`}>
            <div className="mb-6">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {article.category}
              </span>
            </div>
          </Link>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {article.title}
          </h1>

          <div className="prose prose-lg max-w-none">
            <ReactMarkdown
              components={{
                img({ src = "", alt }) {
                  if (alt?.includes("youtube")) {
                    return <YouTubeEmbed url={src as string} />;
                  }
                  return <Image src={src as string} alt={alt as string} />;
                },
              }}
              remarkPlugins={[remarkGfm]}
            >
              {article.content}
            </ReactMarkdown>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                Need More Help?
              </h3>
              <p className="text-blue-700 mb-4">
                Can&apos;t find what you&apos;re looking for? Our support team
                is here to help.
              </p>
              <a
                href="mailto:support@intellicoach.tech"
                className="bg-blue-600 !text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2 !no-underline"
              >
                Contact Support
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
