import PageHeader from "@/components/page-header";
import { getAllPosts } from "@/lib/posts";
import BlogContent from "./blog-content";

export const metadata = {
  title: "Blog & News",
  description:
    "Latest news, stories, and updates from ALMI Ethiopia's work in sustainable agriculture and community development.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHeader
        title="Blog & News"
        subtitle="Stories, updates, and insights from our work on the ground in Ethiopia."
      />
      <BlogContent posts={posts} />
    </>
  );
}
