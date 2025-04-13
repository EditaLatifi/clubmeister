import { FiClock, FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ post, isLarge = false }) => {
  return (
    <Link href={`/blog/${post.id}`}>
      <div className="group cursor-pointer space-y-2">
        <div className="relative overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            width={isLarge ? 700 : 400}
            height={isLarge ? 300 : 300}
            className="w-full object-cover h-auto"
          />
        </div>

        <div className="flex items-center text-[14px] text-[#6D011C] font-[600] gap-2 mt-[16px]">
          <FiClock size={20} />
          4 Min Reading Time
        </div>

        <div className="flex justify-between items-center">
          <h3 className="text-[#101828] font-semibold text-[24px] leading-[34px]">
            {post.title}
          </h3>
          <FiExternalLink size={24} className="text-[#101828]" />
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          {post.tags?.map((tag, index) => (
            <span
              key={index}
              className="bg-[#F6E9E1] text-[#B42318] text-[14px] font-medium px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
