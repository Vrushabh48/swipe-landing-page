export const Section4 = () => {
    return (
      <div className="m-5 mt-6">
        <div className="m-8 flex justify-center">
          <h1 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-medium text-center">
            Awesome Invoice Formats 🚀 🎉
          </h1>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-2">
          <img
            className="w-full h-auto rounded-lg"
            src="https://getswipe.in/static/img/templates-new/temp-1.webp"
            alt="Invoice Template 1"
          />
          <img
            className="w-full h-auto rounded-lg"
            src="https://getswipe.in/static/img/templates-new/temp-7.webp"
            alt="Invoice Template 2"
          />
          <img
            className="w-full h-auto rounded-lg"
            src="https://getswipe.in/static/img/templates-new/temp-12.webp"
            alt="Invoice Template 3"
          />
        </div>
  
        <div className="flex gap-4 justify-center m-7">
          <h1 className="text-xl sm:text-2xl font-light mt-2 font-outfit">Trusted By</h1>
          <img className="w-32 sm:w-48" src="https://getswipe.in/static/img/ycombinator.svg" alt="Y Combinator" />
        </div>

        <div className="m-5 flex justify-center">
          <p className="font-outfit text-lg">Partnered With</p>
        </div>
  
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mx-4">
          <img className="w-32 sm:w-44 p-2" src="https://getswipe.in/static/img/partners-new/icici.webp" alt="ICICI" />
          <img className="w-32 sm:w-44 p-2" src="https://getswipe.in/static/img/partners-new/axisbank.webp" alt="Axis Bank" />
          <img className="w-32 sm:w-44 p-2" src="https://getswipe.in/static/img/partners-new/razorpay.webp" alt="Razorpay" />
          <img className="w-32 sm:w-44 p-2" src="https://getswipe.in/static/img/partners-new/phonepe.webp" alt="PhonePe" />
          <img className="w-32 sm:w-44 p-2" src="https://getswipe.in/static/img/partners-new/shiprocket_new.webp" alt="Shiprocket" />
        </div>
      </div>
    );
  };
  