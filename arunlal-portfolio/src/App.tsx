import Header from "./components/Header";

function App() {
  return (
    <div className="bg-black">
      <div className="border-b border-gray-30 dark:border-gray-500">
        <div className="mx-auto grid h-2 max-w-[90rem] grid-cols-12 px-2 xs:h-8 xs:px-6 sm:px-10 xl:h-12 xl:px-10">
          <div className="col-span-10 border-x border-gray-30 border-gray-500 md:col-span-4"></div>
          <div className="col-span-2 border-r border-gray-30 border-gray-500 min-[896px]:col-span-3"></div>
          <div className="col-span-1 hidden border-r border-gray-30 border-gray-500 lg:block"></div>
          <div className="col-span-6 hidden border-r border-gray-30 border-gray-500 md:block min-[896px]:col-span-5 lg:col-span-4"></div>
        </div>
      </div>
      <Header />
    </div>
  );
}

export default App;
