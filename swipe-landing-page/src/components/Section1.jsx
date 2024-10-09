import { Button } from "./button";

export const Section1 = () => {
  return (
    <div className="grid grid-cols-2 mx-28 p-2">
      <div className="mt-24 mr-12 mb-24 p-5 gap-9">
        <span className="text-sm text-green-1000 font-bold rounded-full p-1 px-4 mb-2 border-2 border-green-500 bg-green-100 mx-auto md:flex md:justify-center md:items-center md:w-56 lg:mx-0 lg:justify-start text-center">
          <span className="text-center mx-auto font-outfit">
            100% Safe & Secure
          </span>
        </span>
        <h1 className="m-5 text-5xl tracking-tight flex flex-col sm:flex-row mx-0 md:max-w-md md:mx-auto lg:mx-0 font-bold text-black lg:text-6xl mt-5 p-5">
          <span className="block xl:inline space-x-3">Simple billing and payments</span>
        </h1>
        <p className="m-5 text-xl font-outfit font-light">Create your <strong className="font-medium">Invoices, Purchases & Quotations</strong> in less than 10 seconds. Share on WhatsApp with payment links and get paid faster! </p>
        <button type="button" class="m-5 text-2xl font-outfit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-4 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign up For Free</button>
        <div className="m-5">
            <p className="p-1 font-outfit font-medium">Download For Free on </p>
            <div className="flex gap-6 mt-4">
            <a className="hover:scale-105" href=""><img className="w-40" src="https://getswipe.in/static/img/google-play-badge.webp" alt="" /></a>
            <a className="hover:scale-105" href=""><img className="w-40" src="https://getswipe.in/static/img/appstore.png" alt="" /></a>
            </div>
        </div>
      </div>
      <div>
        <img src="https://getswipe.in/static/img/hero.webp" alt="" />
      </div>
    </div>
  );
};
