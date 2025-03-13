import React from "react";

const App = () => {
  return (
    <div className="bg-[#FCF9F4] min-h-screen  ">
      <nav className="flex justify-between items-center px-10 py-4 bg-[#FCF9F4]">
      <div className="flex items-center cursor-pointer ">
        <img src="src/assets/Frame 2095585834.svg" alt="Logo" className="h-8 mr-2" />
        <span className="text-4xl font-bold font-[Archivo]">
          <span className="text-black">Instant</span>{" "}
          <span className="text-purple-600">Paid</span>
        </span>
      </div>

      <ul className="hidden text-2xl md:flex space-x-8 text-gray-700 font-medium font-[Archivo]">
        <li className="hover:text-purple-600 cursor-pointer">Home</li>
        <li className="hover:text-purple-600 cursor-pointer">Features</li>
        <li className="hover:text-purple-600 cursor-pointer">Pricing</li>
        <li className="hover:text-purple-600 cursor-pointer">Blog</li>
      </ul>

      <div className="flex text-xl items-center space-x-4 font-[Archivo]">
  
  <button className="px-4 py-2 cursor-pointer border border-purple-600 text-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition duration-300">
    Sign up
  </button>

  
  <button className="px-4 py-2 bg-purple-600 text-white rounded-full cursor-pointer hover:bg-white border border-purple-600 hover:text-purple-700 rounded-full  transition duration-300">
    Log in
  </button>
</div>

    </nav>
      <header className="flex flex-col lg:flex-row items-center p-10 lg:p-0 bg-[#FCF9F4]">
  <div className="lg:w-1/2 text-center -mt-32 ml-20  lg:text-left ">
  
    <h1 className="text-6xl font-bold  leading-tight font-[Archivo]">
      <span className="text-purple-600">Effortless</span> Accounting
      <br />
      for Freelancers & Small Businesses
    </h1>
    <p className="text-gray-600 font-semibold mt-4 text-lg font-[Archivo] ">
      Instant paid automates your invoicing, payments, and financial 
      <br />
      tracking—so you can focus on growing your business.
    </p>
    <button className="mt-6 font-[Archivo] px-6 py-3 bg-black text-white rounded-full flex items-center mx-auto lg:mx-0 cursor-pointer">
      Get Started Free
      <span className="ml-2 bg-white text-black rounded-full p-1">
        ➜
      </span>
    </button>
    
  </div>

  <div className="lg:w-1/2 relative mt-10 lg:mt-0 flex justify-center">
    <div className="-mt-9 ml-27 relative">
      <img
        src="src/assets/Rectangle.png"
        alt="Woman Holding Phone"
        className="w-3/4 lg:w-full max-w-xlg"
      />
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FCF9F4] via-[#FCF9F4]/80 to-transparent"></div>
    </div>

    <div className="absolute -bottom-30 right-0 lg:right-63">
      <img
        src="src/assets/Frame 2095585891.png"
        alt="Financial Stats"
        className="w-72 shadow-lg rounded-lg"
      />
    </div>
    <div className="absolute -bottom-7 left-0 lg:-left-23">
      <img
        src="src/assets/Frame 2095585830.png"
        alt="Balance Sheet"
        className="w-65 shadow-lg rounded-lg"
      />
    </div>
    <div className="absolute bottom-39 left-0 lg:-left-18">
      <img
        src="src/assets/Frame 2095585831.png"
        alt="Transaction History"
        className="w-82 shadow-lg rounded-lg"
      />
    </div>
  </div>

</header>


      <section className="p-10 lg:p-20 mt-50 text-center">
  <h2 className="text-6xl font-bold leading-tight mb-20 font-[Archivo]">
    <span className="block">Everything You Need to</span>
    <span className="block">Manage Your <span className="text-purple-600">Finances</span></span>
  </h2>
  <img src="src/assets/Frame 26.png" alt="" className="mx-auto mt-6" />
</section>

    </div>
  );
};

export default App;
