"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "../components/Header";
import poto from "../images/logo-go.png"

const About = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
    <Header />
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className="min-h-screen bg-[#161616] text-white flex items-center justify-center"
    >
      <main className="max-w-5xl mx-auto p-10">
        <motion.h1
          variants={variants}
          className="text-5xl font-bold mb-10"
        >
          About Us
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <motion.div
            variants={variants}
            className="bg-white p-10 flex flex-col items-center"
          >
            <Image
              className="rounded-full"
              src={poto}
              alt="Foto Pendiri 1"
              width={100}
              height={100}
            />
            <div className="mt-5">
              <h2 className="font-bold">Pendiri 1</h2>
              <p className="text-sm font-cursive">"Belajar itu asik"</p>
            </div>
          </motion.div>
          <motion.div
            variants={variants}
            className="bg-white p-10 flex flex-col items-center"
          >
            <Image
              className="rounded-full"
              src={poto}
              alt="Foto Pendiri 2"
              width={100}
              height={100}
            />
            <div className="mt-5">
              <h2 className="font-bold">Pendiri 2</h2>
              <p className="text-sm font-cursive">"Kami berjuang untukmu"</p>
            </div>
          </motion.div>
          <motion.div
            variants={variants}
            className="bg-white p-10 flex flex-col items-center"
          >
            <Image
              className="rounded-full"
              src={poto}
              alt="Foto Pendiri 3"
              width={100}
              height={100}
            />
            <div className="mt-5">
              <h2 className="font-bold">Pendiri 3</h2>
              <p className="text-sm font-cursive">"Kami percaya dirimu"</p>
            </div>
          </motion.div>
        </div>
      </main>
    </motion.div>
      </>
  );
};

export default About;
