import { Button } from "./button";
import FAQs from "./FAQs";

export const Section9 = () => {
  return (
    <div className="mx-4 md:mx-28">
      <div className="m-8 flex justify-center p-5">
        <h1 className="font-outfit text-3xl md:text-5xl font-medium text-center">
          Get started in less than 60 seconds 🚀🚀🚀
        </h1>
      </div>

      <div className="flex justify-center p-5">
        <Button title={"Sign Up For Free"} />
      </div>

      <div className="m-5 flex justify-center p-3">
        <p className="font-outfit text-lg text-center">Available on</p>
      </div>

      <div className="flex justify-center gap-6 mt-4 p-5 flex-wrap">
        <a className="hover:scale-105" href="">
          <img className="w-32 md:w-40" src="https://getswipe.in/static/img/google-play-badge.webp" alt="Google Play Store" />
        </a>
        <a className="hover:scale-105" href="">
          <img className="w-32 md:w-40" src="https://getswipe.in/static/img/appstore.png" alt="App Store" />
        </a>
      </div>

      <div>
        <FAQs />
      </div>
    </div>
  );
};
