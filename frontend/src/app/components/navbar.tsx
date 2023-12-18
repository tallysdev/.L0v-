"use client";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="bg-gradient-to-br dark:from-gray-800 dark:to-black-700 p-6 items-center justify-between w-full flex flex-col lg:flex-row md:flex-row sm:flex-col ">
      <div className="flex items-center lg:mr-10 md:ml-10 sm:ml-0 ">
        <Link href="/">
          <span className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Icon"
              width={60}
              height={60}
              className="mr-2"
            />
            <span className="text-white text-3xl font-bold">.Lov3</span>
          </span>
        </Link>
      </div>

      <div className="flex  items-center space-x-4 lg:mr-10 md:mr-10 sm:0 ">
        <NavLink href="/" text="Home" />
        <NavLink href="/login" text="Login" />
        <NavLink href="/register" text="Register" />
        <NavLink href="/user/1" text="Profile" />
        {/* Podemos colocar mais caso necessário */}
        {/* <NavLink href="/about" text="About" />
        <NavLink href="/contact" text="Contact" /> */}
      </div>
    </nav>
  );
}
// console.log(localStorage.getItem('user'));
const NavLink = ({ href, text }: { href: string; text: string }) => (
  <Link href={href}>
    <span className="text-white font-semibold text-xl hover:text-pink-400">
      {text}
    </span>
  </Link>
);
