import { supportCategories } from "@/lib/support";
import SupportPage from "@/app/support/page";
import { notFound } from "next/navigation";

type Props = Promise<{ slug: string }>;

export function generateStaticParams() {
  return supportCategories.map((category) => ({
    slug: category,
  }));
}

export async function generateMetadata({ params }: { params: Props }) {
  const { slug } = await params;
  const category = supportCategories.find(
    (c) => c.toLowerCase() === slug.toLowerCase(),
  );

  if (!category) {
    return {
      title: "Category Not Found - intelli.coach Support",
    };
  }

  return {
    title: `${category} - intelli.coach Support`,
  };
}

export default async function SupportArticlePage({
  params,
}: {
  params: Props;
}) {
  const { slug } = await params;
  const category = supportCategories.find(
    (c) => c.toLowerCase() === slug.toLowerCase(),
  );

  if (!category) {
    notFound();
  }

  return SupportPage({ params: Promise.resolve({ category }) });
}
