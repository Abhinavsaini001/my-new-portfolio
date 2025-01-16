import React from "react";

function ContactSection() {
  return (
    <div>
        <h4 className="text-[#FF014F] mb-4 text-lg py-2 text-center">Connect</h4>
        <h1 className="text-5xl font-bold mb-6 text-center">Contact With Me</h1>
         <div className="min-h-screen bg-[#202327] flex items-center justify-center p-8">
            <div className="w-full max-w-6xl grid lg:grid-cols-3 gap-8">
            
                {/* Left Section - Responsive */}
                <div className="bg-[#212428] p-6 rounded-lg shadow-[0_0px_10px_rgba(15,2428,255,0.2)]">
                {/* Image */}
                <img 
                    src="https://th.bing.com/th/id/OIP.K0NV-NskbkUPxvtfEgVoqQHaE8?w=306&h=204&c=7&r=0&o=5&dpr=1.5&pid=1.7" 
                    alt="Profile"
                    className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                
                <h3 className="text-white text-xl font-semibold">Nevine Acotanza</h3>
                <p className="text-gray-400 mt-4">Chief Operating Officer</p>
                <p className="text-gray-400 mt-2">
                    I am available for freelance work. Connect with me via call or email.
                </p>
                <p className="text-gray-400 mt-4">
                    <strong>Phone:</strong> +012 345 678 90
                </p>
                <p className="text-gray-400">
                    <strong>Email:</strong> admin@example.com
                </p>

                <div className="mt-6">
                    <h4 className="text-gray-400 mb-2">Find With Me</h4>
                    <div className="flex gap-4">
                    <button className="bg-red-500 p-2 rounded-full">
                        <i className="fas fa-volume-up text-white"></i>
                    </button>
                    <button className="bg-gray-600 p-2 rounded-full">
                        <i className="fab fa-facebook-f text-white"></i>
                    </button>
                    <button className="bg-blue-500 p-2 rounded-full">
                        <i className="fab fa-linkedin-in text-white"></i>
                    </button>
                    </div>
                </div>
                </div>

                {/* Right Section - Responsive */}
                <form className="bg-[#212428] p-6 rounded-lg shadow-[0_0px_10px_rgba(15,2428,255,0.2)] lg:col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    {/* Name and Phone Number in Same Row */}
                    <div>
                    <label className="text-gray-400 block mb-2">Your Name</label>
                    <input
                        type="text"
                        className="w-full bg-[#191B1E] text-white p-3 rounded-md border-2 shadow-inner border-[#121518] focus:outline-none"
                    />
                    </div>

                    <div>
                    <label className="text-gray-400 block mb-2">Phone Number</label>
                    <input
                        type="text"
                        className="w-full bg-[#191B1E] text-white p-3 rounded-md border-2 shadow-inner border-[#121518] focus:outline-none"
                    />
                    </div>

                    <div className="col-span-1 sm:col-span-2">
                    <label className="text-gray-400 block mb-2">Email</label>
                    <input
                        type="email"
                        className="w-full bg-[#191B1E] text-white p-3 rounded-md border-2 shadow-inner border-[#121518] focus:outline-none"
                    />
                    </div>

                    <div className="col-span-1 sm:col-span-2">
                    <label className="text-gray-400 block mb-2">Subject</label>
                    <input
                        type="text"
                        className="w-full bg-[#191B1E] text-white p-3 rounded-md border-2 shadow-inner border-[#121518] focus:outline-none"
                    />
                    </div>

                    <div className="col-span-1 sm:col-span-2">
                    <label className="text-gray-400 block mb-2">Your Message</label>
                    <textarea
                        className="w-full bg-[#191B1E] text-white p-3 rounded-md border-2 shadow-inner border-[#121518] focus:outline-none"
                        rows="5"
                    ></textarea>
                    </div>
                </div>

                <button
                    type="submit"
                    className="mt-6 w-full bg-[#2b2225] hover:bg-[#191B1E] text-white py-3 rounded-md shadow-xl focus:outline-none focus:ring-0"
                >
                    Send Message
                </button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default ContactSection;
