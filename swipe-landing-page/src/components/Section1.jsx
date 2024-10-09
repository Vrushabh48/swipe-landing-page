import { Button } from "./Button.jsx";

export const Section1 = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mx-6 lg:mx-28 p-4 lg:p-2">
      <div className="mt-12 lg:mt-24 mb-12 lg:mb-24 p-5 gap-6 lg:gap-9">
        <span className="text-sm text-green-1000 font-bold rounded-full p-1 px-4 mb-2 border-2 border-green-500 bg-green-100 mx-auto flex justify-center items-center w-auto lg:w-56 text-center">
          <span className="font-outfit">100% Safe & Secure</span>
        </span>

        <h1 className="text-3xl sm:text-4xl lg:text-4xl tracking-tight flex flex-col mx-0 md:max-w-md lg:max-w-none font-bold text-black mt-4 lg:mt-5 p-0">
          <span className="block xl:inline">
            Simple billing and payments
          </span>
        </h1>

        <p className="text-base sm:text-xl font-outfit font-light mt-4 lg:mt-5">
          Create your <strong className="font-medium">Invoices, Purchases & Quotations</strong> in less than 10 seconds. Share on WhatsApp with payment links and get paid faster!
        </p>

        <button
          type="button"
          className="mt-6 text-lg sm:text-2xl font-outfit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-6 py-3 lg:px-4 lg:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Sign up For Free
        </button>

        <div className="mt-6">
          <p className="font-outfit font-medium">Download For Free on</p>
          <div className="flex justify-center lg:justify-start gap-4 mt-4">
            <a className="hover:scale-105 transition-transform duration-200" href="#">
              <img className="w-32 sm:w-40" src="https://getswipe.in/static/img/google-play-badge.webp" alt="Google Play Store" />
            </a>
            <a className="hover:scale-105 transition-transform duration-200" href="#">
              <img className="w-32 sm:w-40" src="https://getswipe.in/static/img/appstore.png" alt="App Store" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
        <img
          className="w-full h-auto max-w-xs lg:max-w-full"
          src="https://getswipe.in/static/img/hero.webp"
          alt="Hero Illustration"
        />
      </div>
    </div>
  );
};
