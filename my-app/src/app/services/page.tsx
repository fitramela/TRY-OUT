"use client"
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import { CardType } from "../api/Cards/route";

export default function Services (){
  const [card , setCard] = useState<CardType[]>([])
    useEffect(() => {
      fetchCards()
    }, [])

    const fetchCards = async () => {
      try {
        const response = await fetch("/api/Cards" , {
        })
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setCard(data)
      } catch (error) {
        console.log(error)
      }
    }
    return (<>  
    <Header/>
    <div className="bg-[#161616] text-white flex items-center justify-center"></div>
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 mt-20 gap-16 sm:p-20  font-[family-name:var(--font-geist-sans)]">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          We invest in the world’s potential
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Here at Flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
        <a
          href="#"
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-900"
        >
          Learn more
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:grid-cols" >

        {card.map((card, i) => (
          <Card key={i} {...card} />
        ))}

        </div>
    
      </div>
    </>
      
    )
}
