"use client";
import Image from "next/image";
import { useState } from "react";
import NavLink from "./navLink/NavLink";

const links = [
  {
    title: "HomePage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];
const Links = () => {
  const [open, setOpen] = useState(false);
  //TEMPORARY
  const session: boolean = true;
  const isAdmin: boolean = true;
  return (
    <div>
      <div className="md:flex items-center gap-1 hidden">
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className="p-2 cursor-pointer font-bold bg-text text-bg rounded-md">
              Logout
            </button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <Image
        src="/menu.png"
        alt="Menu humberger"
        width={30}
        height={30}
        className="flex md:hidden"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute top-[100px] right-0 w-1/2 h-[calc(100vh-100px)] flex flex-col items-center justify-center gap-2 transition-all ease-in-out bg-bg">
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
