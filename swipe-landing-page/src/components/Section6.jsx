export const Section6 = ({ src, h1, para, btn }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 items-center m-5 mx-4 md:mx-28">
        <div className="p-4">
          <h1 className="font-outfit text-2xl md:text-3xl font-medium m-4">{h1}</h1>
          <p className="font-medium text-gray-600 m-4 p-2">{para}</p>
          <button
            type="button"
            className="m-4 font-outfit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            {btn}
          </button>
        </div>
  
        <div className="flex justify-center">
          <img className="w-full md:w-3/4 p-4" src={src} alt="" />
        </div>
      </div>
    );
  };
  