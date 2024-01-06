import React from "react";

export default function Header() {
  return (
    <header className="border-b border-gray-30 dark:border-gray-500 bg-black">
      <div className="mx-auto grid max-w-[90rem] grid-cols-12 px-2 xs:px-6 sm:px-10">
        <div className="col-span-10 border-x border-gray-30 p-10 dark:border-gray-500 md:col-span-4">
          <div className="relative w-fit">
            <div className="text-9xl font-bold text-white absolute right-0 top-3 left-0 -translate-y-14 translate-x-[8rem] tracking-wider">
              Arunlal
            </div>
            <div className="bg-green-700 p-2 rounded-full">
              <span className="inline-block">Good afternoon!</span>
              <svg
                viewBox="0 0 22 18"
                fill="none"
                className="absolute -bottom-[9px] left-[7px] w-5 text-green-500"
              >
                <path
                  d="M20.9991 8C17.4991 12.5 13.4991 16 7.69476 17.4776C8.49908 10.5 6.99908 8 0.939453 3.39334L1.79694 0L21.1874 4.8999L20.9991 8Z"
                  fill="green"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="col-span-2 border-r border-gray-30 dark:border-gray-500 min-[896px]:col-span-3"></div>
        <div className="col-span-2 hidden border-r border-t border-gray-30 dark:border-gray-500 max-md:order-last lg:col-span-1 lg:block lg:border-t-0"></div>
        <div className="col-span-10 hidden flex-col items-end justify-end border-x border-t border-gray-30 bg-gradient-to-br from-gray-30/30 via-white to-white p-8 text-right dark:border-gray-500 dark:from-gray-800 dark:via-gray-1000 dark:to-gray-1000 md:col-span-6 md:flex md:border-l-0 md:border-t-0 min-[896px]:col-span-5 lg:col-span-4">
          <div className="mb-4 w-full border-b border-gray-30 pb-4 text-sm font-bold uppercase text-gray-1000 dark:border-gray-500 dark:text-gray-200">
            Recent favorite
          </div>
          <a
            target="_blank"
            href="https://open.spotify.com/track/0nQdTcykkSL4f8MP8qE1Fl"
            className="group flex max-w-full items-center justify-end space-x-4 leading-snug active:translate-y-[1px]"
            rel="noreferrer"
          >
            <div>
              <div className="overflow-hidden whitespace-nowrap text-lg font-medium text-gray-1000 dark:text-white">
                Colyn
              </div>
              <div className="text-gray-40 dark:text-gray-50">Wait For You</div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 z-10 rounded-full shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),inset_0_-1px_1px_0px_rgba(0,0,0,0.4)]"></div>
              <div className="absolute inset-1 z-10 rounded-full shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)]"></div>
              <div className="absolute inset-4 z-10 rounded-full bg-black/30 shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.3),inset_0_1px_1px_0px_rgba(0,0,0,0.4)]"></div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cover active:top-[1px]"></div>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}
