import Image from "next/image";

const features = [
  {
    title: "Online member management",
    description:
      "So that you always have an overview of the members and the member data is up to date.",
    icon: "/icon-user1.png",
  },
  {
    title: "Automated accounting",
    description:
      "So that you have correctly managed accounting and can present a clean invoice.",
    icon: "/icon-user2.png",
  },
  {
    title: "Alles auf einen Blick",
    description:
      "You can give the entire board access to the association’s data. And distribute rights so that everyone has the access they need. No more, no less.",
    icon: "/icon-user1.png",
  },
  {
    title: "Online member management",
    description:
      "So that you always have an overview of the members and the member data is up to date.",
    icon: "/icon-user1.png",
  },
  {
    title: "Automated accounting",
    description:
      "So that you have correctly managed accounting and can present a clean invoice.",
    icon: "/icon-user2.png",
  },
  {
    title: "Alles auf einen Blick",
    description:
      "You can give the entire board access to the association’s data. And distribute rights so that everyone has the access they need. No more, no less.",
    icon: "/icon-user2.png",
  },
  {
    title: "Online member management",
    description:
      "So that you always have an overview of the members and the member data is up to date.",
    icon: "/icon-user1.png",
  },
  {
    title: "Automated accounting",
    description:
      "So that you have correctly managed accounting and can present a clean invoice.",
    icon: "/icon-user2.png",
  },
  {
    title: "Alles auf einen Blick",
    description:
      "You can give the entire board access to the association’s data. And distribute rights so that everyone has the access they need. No more, no less.",
    icon: "/icon-user1.png",
  },
];

const PricingSection2 = () => {
  return (
    <section className="max-w-[1350px] mx-auto px-4 mb-[180px]">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-[36px] md:text-[48px] font-bold text-[#0F172A]">
          Your Added Value
        </h2>
        <p className="text-[#333] mt-2 text-[20px]">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 lg:px-[60px] lg:py-[60px] rounded-[15px] shadow-[0_0_4px_0_rgba(0,0,0,0.25)] flex flex-col items-center text-center"
          >
            <Image src={item.icon} alt={item.title} width={84} height={84} />
            <h3 className="mt-4 text-[#6D011C] font-semibold text-[24px] leading-[22px]">
              {item.title}
            </h3>
            <p className="mt-4 text-[#6B7280] text-[16px] leading-[20px] max-w-[240px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection2;
