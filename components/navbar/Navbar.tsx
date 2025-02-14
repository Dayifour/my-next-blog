import Link from "next/link";
import Links from "./links/Links";

const Navbar = () => {
  return (
    <div className="h-[100px] flex items-center justify-between gap-4">
      <Link href="/" className="text-xl font-bold">
        Dayif
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
