import Link from "next/link";
import { CardType } from "../api/Cards/route";

export default function Card (card : CardType) {

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-start items-center overflow-hidden">
  <div className="w-full h-60">
    <img 
      className="w-full h-full object-cover object-center" 
      src={card.image_url ?? `https://picsum.photos/id/1/200/300`} 
      alt="image" 
    />
  </div>
  <div className="p-5">
    <div >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {card.title}
      </h5>
    </div>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      {card.descriptions}
    </p>
    <Link
      href={card.button_lock ? "#" : (card.url_link ?? "")}
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
    >
       {card.button_lock ? "Not Available" : "Try Out Now" }
      <svg
        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
    </Link>
  </div>
</div>

    )
}