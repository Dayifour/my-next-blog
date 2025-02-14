import Image from "next/image";

const HomePage = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-7 pt-10">
      <div className="flex flex-col w-full lg:w-5/12 gap-5">
        <h1 className="text-5xl xl:text-8xl">Creative Thoughts Agency</h1>
        <p className="text-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea nihil
          totam at, repellendus autem quae. Quos quis minima consectetur? Error
          voluptas ex id debitis aspernatur est, molestias impedit voluptates?
          Qui!
        </p>
        <div className="flex gap-5">
          <button className="p-5 min-w-24 cursor-pointer border-none rounded-sm text-text bg-btn">
            Learn More
          </button>
          <button className="p-5 min-w-24 cursor-pointer border-none rounded-sm text-bg bg-text">
            Contact
          </button>
        </div>
        <div className="w-[500px] h-12 relative filter grayscale">
          <Image src="/brands.png" alt="" fill className="" />
        </div>
      </div>
      <div className="w-full lg:w-7/12 relative min-h-[500px]">
        <Image src="/hero.gif" alt="hero gif" fill />
      </div>
    </div>
  );
};

export default HomePage;
