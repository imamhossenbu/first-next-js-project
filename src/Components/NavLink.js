"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href ? "text-blue-600 font-semibold border-b-2 border-blue-600" : "text-black";

  return (
    <Link href={href} className={`hover:text-blue-500 ${isActive}`}>
      {children}
    </Link>
  );
};

export default NavLink;
