"use client";
import classnames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoBugOutline, IoHomeOutline } from "react-icons/io5";
import logoSrc from "../public/assets/bug.svg";
import Icon from "./components/Icon";

const Navbar = () => {
  const currentPath = usePathname();

  const links = [
    {
      icon: IoHomeOutline,
      title: "Dashboard",
      href: "/",
    },
    {
      icon: IoBugOutline,
      title: "Issues",
      href: "/issues",
    },
  ];

  return (
    <nav>
      <ul className="flex flex-col flex-grow gap-1 w-[288px] h-full fixed top-0 z-50 bottom-0 px-2 border-r bg-[#4F46E5] border-[#382a70] mb-5 ">
        <li className="flex items-center h-24">
          <Link href="/">
            <Image src={logoSrc} alt="logo" className="w-10 h-10" />
          </Link>
        </li>
        {links.map((link) => (
          <li
            key={link.title}
            className={classnames({
              "hover:text-[#FFFFFF] transition-colors": true,
              "text-[#FFFFFF] font-semibold": link.href === currentPath,
              "text-[#C7D1FE]": link.href !== currentPath,
            })}
          >
            <Link
              href={link.href}
              className={classnames({
                "bg-[#4339CA]": link.href === currentPath,
                "flex gap-3 p-2 rounded hover:bg-[#4339CA]": true,
              })}
            >
              <Icon>{link.icon}</Icon>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
