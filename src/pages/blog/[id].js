import { useRouter } from "next/router";
import { blogPosts } from "@/data/blogs";
import { FiClock, FiLink, FiExternalLink } from "react-icons/fi";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const BlogDetailPage = () => {
  const { query } = useRouter();
  const [copied, setCopied] = useState(false);
  const [page, setPage] = useState(1);
  const totalPages = 10;

  const post = blogPosts.find((b) => b.id === query.id);
  const copyURL = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const paginatedRelated = blogPosts
    .filter((b) => b.id !== query.id)
    .slice((page - 1) * 3, page * 3);

  const pageNumbers = (() => {
    const pages = [];
    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (page <= 3) {
        pages.push(1, 2, 3, "...", totalPages - 1, totalPages);
      } else if (page >= totalPages - 2) {
        pages.push(1, 2, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", page - 1, page, page + 1, "...", totalPages);
      }
    }
    return pages;
  })();

  if (!post) return <div className="text-center py-10">Blog not found.</div>;

  return (
    <Layout>
      <section className="max-w-[1216px] mx-auto px-4 py-12 space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <p className="text-[14px] text-[#B42318] flex justify-center items-center gap-2 font-semibold">
            <FiClock size={14} /> 4 Min Reading Time
          </p>
          <h1 className="text-[52px] font-bold text-[#101828] leading-tight font-montserrat">
            {post.title}
          </h1>
          <p className="text-[20px] text-[#475467]">{post.description}</p>
          <div className="flex justify-center gap-2 flex-wrap">
            {post.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-[#FEE4E2] text-[#B42318] text-[14px] px-3 py-1 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Top Image */}
        <Image
          src={post.image}
          alt={post.title}
          width={1216}
          height={640}
          className="rounded-xl mx-auto"
        />

        {/* Content */}
        <article className="max-w-[720px] mx-auto space-y-10 text-[#475467] text-[18px] leading-[28px]">
        {post.content && post.content.length > 0 && post.content.map((block, i) => (
            <div key={i} className="space-y-5">
              {block.heading && block.heading !== "Conclusion" && (
                <h2 className="text-[30px] font-semibold text-[#101828]">
                  {block.heading}
                </h2>
              )}

              {block.text && block.heading !== "Conclusion" && <p>{block.text}</p>}

              {block.image && (
                <div className="space-y-2">
                  <Image
                    src={block.image}
                    alt="block"
                    width={720}
                    height={480}
                    className="rounded-lg"
                  />
                  <p className="text-xs text-[#98A2B3] italic">📎 {block.caption}</p>
                </div>
              )}

              {block.quote && (
                <blockquote className="border-l-[4px] border-[#6941C6] bg-white px-6 py-4 text-[#101828] text-[24px] font-medium italic">
                  “{block.quote.text}”
                  <p className="text-[16px] font-[400] not-italic text-[#475467] mt-2">
                    — {block.quote.author}
                  </p>
                </blockquote>
              )}

              {block.list && (
                <ul className="list-decimal pl-5 space-y-2">
                  {block.list.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )}

              {block.heading === "Conclusion" && (
                <div className="bg-[#F9FAFB] p-8 rounded-xl text-left space-y-4">
                  <h2 className="text-[30px] font-semibold text-[#101828]">Conclusion</h2>
                  <p className="text-[16px] leading-7 text-[#475467]">{block.text}</p>
                </div>
              )}

              {block.authorName && (
                <div className="pt-6 border-t-[1px] border-[#EAECF0]">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4">
                    <div className="flex items-center gap-3">
                      <Image
                        src={block.authorImg}
                        width={56}
                        height={56}
                        alt="Author"
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-semibold text-[#101828]">{block.authorName}</p>
                        <p className="text-sm text-[#98A2B3]">{block.role}</p>
                      </div>
                    </div>
                    <div className="sm:ml-auto flex items-center gap-3">
                      <button
                        onClick={copyURL}
                        className="flex items-center text-sm border px-3 py-1.5 rounded-lg border-[#D0D5DD] text-[#344054] hover:bg-[#F9FAFB]"
                      >
                        <FiLink className="mr-1" />
                        {copied ? "Copied!" : "Copy link"}
                      </button>
                      <FaTwitter className="w-4 h-4 text-[#475467] hover:text-black cursor-pointer" />
                      <FaFacebookF className="w-4 h-4 text-[#475467] hover:text-black cursor-pointer" />
                      <FaLinkedinIn className="w-4 h-4 text-[#475467] hover:text-black cursor-pointer" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </article>
      </section>

      {/* Related Articles */}
      <section className="max-w-[1300px] mb-[100px] mx-auto px-4 mt-[180px]">
        <p className="text-[#6D011C] text-[24px] font-medium text-center mb-1">Blogs</p>
        <h2 className="text-[52px] font-bold text-center mb-6">Related Articles</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {paginatedRelated.map((related) => (
            <Link key={related.id} href={`/blog/${related.id}`}>
              <div className="group cursor-pointer space-y-2">
                <Image
                  src={related.image}
                  alt={related.title}
                  width={400}
                  height={240}
                  className="w-full  h-[240px] object-cover rounded-md"
                />
                <div className="flex items-center text-[14px] text-[#6D011C] font-[600] gap-2 mt-3">
                  <FiClock size={16} />
                  4 Min Reading Time
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="text-[#101828] font-semibold text-[24px] leading-[34px]">
                    {related.title}
                  </h3>
                  <FiExternalLink className="text-[#101828]" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {related.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#F6E9E1] text-[#B42318] text-[14px] font-medium px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Pagination */}
      <section className="max-w-[1300px] mx-auto px-4 pt-10 pb-32">
  <div className="flex flex-wrap justify-center sm:justify-between items-center gap-4 text-[14px] text-[#475467]">
    
    {/* ← Previous */}
    <button
      onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
      disabled={page === 1}
      className="flex items-center gap-2 font-[600] disabled:opacity-50 whitespace-nowrap"
    >
      <Image src="/arrow-left.svg" alt="Previous" width={16} height={16} />
      Previous
    </button>

    {/* Page Numbers */}
    <div className="flex flex-wrap justify-center gap-2">
      {pageNumbers.map((n, i) => (
        <button
          key={i}
          onClick={() => typeof n === "number" && setPage(n)}
          disabled={n === "..."}
          className={`w-8 h-8 text-sm rounded-full font-[500] flex items-center justify-center transition ${
            n === page
              ? "bg-[#F9FAFB] text-[#1D2939]"
              : "text-[#475467] hover:bg-[#F2F4F7]"
          }`}
        >
          {n}
        </button>
      ))}
    </div>

    {/* Next → */}
    <button
      onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
      disabled={page === totalPages}
      className="flex items-center gap-2 font-[600] disabled:opacity-50 whitespace-nowrap"
    >
      Next
      <Image
        src="/arrow-left.svg"
        alt="Next"
        width={16}
        height={16}
        className="rotate-180"
      />
    </button>
  </div>
</section>

    </Layout>
  );
};

export default BlogDetailPage;
