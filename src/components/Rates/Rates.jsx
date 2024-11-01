import React from "react";

const Rates = () => {
  return (
    <section className="py-10 px-5 bg-gray-50 text-gray-900 mt-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">Our Training Rates</h1>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {/* Unlimited Training - Regular */}
          <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold mb-4 text-center text-green-700">Unlimited Training</h2>
            <div className="text-center">
              <p className="text-gray-500 mb-2">Regular Monthly</p>
              <p className="text-3xl font-bold text-green-700">Ksh. 5,000</p>
            </div>
          </div>

          {/* Unlimited Training - Student */}
          <div className="bg-green-700 p-6 rounded-2xl shadow-xl max-w-sm transform transition duration-300 hover:scale-105 hover:shadow-2xl text-white">
            <h2 className="text-2xl font-semibold mb-4 text-center">Unlimited Training</h2>
            <div className="text-center">
              <p className="mb-2">Student Monthly</p>
              <p className="text-3xl font-bold">Ksh. 3,000</p>
            </div>
          </div>

          {/* Drop-In / Single Class */}
          <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-900">Drop-in</h2>
            <div className="text-center">
              <p className="text-gray-500 mb-2">Single Class</p>
              <p className="text-3xl font-bold text-gray-900">Ksh. 1,000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rates;
