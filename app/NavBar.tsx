import Link from "next/link";
import React from "react";
import { PiBugFill } from "react-icons/pi";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b bm-5 px-5 h-14 items-center">
      <Link href="/">
        <PiBugFill />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className="text-gray-400 hover:text-gray-900 transition-colors"
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
