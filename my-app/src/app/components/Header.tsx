"use client"
import Image from "next/image";
import Link from "next/link";
import ChatWhatApp from "../lib/ChatWhatApp";

export default function Header() {
  return (
    <nav className="fixed lg:w-full bg-black border-gray-200 shadow-md z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/images/logo.webp"
            className="h-8"
            alt="GoTO-0.2 Logo"
            width={20}
            height={20}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-orange-500">
            GoTO-0.2
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <ChatWhatApp
            phone="+6285219832085"
            message="Hi,, saya mau join TO nya dong"
          >
            <button
              type="button"
              className="text-black bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              Get Our WhatApp
            </button>
          </ChatWhatApp>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
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
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-black dark:border-gray-700">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 md:p-0 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="about"
                className="block py-2 px-3 md:p-0 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="services"
                className="block py-2 px-3 md:p-0 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="contact"
                className="block py-2 px-3 md:p-0 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
