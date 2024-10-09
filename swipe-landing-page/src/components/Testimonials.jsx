import { useState } from 'react';

const Testimonials = () => {
  const openModal = (videoId) => {
    // Handle the logic to open a modal or play the video
    console.log("Opening modal with video ID:", videoId);
    // Your modal-opening logic goes here, e.g., setState or other modal handling
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Testimonial 1 */}
        <div className="bg-white shadow-lg rounded-lg p-4 text-center">
          <div className="relative">
            <img
              className="w-full h-48 object-cover rounded-lg"
              src="https://via.placeholder.com/300x200"
              alt="Person 1"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => openModal('eQXlNEAjSRE')}
                className="bg-red-600 text-white p-2 rounded-full"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 17l6-5-6-5v10z" />
                </svg>
              </button>
            </div>
          </div>
          <h3 className="text-xl font-semibold mt-4">Swipe has made our life very easy</h3>
          <p className="text-gray-500 mt-2">
            CA Pradyumna Teja K
            <br />
            Murthy & Kanth, Chartered Accountants
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white shadow-lg rounded-lg p-4 text-center">
          <div className="relative">
            <img
              className="w-full h-48 object-cover rounded-lg"
              src="https://via.placeholder.com/300x200"
              alt="Person 2"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => openModal('d4AjFS1XYZ')}
                className="bg-red-600 text-white p-2 rounded-full"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 17l6-5-6-5v10z" />
                </svg>
              </button>
            </div>
          </div>
          <h3 className="text-xl font-semibold mt-4">Swipe is a must-have for all businesses</h3>
          <p className="text-gray-500 mt-2">
            Harsh Sethi
            <br />
            Owner, Tron Technologies
          </p>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-white shadow-lg rounded-lg p-4 text-center">
          <div className="relative">
            <img
              className="w-full h-48 object-cover rounded-lg"
              src="https://via.placeholder.com/300x200"
              alt="Person 3"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => openModal('fYNSABrSTGJ')}
                className="bg-red-600 text-white p-2 rounded-full"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 17l6-5-6-5v10z" />
                </svg>
              </button>
            </div>
          </div>
          <h3 className="text-xl font-semibold mt-4">Swipe made sharing bills easy via WhatsApp</h3>
          <p className="text-gray-500 mt-2">
            Guru
            <br />
            G1 Clothing, Chennai
          </p>
        </div>

        {/* Testimonial 4 */}
        <div className="bg-white shadow-lg rounded-lg p-4 text-center">
          <div className="relative">
            <img
              className="w-full h-48 object-cover rounded-lg"
              src="https://via.placeholder.com/300x200"
              alt="Person 4"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => openModal('gHJLNBmOPQK')}
                className="bg-red-600 text-white p-2 rounded-full"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 17l6-5-6-5v10z" />
                </svg>
              </button>
            </div>
          </div>
          <h3 className="text-xl font-semibold mt-4">Swipe helped us in streamlining our orders</h3>
          <p className="text-gray-500 mt-2">
            Priya Sudha K
            <br />
            Co-founder, S Agri Foods
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
