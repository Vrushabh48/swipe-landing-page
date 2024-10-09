export const Section5 = () => {
    return (
      <div className="bg-[#2754ff] grid grid-cols-1 p-7 gap-6">
        <h1 className="font-outfit text-white text-3xl sm:text-4xl md:text-5xl font-medium text-center mt-4">
          Simple Billing and Payments App
        </h1>
  
        <p className="font-outfit text-white text-lg sm:text-xl text-center mt-4 px-4">
          Swipe is a free GST billing software that helps you track your sales, purchases & estimates in real-time. With Swipe, you can easily manage your inventory, file GST returns, and create & share professional invoices.
        </p>
        <div className="flex justify-center mt-4">
          <button
            type="button"
            className="w-fit font-outfit text-black bg-white hover:bg-slate-200 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-white dark:hover:bg-white focus:outline-none dark:focus:ring-white"
          >
            Sign Up For Free
          </button>
        </div>
      </div>
    );
  };
  