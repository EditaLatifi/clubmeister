import Image from "next/image";

const CategoryCard = ({ image, label, width, height }) => {
  return (
    <div
      className="relative overflow-hidden  cursor-pointer group"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <Image
        src={image}
        alt={label}
        layout="fill"
        objectFit="cover"
        className="group-hover:scale-105 transition-transform duration-300"
      />
            <div className="absolute inset-0 bg-[#480012]/30 transition-opacity group-hover:bg-[#480012]/40" />

      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-white text-[40px] lg:text-[52px] font-[700] text-center px-2">
          {label}
        </h3>
      </div>
    </div>
  );
};

export default CategoryCard;
