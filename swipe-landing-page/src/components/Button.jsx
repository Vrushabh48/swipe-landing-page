export const Button = ({ title }) => {
    return (
      <button
        type="button"
        className="
          font-outfit text-white bg-blue-700 hover:bg-blue-800 
          focus:ring-4 focus:ring-blue-300 font-medium rounded-lg 
          px-4 py-2.5 text-sm 
          md:text-base md:px-6 md:py-3 
          lg:text-lg lg:px-8 lg:py-4 
          focus:outline-none focus-visible:ring-blue-300 
          dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus-visible:ring-blue-800
        "
      >
        {title}
      </button>
    );
  };
  