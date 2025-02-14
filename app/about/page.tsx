import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-24 pt-10">
      <div className="flex flex-col w-full lg:w-1/2 gap-12">
        <h2 className="text-btn">About Agency</h2>
        <h1 className="text-5xl">
          We create digital ideas that are bigger, bolder, braver and better
        </h1>
        <p className="text-xl font-light">
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We're world's Our
          Special Team best consulting & finance solution provider, Wide range
          of web and software developpeme,t services.
        </p>
        <div className="flex flex-col gap-5 items-start justify-between sm:flex-row sm:gap-2 sm:items-center">
          <div className="flex flex-col gap-3">
            <h1 className="text-btn text-2xl font-bold">10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-btn text-2xl font-bold">234 K+</h1>
            <p>Peaople reached</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-btn text-2xl font-bold">5 K+</h1>
            <p>Services and plugins</p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 relative min-h-[500px] h-auto">
        <Image src="/about.png" alt="About Image" fill />
      </div>
    </div>
  );
};

export default AboutPage;
