import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import PageHeader from "@/components/page-header";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <PageHeader title={post.category} />

      <article className="py-20 md:py-28 bg-warm-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {post.image && (
            <div className="rounded-2xl overflow-hidden h-64 md:h-96 mb-10">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="flex flex-wrap items-center gap-4 text-stone-light text-sm mb-6">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span className="px-3 py-1 bg-sage-light text-primary text-xs font-semibold uppercase tracking-wider rounded-full">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-dark font-serif mb-10">
            {post.title}
          </h1>

          <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-stone-dark prose-p:text-stone-medium prose-a:text-primary prose-strong:text-stone-dark">
            {post.content.split("\n").map((paragraph, i) => {
              if (!paragraph.trim()) return null;
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-2xl font-bold text-stone-dark font-serif mt-8 mb-4">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={i} className="text-xl font-bold text-stone-dark font-serif mt-6 mb-3">
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              }
              if (paragraph.startsWith("> ")) {
                return (
                  <blockquote key={i} className="border-l-4 border-primary pl-4 italic text-stone-medium my-6">
                    {paragraph.replace("> ", "")}
                  </blockquote>
                );
              }
              if (paragraph.startsWith("- ")) {
                return (
                  <ul key={i} className="list-disc list-inside text-stone-medium mb-4 space-y-1">
                    <li>{paragraph.replace("- ", "")}</li>
                  </ul>
                );
              }
              if (/^\d+\. /.test(paragraph)) {
                return (
                  <ol key={i} className="list-decimal list-inside text-stone-medium mb-4 space-y-1">
                    <li>{paragraph.replace(/^\d+\. /, "")}</li>
                  </ol>
                );
              }
              return (
                <p key={i} className="text-stone-medium leading-relaxed mb-4">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>
      </article>
    </>
  );
}
