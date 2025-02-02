export default function Skeleton() {
    return (
        <div className="animate-pulse space-y-6 m-10">
            {/* Header Skeleton */}
            <div role="status" className="animate-pulse text-center">
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
                <div className="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
                <div className="flex items-center justify-center mt-4 space-x-4">
                    <svg className="w-8 h-8 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                    </svg>
                    <div className="w-20 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    <div className="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                <span className="sr-only">Loading...</span>
            </div>

            {/* Content Skeleton */}
            <div role="status" className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 items-center">
                <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded-sm sm:w-96 dark:bg-gray-700">
                    <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                    </svg>
                </div>
                <div className="w-full space-y-2">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px]"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px]"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px]"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                </div>
                <span className="sr-only">Loading...</span>
            </div>

            {/* List Skeleton */}
            <div role="status" className="space-y-2.5 animate-pulse max-w-lg mx-auto">
                {Array(6).fill(null).map((_, i) => (
                    <div key={i} className="flex items-center space-x-2">
                        <div className={`h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-${Math.random() * 32 + 24}`}></div>
                        <div className={`h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-${Math.random() * 24 + 16}`}></div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 flex-1"></div>
                    </div>
                ))}
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}
