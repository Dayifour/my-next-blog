import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex">
        <div className="w-11/12 h-[400px] relative">
          <Image src="/tag1.jpg" alt="" fill className="object-cover" />
        </div>
        <span className="text-sm rotate-[270deg] m-auto">01.01.2024</span>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl w-10/12">Title</h1>
        <p className="font-bold text-gray-700 w-10/12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
          veniam, consequatur excepturi maiores omnis quasi velit ducimus atque
          totam recusandae est unde reiciendis harum ad nam vero voluptate
          voluptatum optio!
        </p>
        <Link href="/blog/post" className="underline">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
