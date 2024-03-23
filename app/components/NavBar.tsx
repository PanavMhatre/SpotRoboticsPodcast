"use client";
import React from "react";
import Robot from "../assets/LogoRobot.png";
import Image from "next/image";
import Link from "next/link"; // Add this line
import { usePathname } from "next/navigation";

function NavBar() {
  const pathname = usePathname();
  return (
    <div>
      <nav className="bg-white border-gray-200  mt-5 mb-5">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <Image
                src={Robot}
                width={50}
                height={50}
                alt="Picture of the author"
              />{" "}
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                <strong>Spot Robotics Podcast</strong>
              </span>
            </div>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="items-center font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link href="/">
                  <div
                    className={`block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 ${
                      pathname === "/"
                        ? "block py-2 px-3 text-primary rounded md:bg-transparent md:text-primary md:p-0"
                        : ""
                    }`}
                  >
                    <strong>Home</strong>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <div
                    className={`block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 ${
                      pathname === "/blog"
                        ? "block py-2 px-3 text-primary rounded md:bg-transparent md:text-primary md:p-0"
                        : ""
                    }`}
                  >
                    <strong>Blog</strong>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/episodes">
                  <div
                    className={`block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 ${
                      pathname === "/episodes"
                        ? "block py-2 px-3 text-primary rounded md:bg-transparent md:text-primary md:p-0"
                        : ""
                    }`}
                  >
                    <strong>Episodes</strong>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <div
                    className={`block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 ${
                      pathname === "/contact"
                        ? "block py-2 px-3 text-primary rounded md:bg-transparent md:text-primary md:p-0"
                        : ""
                    }`}
                  >
                    <strong>Contact</strong>
                  </div>
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="text-white bg-primary focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 focus:outline-none dark:focus:ring-blue-800"
                >
                  Subscribe to the Podcast
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
