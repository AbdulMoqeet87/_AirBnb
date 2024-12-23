import  { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <>
      <div className="font-[sans-serif]">
        <div className="h-screen flex flex-col items-center justify-center p-6 ml-20">
          <div className="grid lg:grid-cols-2 items-center gap-2 max-w-6xl max-lg:max-w-xl w-full">
            <form className="lg:max-w-md w-full">
              <h3 className="text-red-500 text-3xl font-extrabold mb-12">
                Ready to Explore Again?
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="font-semibold text-gray-800 text-xs mb-1 block">
                    Email
                  </label>
                  <input
                    name="email"
                    type="text"
                    className="bg-gray-200 w-full text-gray-800 text-xs px-3 py-3 focus:bg-transparent outline-red-500 transition-all"
                    placeholder="Enter email"
                  />
                </div>
                <div>
                  <label className="font-semibold text-gray-800 text-xs mb-1 block">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      className="bg-gray-200 w-full text-gray-800 text-xs px-3 py-3 focus:bg-transparent outline-red-500 transition-all pr-10"
                      placeholder="Enter password"
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-800 focus:outline-none ${
                        isFocused ? "bg-white" : "bg-gray-200"
                      } p-1 rounded`}
                    >
                      <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </button>
                  </div>
                </div>

                {/* Radio Buttons for User or Host */}
                <div>
                  <div className="flex space-x-4">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="user"
                        name="role"
                        value="User"
                        className="text-pink-500"
                        required
                      />
                      <label
                        htmlFor="user"
                        className="ml-2 text-gray-800 text-xs"
                      >
                        User
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="host"
                        name="role"
                        value="Host"
                        className="text-pink-500"
                        required
                      />
                      <label
                        htmlFor="host"
                        className="ml-2 text-gray-800 text-xs"
                      >
                        Host
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  className="py-3 px-6 text-xs font-semibold text-white tracking-wide bg-red-500 hover:bg-red-600 focus:outline-none"
                >
                  Log in
                </button>
              </div>
              <p className="text-xs text-gray-800 mt-4">
                Don`t have an account?{" "}
                <a
                  href="javascript:void(0);"
                  className="text--600 font-semibold hover:underline ml-1"
                >
                  Sign Up
                </a>
              </p>
            </form>

            <div className="h-full max-lg:mt-12">
              <img
                src="log3.png"
                className="w-full h-full object-cover"
                alt="Dining Experience"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
