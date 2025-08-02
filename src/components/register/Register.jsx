import React from 'react';

const Register = () => {
  return (
    <div
      className="w-full min-h-screen bg-[#3b1040] bg-no-repeat bg-cover bg-bottom flex items-center justify-center"
      style={{ backgroundImage: "url('/images/bg-img.png')" }}
    >
      <div
        className="w-full max-w-[832px] bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden m-4"
        style={{
          backgroundImage: "url('/images/form-bg.png')",
          backgroundSize: '100% 250px' ,
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
          
        }}
      >
        {/* Left - Form */}
        <div className="w-full  p-8 bg-transparent">
          <div className="mb-4">
            <img src="/images/logo.png" alt="Doc2Doc Logo" className="h-12" />
          </div>
          <h2 className="text-2xl font-semibold text-purple-600 mb-6">Create Account</h2>
          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                defaultValue="Alan"
                className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                defaultValue="c"
                className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <input
              type="text"
              placeholder="Phone Number"
              defaultValue="+91 8898989895"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="email"
              placeholder="Mail ID"
              defaultValue="alan@gmail.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="text"
              placeholder="NEET Score"
              defaultValue="324"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <div className="space-y-2 text-sm text-gray-700">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Have you already taken the NEET examination?
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Are you planning to take NEET Examination?
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-yellow-400 text-gray-800 font-semibold rounded-md hover:bg-yellow-300 transition"
            >
              Submit
            </button>
            <p className="text-sm text-center mt-2">
              Already have an account?{' '}
              <a href="#" className="text-blue-600 hover:underline">Sign in</a>
            </p>
          </form>
        </div>

        {/* Right - Doctor Image */}
<div
  className="w-full relative flex flex-col justify-center items-center p-0"
  style={{
    background: 'linear-gradient(to bottom, rgba(81, 27, 77, 0) 0%, rgba(81, 27, 77, 0.2) 100%)'
  }}
>
  {/* Absolute text over image */}
  <p className="absolute bottom-10 text-xs px-12 text-center z-10">
  No office visits. Our team will assist you in the best manner. 
Personalized one-on-one support, Quick response time, 100% Free counseling for Indian students
  </p>

  {/* Image behind the text */}
  <img
    src="/images/doctor-img.png"
    alt="Doctor"
    className="max-h-[600px] w-full object-contain block"
  />
</div>


      </div>
    </div>
  );
};

export default Register;
