"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/images/logo/logoFooter.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { usePathname } from "next/navigation";
import { IoMdArrowDropright } from "react-icons/io";

const navLinks = [
  {
    source: "/home",
    name: "itthon",
  },
  {
    source: "/aboutus",
    name: "Rólunk",
  },
  {
    source: "/events",
    name: "Események",
  },
  {
    source: "/press",
    name: "Sajto",
  },
  {
    source: "/contactus",
    name: "Kontakt",
  },
  {
    source: "/venue",
    name: "Helyszin",
  },
];

export const Navbar = () => {
  const pathname = usePathname();

  const [display, setDisplay] = useState(false);

  function handleNav() {
    setDisplay(() => !display);
  }

  return (
    <>
      <nav className="w-full px-6 h-20 bg-[--accent] sticky top-0 shadow-lg shadow-[#000]/20 z-50">
        <div className="hidden lg:flex items-center justify-between">
          <Link href="/home">
            <Image
              className="h-20 w-32 mr-14 md:mr-8"
              priority={true}
              src={logo}
              alt="logo"
            ></Image>
          </Link>
          <ul className="flex items-center font-medium gap-14 mr-8 text-sm">
            {navLinks.map((link, i) => {
              const isActive = pathname.startsWith(link.source);

              return (
                <li key={i} className="navlink">
                  <Link
                    href={link.source}
                    className={`text-[--nav-text]  ${isActive ? "active" : ""}`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-6">
            <Link href="/aboutus-en">
              <button className="button flex items-center">
                English{" "}
                <span className="text-xl">
                  <IoMdArrowDropright />
                </span>
              </button>
            </Link>
            <Link href="/contactus">
              <button className="button">Kontakt</button>
            </Link>
          </div>
        </div>
        {/* Mobile view */}
        <div className="flex lg:hidden items-center justify-center">
          <Image
            className="h-20 w-32"
            priority={true}
            src={logo}
            alt="logo"
          ></Image>
        </div>
        <div
          className={`flex lg:hidden absolute top-7 right-8`}
          onClick={handleNav}
        >
          {display ? (
            <div className=" text-2xl">
              <RxCross2 />
            </div>
          ) : (
            <div className=" text-2xl">
              <RxHamburgerMenu />
            </div>
          )}
        </div>
      </nav>
      <nav
        className={`pt-32 pl-10 flex lg:hidden items-start justify-center w-1/2 h-full bg-[--accent] shadow-lg shadow-[#000]/20 gap-10 top-0 right-0 fixed z-40 transition-all duration-300 ease-in-out ${
          display ? "translate-x-0" : " translate-x-[500px]"
        }`}
      >
        <ul className="flex flex-col items-center font-medium justify-center gap-10 mr-8 text-sm">
          {navLinks.map((link, i) => {
            const isActive = pathname.startsWith(link.source);

            return (
              <li key={i} className="navlink flex text-center">
                <Link
                  href={link.source}
                  className={`text-[--nav-text]  ${isActive ? "active" : ""}`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
          <Link href="/aboutus-en">
            <button className="button flex items-center">
              English{" "}
              <span className="text-xl">
                <IoMdArrowDropright />
              </span>
            </button>
          </Link>
        </ul>
      </nav>
    </>
  );
};
