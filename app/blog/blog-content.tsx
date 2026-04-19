"use client";

import AnimatedSection from "@/components/animated-section";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/components/i18n-provider";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
  featured?: boolean;
}

interface BlogContentProps {
  posts: Post[];
}

export default function BlogContent({ posts }: BlogContentProps) {
  const { t } = useI18n();
  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = posts.filter((p) => !p.featured);

  return (
    <section className="py-20 md:py-28 bg-warm-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Post */}
        {featuredPost && (
          <AnimatedSection className="mb-16">
            <Link href={`/blog/${featuredPost.slug}`} className="block">
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-stone-light/10">
                <div className="grid lg:grid-cols-2">
                  <div className="bg-primary p-10 md:p-14 flex flex-col justify-center">
                    <span className="inline-block w-fit px-3 py-1 bg-accent/20 text-accent-light text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                      {t("blog.featured")}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white font-serif mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-white/80 leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm mb-6">
                      <span className="flex items-center gap-1.5">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-accent-light font-semibold group">
                      {t("common.readMore")}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                  <div className="min-h-[300px] lg:min-h-full relative">
                    {featuredPost.image ? (
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover absolute inset-0"
                      />
                    ) : (
                      <div className="bg-cream w-full h-full flex items-center justify-center absolute inset-0">
                        <Calendar className="w-16 h-16 text-primary/30" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </AnimatedSection>
        )}

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <AnimatedSection key={post.slug} delay={index * 0.1}>
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full border border-stone-light/10 group flex flex-col">
                  <div className="h-48 relative overflow-hidden">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="bg-cream w-full h-full flex items-center justify-center">
                        <Calendar className="w-10 h-10 text-primary/30" />
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-sage-light px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-stone-dark mb-3 font-serif group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-stone-medium text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-stone-light text-xs mb-4">
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:text-primary-dark transition-colors">
                      {t("common.readMore")}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </article>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
