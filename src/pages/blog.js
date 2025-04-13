import Blog from "@/components/Blog/Blog";
import { blogPosts } from "../data/blogs";
import Layout from "@/components/Layout/Layout";

const BlogPage = () => {
  return (
    <Layout>
    <div className="max-w-[1350px] mx-auto px-4 py-20">
      <Blog posts={blogPosts} />
    </div>
    </Layout>
  );
};

export default BlogPage;
