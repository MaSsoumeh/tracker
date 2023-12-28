"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoSrc from "../public/assets/bug-tracking.svg";
import { usePathname } from "next/navigation";
import classnames from "classnames";

const Navbar = () => {
  const currentPath = usePathname();

  const links = [
    {
      title: "Dashboard",
      href: "/",
    },
    {
      title: "Issues",
      href: "/issues",
    },
  ];

  return (
    <ul className="flex gap-4 border-b border-[#55203C] p-5 mb-5 items-center">
      <li className="mr-5">
        <Link href="/">
          <Image src={logoSrc} alt="logo" className="w-12 h-12" />
        </Link>
      </li>
      {links.map((link) => (
        <li
          key={link.title}
          className={classnames({
            "font-semibold hover:text-[#55203C] transition-colors": true,
            "text-[#55203C]": link.href === currentPath,
            "text-slate-500": link.href !== currentPath,
          })}
        >
          <Link href={link.href}>{link.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
