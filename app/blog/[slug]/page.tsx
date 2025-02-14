import Image from "next/image";
import style from "./page.module.css";
const SinglePostPage = () => {
  return (
    <div className="flex gap-12">
      <div className="w-full relative h-[calc(100vh-200px)] hidden md:block">
        <Image
          src="/tag1.jpg"
          alt="Single post image"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-2 flex flex-col gap-5">
        <h1 className="text-6xl">Title</h1>
        <div className="flex flex-row gap-4 items-center">
          <Image
            src="/manager.jpg"
            alt=""
            width={50}
            height={50}
            className={`${style.rounded}`}
          />

          <div className="flex flex-col  gap-2">
            <span className="text-gray-700 font-bold">Author</span>
            <span className="font-medium">Manager Dayif</span>
          </div>
          <div className="flex flex-col  gap-2">
            <span className="text-gray-700 font-bold">Published</span>
            <span className="font-medium">19/12/2024</span>
          </div>
        </div>
        <div className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cum
          recusandae, error reiciendis itaque amet iste est sint doloribus ab
          tenetur labore assumenda. Beatae, dolorem! Iure ipsum omnis deleniti
          consequatur.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
