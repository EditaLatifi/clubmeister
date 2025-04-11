import Image from "next/image";
import logo from "/public/logo.png";
import img1 from "/public/img1.png";
import img2 from "/public/img2.png";
import img3 from "/public/img3.png";
import img4 from "/public/img4.png";
import img5 from "/public/img5.png";

const Hero = () => {
  return (
    <section className="mt-[80px] md:mt-[130px] max-w-[1350px] mx-auto px-4 flex flex-col md:grid md:grid-cols-2 items-center gap-12">
      {/* Left Content */}
      <div className="space-y-[16px] text-center md:text-left">
        {/* Logo */}
        <div className="flex items-center justify-center md:justify-start gap-2">
          <Image src={logo} alt="Logo" width={200} height={36} />
        </div>

        {/* Headline */}
        <h1 className="font-montserrat font-bold text-[36px] md:text-[52px] leading-tight md:leading-[63px]">
          Effortless Club <br />
          Management, <span className="text-[#6D011C]">All in One Place</span>
        </h1>

        {/* Paragraph */}
        <p className="text-[18px] md:text-[24px] font-[400] text-[#616161] leading-[150%] max-w-[550px] mx-auto md:mx-0">
          Streamline membership, finances, and documents with ClubMeister –
          the ultimate platform for managing your club with ease.
        </p>

        {/* Button */}
        <button className="bg-[#6D011C] mt-[20px] text-white font-montserrat text-[16px] px-[40px] py-[12px] rounded-md flex items-center justify-center gap-2 w-full md:w-fit hover:bg-[#500116] transition">
          Get Started →
        </button>
      </div>

      {/* Image Collage */}
      <div className="lg:block hidden relative w-full max-w-[600px] h-[350px] md:h-[500px] mx-auto">
        {/* Top Left Image */}
        <Image
          src={img1}
          alt="img1"
          width={181.68}
          height={158.27}
          className="absolute top-[80.25px] left-[121.45px] object-cover "
        />

        {/* Top Right Image */}
        <Image
          src={img2}
          alt="img2"
          width={158.2}
          height={237.3}
          className="absolute top-[1.11px] left-[319.42px] object-cover "
        />

        {/* Bottom Left Image */}
        <Image
          src={img3}
          alt="img3"
          width={189.84}
          height={189.84}
          className="absolute top-[254.24px] left-[7.8px] object-cover "
        />

        {/* Bottom Center Image */}
        <Image
          src={img4}
          alt="img4"
          width={174.99}
          height={237.41}
          className="absolute top-[254.13px] left-[215.08px] object-cover "
        />

        {/* Bottom Right Image */}
        <Image
          src={img5}
          alt="img5"
          width={189.48}
          height={177.22}
          className="absolute top-[254.13px] left-[406.83px] object-cover "
        />
      </div>

{/* Mobile/Tablet View – Clean & Consistent Grid */}
<div className="block lg:hidden grid grid-cols-2 gap-4 w-full max-w-[340px] mx-auto">
  <Image
    src={img1}
    alt="img1"
    className="w-[160px] h-[130px] object-cover"
  />
  <Image
    src={img2}
    alt="img2"
    className="w-[160px] h-[130px] object-cover "
  />
  <Image
    src={img3}
    alt="img3"
    className="w-[160px] h-[130px] object-cover "
  />
  <Image
    src={img4}
    alt="img4"
    className="w-[160px] h-[130px] object-cover "
  />
  <Image
    src={img5}
    alt="img5"
    className="w-[160px] h-[130px] object-cover  col-span-2 mx-auto"
  />
</div>



    </section>
  );
};

export default Hero;
