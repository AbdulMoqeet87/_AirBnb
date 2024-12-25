import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast"

const Signup = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    UserName: "",
    email: "",
    PhoneNo: "",
    Password: "",
    role: "user", // Default role
  });

const [loading,Setloading]= useState(false);

  const handleInputChange = (e) => {
    e.preventDefault();
    
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
        console.log("form", formData);
        Setloading(true);
        const response = await axios.post("http://localhost:5000/user/signup", formData);

        toast.success("Account created successfully!");
        console.log("Account created successfully:", response.data);
         navigate("/");

    } catch (error) {

      console.error("Error creating account:", error);
      toast.error(error.response.data.message);
    }
    finally{
        Setloading(false);
    }
  };

  return (
    <>
      <div className="font-[sans-serif]">
        <div className="h-screen flex flex-col items-center justify-center p-6 ml-20">
          <div className="grid lg:grid-cols-2 items-center gap-2 max-w-6xl max-lg:max-w-xl w-full">
            <form className="lg:max-w-md w-full">
              <h3 className="text-red-500 text-3xl font-extrabold mb-12">Join & Explore</h3>
              <div className="space-y-4">
                <div>
                  <label className="font-semibold text-gray-800 text-xs mb-1 block">Username</label>
                  <input
                    name="UserName"
                    type="text"
                    className="bg-gray-200 w-full text-gray-800 text-xs px-3 py-3 focus:bg-transparent outline-red-500 transition-all"
                    placeholder="Enter name"
                    value={formData.UserName}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="font-semibold text-gray-800 text-xs mb-1 block">Email</label>
                  <input
                    name="email"
                    type="text"
                    className="bg-gray-200 w-full text-gray-800 text-xs px-3 py-3 focus:bg-transparent outline-red-500 transition-all"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="font-semibold text-gray-800 text-xs mb-1 block">Phone No</label>
                  <input
                    name="PhoneNo"
                    type="text"
                    className="bg-gray-200 w-full text-gray-800 text-xs px-3 py-3 focus:bg-transparent outline-red-500 transition-all"
                    placeholder="Enter Phone No."
                    value={formData.PhoneNo}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="font-semibold text-gray-800 text-xs mb-1 block">Password</label>
                  <input
                    name="Password"
                    type="password"
                    className="bg-gray-200 w-full text-gray-800 text-xs px-3 py-3 focus:bg-transparent outline-red-500 transition-all"
                    placeholder="Enter password"
                    value={formData.Password}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Radio Buttons for User or Host */}
                <div>
                  <label className="font-semibold text-gray-800 text-xs mb-1 block">Role</label>
                  <div className="flex space-x-4">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="user"
                        name="role"
                        value="user"
                        className="text-pink-500"
                        required
                        checked={formData.role === "user"}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="user" className="ml-2 text-gray-800 text-xs">User</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="host"
                        name="role"
                        value="host"
                        className="text-pink-500"
                        required
                        checked={formData.role === "host"}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="host" className="ml-2 text-gray-800 text-xs">Host</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                disabled={loading}
                  type="button"
                  onClick={handleSubmit}
                  className="py-3 px-6 text-xs font-semibold text-white tracking-wide bg-red-500 hover:bg-red-600 focus:outline-none"
                >
                  {loading ? "Loading":"Create Account" }
                </button>
              </div>
              <p className="text-xs text-gray-800 mt-4">
                Already have an account?{" "}
                <a href="javascript:void(0);" className="text--600 font-semibold hover:underline ml-1">
                  Login here
                </a>
              </p>
            </form>

            <div className="h-full max-lg:mt-12">
              <img src="signup1.png" className="w-full h-full object-cover" alt="Dining Experience" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
