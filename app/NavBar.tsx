"use client";
import Link from "next/link";
import React from "react";
import { PiBugFill } from "react-icons/pi";
import { PiBugBeetleFill } from "react-icons/pi";
import { usePathname } from "next/navigation";
import classnames from "classnames";

const NavBar = () => {
  const pathname = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b bm-5 px-5 h-14 items-center">
      <Link href="/">
        <PiBugBeetleFill />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className={classnames({
              "text-blue-900": link.href === pathname,
              "text-gray-500": link.href !== pathname,
              "hover:text-gray-800 transition-colors": true,
            })}
            href={link.href}
          >
            {" "}
            {link.label}{" "}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
