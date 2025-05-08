"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import footerlogo from "@/public/assets/images/logo/logoFooter.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import rsd from "@/public/assets/images/logo/RSD tech.png";

export const Footer = () => {
  const [currentYear, setCurrentYear] = useState(0);

  useEffect(function () {
    var data = new Date().getFullYear();
    setCurrentYear(data);
  }, []);

  return (
    <div className="mt-[-2rem] h-40 w-full">
      <div className="flex flex-col items-center justify-center lg:px-32 px-4">
        {/* Pc view */}
        <div className="lg:flex hidden items-center w-full justify-around">
          <Image
            className=" h-24 w-44 backdrop-blur-md"
            src={footerlogo}
            alt="footerlogo"
          ></Image>

          <div className="flex flex-col backdrop-blur-md gap-6">
            <div className="text-[#110c1b] text-base font-bold flex text-center items-center justify-center">
              Linkek
            </div>
            <div className="flex gap-10 items-center">
              <div className="flex font-medium text-sm flex-col gap-2">
                <Link href="/home">itthon</Link>
                <Link href="/aboutus">Rólunk</Link>
              </div>
              <div className="flex font-medium text-sm gap-2 flex-col">
                <Link href="/events">Események</Link>
                <Link href="/press">Sajto</Link>
              </div>
              <div className="flex font-medium text-sm gap-2  flex-col">
                <Link href="/contactus">Kontak</Link>
                <Link href="/venue">Helyszin</Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <Link href="/contactus">
              <button className="button-1">Kontakt</button>
            </Link>
            <div className="flex items-center gap-8 backdrop-blur-md text-2xl text-[--primary]">
              <Link
                href="https://www.facebook.com/oregtolgykastelyfogado/"
                target="_blank"
              >
                <FaFacebookSquare />
              </Link>
              <Link
                href="https://www.instagram.com/oregtolgyfogado/?hl=hu"
                target="_blank"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://www.tiktok.com/@oregtolgykastelyfogado"
                target="_blank"
              >
                <FaTiktok />
              </Link>
            </div>
          </div>
        </div>
        {/* Mobile view */}
        <div className="flex lg:hidden items-center w-full justify-around gap-6">
          <div className="flex flex-col items-center justify-center gap-6">
            <Image
              className=" h-24 w-44 backdrop-blur-md"
              src={footerlogo}
              alt="footerlogo"
            ></Image>
            <div className="flex flex-col items-center justify-center gap-4">
              <Link href="/contactus">
                <button className="button">Kontakt</button>
              </Link>
              <div className="flex items-center gap-8 backdrop-blur-md text-2xl text-[--primary]">
                <Link
                  href="https://www.facebook.com/oregtolgykastelyfogado/"
                  target="_blank"
                >
                  <FaFacebookSquare />
                </Link>
                <Link
                  href="https://www.instagram.com/oregtolgyfogado/?hl=hu"
                  target="_blank"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href="https://www.tiktok.com/@oregtolgykastelyfogado"
                  target="_blank"
                >
                  <FaTiktok />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="flex flex-col backdrop-blur-md gap-6">
              <div className="text-[#110c1b] text-base font-bold flex text-center items-center justify-center pr-8">
                Linkek
              </div>
              <div className="flex gap-10 items-center">
                <div className="flex font-medium text-sm flex-col gap-2">
                  <Link href="/home">itthon</Link>
                  <Link href="/aboutus">Rólunk</Link>
                  <Link href="/events">Események</Link>
                </div>

                <div className="flex font-medium text-sm gap-2  flex-col">
                  <Link href="/press">Sajto</Link>
                  <Link href="/contactus">Kontakt</Link>
                  <Link href="/venue">Helyszin</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" my-4 w-3/4 bg-[burlywood] h-[1.5px] backdrop-blur-md"></div>

        <div className="flex lg:hidden w-full flex-col gap-1 items-center backdrop-blur-md">
          <p className="flex items-center text-xs lg:text-sm font-bold">
            <span>Copyright©️ szerző ÖregTölgy</span>
            <span className="mr-1 ml-1">{currentYear}</span>.
          </p>
          <p className="flex items-center text-xs lg:text-sm font-bold">
            Által kifejlesztett{" "}
            <a href="https://rsdtech.rsdgroup.hu/" className="ml-1">
              <Image
                className=" h-6 w-20"
                src={rsd}
                alt="rsd tech logo"
              ></Image>
            </a>{" "}
            .
          </p>
        </div>
        <div className="w-full hidden lg:flex items-center justify-center">
          <p className="flex items-center text-center text-xs lg:text-sm font-bold backdrop-blur-md">
            Copyright©️ szerző ÖregTölgy{" "}
            <span className="mr-1 ml-1">{currentYear}</span>. Által
            kifejlesztett{" "}
            <a href="https://rsdtech.rsdgroup.hu/" className="ml-1">
              <Image
                className=" h-6 w-20"
                src={rsd}
                alt="rsd tech logo"
              ></Image>
            </a>{" "}
            .
          </p>
        </div>
      </div>
    </div>
  );
};
