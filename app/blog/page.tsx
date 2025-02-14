import PostCard from "@/components/postCard/PostCard";

const BlogPage = () => {
  return (
    <div className="flex flex-wrap items-center gap-5">
      <div className="w-full md:w-5/12 lg:w-[30%]">
        <PostCard />
      </div>
      <div className="w-full md:w-5/12 lg:w-[30%]">
        <PostCard />
      </div>
      <div className="w-full md:w-5/12 lg:w-[30%]">
        <PostCard />
      </div>
      <div className="w-full md:w-5/12 lg:w-[30%]">
        <PostCard />
      </div>
    </div>
  );
};

export default BlogPage;
