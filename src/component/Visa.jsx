import React from "react";

const Visa = () => {
  return (
    <div className="p-8 md:p-8 font-sans">
      {/* Title Section */}
      <h1 className="text-2xl md:text-3xl font-bold text-center text-black mb-8">
        Why Choose Visa Sprint’s Mock Interview Service?
      </h1>

      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Left Section (Image) */}
        <div className="relative flex-shrink-0 w-full md:w-1/3">
          <img
            src="https://i.pinimg.com/736x/05/dc/36/05dc3661b8b3c152a617696c5e38b188.jpg"
            alt="Student holding books"
            className="rounded-lg w-full h-auto md:h-[400px] object-cover"
          />
          <div className="absolute top-4 right-4 bg-gray-800 text-white text-sm px-4 py-2 rounded-md shadow-lg">
            Why Choose <span className="font-bold">Visa Sprint’s Mock Interview</span>
          </div>
        </div>

        {/* Right Section (Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-2/3">
          {/* Top Row: Two Cards */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg text-gray-800">1. Realistic Simulations</h3>
            <p className="text-gray-600 mt-2">
              Our expert trainers recreate the exact setting of a US visa interview. From the rapid-fire questions to how you enhance your delivery of answers, we ensure that you are thoroughly prepared for the real situation.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg text-gray-800">2. Focus on Building Confidence</h3>
            <p className="text-gray-600 mt-2">
              It is not just that we'll get you ready for the questions but also manage the nerves, polish the communication, and give you immense confidence. We ensure you go into the interview with the visa officer quite effortlessly and clearly.
            </p>
          </div>
          {/* Bottom Row: Single Card */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md col-span-1 md:col-span-2">
            <h3 className="font-bold text-lg text-gray-800">3. Tailored to Your Visa Type</h3>
            <p className="text-gray-600 mt-2">
              Student Visa F1: Questions over your study plan, financial capacity, and reasons to return back to your country. <br />
              Work Visa H1B: Questions about the employer, your job description, and professional work experience. <br />
              B1/B2 Business/Tourist Visa: Questions regarding purpose of visit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visa;
