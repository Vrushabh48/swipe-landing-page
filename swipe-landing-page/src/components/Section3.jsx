
export const Section3 = () => {
  return (
    <div className="px-4 py-8">
      {/* Title Section */}
      <div className="m-4 flex justify-center">
        <h1 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-medium text-center">
          Our Customers speak for us 🤩 ❤️
        </h1>
      </div>

      {/* Image Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <img className="w-full hover:scale-105 transition-transform duration-300" src="/1.png" alt="Testimonial 1" />
        <img className="w-full hover:scale-105 transition-transform duration-300" src="/2.png" alt="Testimonial 2" />
        <img className="w-full hover:scale-105 transition-transform duration-300" src="/3.png" alt="Testimonial 3" />
        <img className="w-full hover:scale-105 transition-transform duration-300" src="/4.png" alt="Testimonial 4" />
      </div>
    </div>
  );
};
