"use client";

import Image from "next/image";
import bebekku from "./images/bebekku.jpg";
import AOS from "aos";
import { useEffect } from "react";
import Header from "./components/Header";
import { Accessibility } from "lucide-react";
import Link from "next/link";
import Login from "./components/LoginCard";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);
  return (
    <>
      <Header />
      <div className="flex flex-col relative font-[family-name:var(--font-geist-sans)]">
        <section className="relative flex justify-between max-md:flex-col max-md:gap-12 max-md:min-h-[1000px] min-h-screen bg-dark pt-20">
          <Image
            src={bebekku}
            alt="Cargo Truck"
            layout="fill"
            objectFit="cover"
            className="brightness-75"
          />
          <div className="flex justify-between absolute inset-0 max-md:flex-col bg-black bg-opacity-50">
            <div className=" max-md:w-full max-md:mt-44 px-20 max-md:items-center max-md:px-5 max-md:gap-5 flex flex-col items-start justify-center  max-md:justify-center text-center">
              <h2
                data-aos="fade-down"
                className="text-5xl max-w-3xl max-md:text-3xl max-md:max-w-lg text-start text-white font-bold"
              >
                Platform Try Out Online Terlengkap dan Terpercaya di Indonesia.
                Bantu siswa dan guru mencari soal-soal latihan yang sesuai
                dengan kebutuhan mereka.
              </h2>
              <Link
                href="test"
                data-aos="fade-down"
                className="mt-6 px-10 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 transition duration-300"
              >
                <div className="flex gap-3 items-center">
                <Accessibility className="size-10"/>
                <p className="text-lg tracking-tight font-[800]">
                Get Started
                </p>
                </div>
              </Link>
            </div>
            <div className="md:hidden mb-10 flex justify-center items-center mt-10">
              <Login/>
            </div>
            <div className="w-[40%] max-md:hidden max-md:mt-0 flex justify-center items-center">
              <Login />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}


