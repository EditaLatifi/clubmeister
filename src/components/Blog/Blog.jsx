import BlogCard from "./BlogCard";
import CategoryCard from "./CategoryCard";
import Image from "next/image";

const Blog = ({ posts }) => {
  return (
    <div className="space-y-[80px]">
      {/* Header */}
      <section className="w-full text-center px-4 py-12 flex flex-col items-center gap-6">
  {/* Heading */}
  <p className="text-[#6D011C] text-[24px] font-poppins font-medium leading-[36px]">
    Club Knowledge
  </p>

  {/* Title */}
  <h1 className="text-[40px] lg:text-[52px] font-montserrat font-bold leading-[100%] text-[#0F172A]">
    Clubmister’s– <span className="text-[#6D011C]">Club World</span>
  </h1>

  {/* Subtitle */}
  <p className="text-[20px] lg:text-[24px] font-poppins text-[#475467] leading-[150%] max-w-[940px]">
    In our blog, we've compiled a wealth of exciting tips, clever strategies, and valuable information for clubs. Here you'll find exciting articles for your everyday club life.
  </p>

  {/* Input and Button Wrapper */}
  <div className="flex flex-col lg:flex-row items-center justify-center gap-[16px] mt-4">
    {/* Input */}
    <input
      type="email"
      placeholder="Enter your email"
      className="w-[300px] lg:w-[479px] h-[59px] px-[20px] py-[20px] border border-[#D0D5DD] rounded-[8px] text-[16px] font-inter text-[#000] placeholder:text-[#667085] leading-[24px]"
    />

    {/* Button */}
    <button
      className="w-[199px] h-[60px] px-[6.25px] py-[3.13px] rounded-[7.5px] bg-[#6D011C] text-white text-[16px] font-inter leading-[24px]"
    >
      Get Started →
    </button>
  </div>
{/* Privacy Text */}
<div className="w-full max-w-[690px] text-center lg:text-left mt-[-12px]">
  <p className="text-[14px] text-[#475467] font-inter leading-[20px]">
    We care about your data in our{" "}
    <a href="/privacy-policy" className="underline">
      privacy policy
    </a>.
  </p>
</div>

</section>



<section className="max-w-[1300px] mx-auto px-4 space-y-10 mt-[180px]">
  {/* Header */}
  <div className="text-center space-y-2">
    <p className="text-[#6D011C] text-[24px] font-poppins font-medium leading-[36px]">Blogs</p>
    <h2 className="text-[40px] lg:text-[52px] font-montserrat font-bold leading-[120%] text-[#0F172A]">
      Want to Know More about <span className="text-[#6D011C]"><br></br>ClubMeister</span>?
    </h2>
  </div>

  {/* Custom Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-[32px] mt-12">
    {/* Top Two (1 normal, 1 large) */}
    <div className="sm:col-span-1">
      <BlogCard post={posts[0]} />
    </div>
    <div className="sm:col-span-2">
      <BlogCard post={posts[1]} isLarge />
    </div>

    {/* Bottom Three */}
    {posts.slice(2, 5).map((post) => (
      <div key={post.id} className="sm:col-span-1">
        <BlogCard post={post} />
      </div>
    ))}
  </div>

  <div className="flex flex-wrap justify-center sm:justify-between items-center pt-10 gap-4 text-[14px] text-[#475467]">
  {/* ← Previous */}
  <button className="flex items-center gap-2 font-[600] whitespace-nowrap">
    <Image
      src="/arrow-left.svg"
      alt="Previous"
      width={16}
      height={16}
    />
    Previous
  </button>

  {/* Page Numbers */}
  <div className="flex flex-wrap justify-center gap-2">
    {[1, 2, 3, "...", 9, 10].map((n, i) => (
      <button
        key={i}
        className={`w-8 h-8 text-sm rounded-full font-[500] ${
          n === 1 ? "bg-[#F9FAFB] text-[#1D2939]" : "text-[#475467] hover:bg-[#F2F4F7] transition"
        }`}
      >
        {n}
      </button>
    ))}
  </div>

  {/* Next → */}
  <button className="flex items-center gap-2 font-[600] whitespace-nowrap">
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



<section className="text-center space-y-6 pt-[180px]">
  <p className="text-[#6D011C] text-[24px] font-poppins font-medium leading-[36px]">Blogs</p>
  <h2 className="text-[35px] lg:text-[52px] font-montserrat font-bold leading-[100%] text-[#0F172A]">
    Individuelle Dienstleistungen <br className="hidden md:block" /> für Ihren Verein
  </h2>

  <div className="mx-auto mt-10 space-y-5 max-w-[1300px] lg:block hidden ">
    {/* Row 1 */}
    <div className="flex flex-wrap justify-center gap-5">
      <CategoryCard image="/category1.jpg" label="Club Histories" width={510} height={402} />
      <CategoryCard image="/category2.png" label="Finance" width={330} height={402} />
      <CategoryCard image="/category3.jpg" label="Organization" width={420} height={402} />
    </div>

    {/* Row 2 */}
    <div className="flex flex-wrap justify-center gap-5">
      <CategoryCard image="/category4.jpg" label="Digitalization" width={330} height={402} />
      <CategoryCard image="/category5.jpg" label="Communication" width={510} height={402} />
      <CategoryCard image="/category6.jpg" label="Legal" width={420} height={402} />
    </div>
  </div>


  <div className="mx-auto mt-10 space-y-5 max-w-[1300px] lg:hidden block">
    {/* Row 1 */}
    <div className="flex flex-wrap justify-center gap-5">
      <CategoryCard image="/category1.jpg" label="Club Histories" width={320} height={202} />
      <CategoryCard image="/category2.png" label="Finance" width={320} height={202} />
      <CategoryCard image="/category3.jpg" label="Organization" width={320} height={202} />
    </div>

    {/* Row 2 */}
    <div className="flex flex-wrap justify-center gap-5">
      <CategoryCard image="/category4.jpg" label="Digitalization" width={320} height={202} />
      <CategoryCard image="/category5.jpg" label="Communication" width={320} height={202} />
      <CategoryCard image="/category6.jpg" label="Legal" width={320} height={202} />
    </div>
  </div>
  
</section>

    </div>
  );
};

export default Blog;
