"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Header from "../components/Header";
import poto from "../images/logo-go.png";

const team = [
  {
    name: "Deko Rahma Putra",
    role: "Legal",
    ig: "decorahma",
    quote: "Keadilan adalah dasar dari semua kebijaksanaan.",
  },
  {
    name: "Fitra Melania Rais",
    role: "Web Developer",
    ig: "fitramela",
    linkedin: "fitramelaniarais",
    quote: "Kode adalah seni, dan saya adalah senimannya.",
  },
  {
    name: "Ghina Muharani Y",
    role: "Brand Ambassador",
    ig: "ghinnayahaya",
    quote: "Merek bukan hanya nama, tetapi cerita yang kita ciptakan.",
  },
];

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
        className="min-h-screen bg-[#161616] text-white flex items-center justify-center p-10"
      >
        <main className="max-w-5xl mx-auto mt-10">
          <motion.h1
            variants={variants}
            className="text-5xl font-extrabold text-center text-orange-500 mb-10"
          >
            Meet Our Team
          </motion.h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={variants}
                className={`bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center ${
                  index === 1 ? "relative -top-5" : ""
                }`}
              >
                <Image
                  className="rounded-full border-4 border-orange-500"
                  src={poto}
                  alt={`Foto ${member.name}`}
                  width={120}
                  height={120}
                />
                <h2 className="font-bold text-xl text-black mt-4">
                  {member.name}
                </h2>
                <p className="text-sm text-gray-600">{member.role}</p>
                <p className="italic text-gray-800 mt-2">"{member.quote}"</p>
                <div className="flex space-x-4 mt-4">
                  {member.ig && (
                    <a
                      href={`https://instagram.com/${member.ig}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-500 hover:text-orange-700 text-2xl"
                    >
                      <FaInstagram />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={`https://linkedin.com/in/${member.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-2xl"
                    >
                      <FaLinkedin />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </main>
      </motion.div>
    </>
  );
};

export default About;
