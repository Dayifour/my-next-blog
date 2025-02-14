import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center gap-3 pt-7">
      <div className="w-full md:w-1/2 relative h-[500px]">
        <Image
          src="/contact.png"
          alt="Contact Image"
          fill
          className="object-contain"
        />
      </div>
      <div className="w-full md:w-1/2">
        <form action="" className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Name and Surname"
            className="p-5 rounded-sm border-none outline-none bg-bgSoft text-text"
          />
          <input
            type="text"
            placeholder="Email Address"
            className="p-5 rounded-sm border-none outline-none bg-bgSoft text-text"
          />
          <input
            type="text"
            placeholder="Phone Number (Optional)"
            className="p-5 rounded-sm border-none outline-none bg-bgSoft text-text"
          />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Message"
            className="p-5 rounded-sm border-none outline-none bg-bgSoft text-text"
          ></textarea>
          <button className="p-5 bg-btn text-text font-bold border-none rounded-sm cursor-pointer">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
