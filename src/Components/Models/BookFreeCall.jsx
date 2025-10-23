import { AiOutlineClose } from "react-icons/ai";
import BookCall from "../../assets/bookfreecall.jpg"

const BookFreeCall = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-100 px-4">
      <div className="bg-white rounded-2xl overflow-hidden w-full max-w-3xl shadow-xl relative grid md:grid-cols-2">
        
        {/* Left Image Section */}
        <div className="relative">
          <img
            src={BookCall}
            alt="Dream Job"
            className="h-48 md:h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex  justify-center">
            <p className="text-white text-xl md:text-2xl font-bold text-center px-4 py-8">
              GET YOUR DREAM JOB <br /> WITH GTR ACADEMY
            </p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="p-6 sm:p-8 flex flex-col justify-center relative">
          {/* Close Button */}
          <button
            className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
            onClick={onClose}
          >
            <AiOutlineClose className="w-5 h-6 fill-red-900 cursor-pointer" />
          </button>

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Welcome to <span className="text-blue-700">GTR Academy</span>
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex">
              <select className="border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none">
                <option value="+91">+91</option>
                <option value="+1">+1</option>
              </select>
              <input
                type="tel"
                placeholder="Enter your mobile number"
                className="flex-1 border border-gray-300 rounded-r-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition cursor-pointer"
            >
              Continue →
            </button>
          </form>

          <div className="flex items-center my-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-2 text-gray-500 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <button className="w-full border border-gray-300 rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-100 cursor-pointer">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          <p className="text-xs text-gray-500 mt-4 text-center">
            By Proceeding, I agree to <span className="text-blue-600">T&C</span>{" "}
            and <span className="text-blue-600">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookFreeCall