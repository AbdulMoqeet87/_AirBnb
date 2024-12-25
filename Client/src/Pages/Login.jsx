import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useAuthStore } from "../store/useAuthStore";
import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
const Login = () => {
    const{setUser}=  useAuthStore();
    //const navigate= useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
   
    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

   

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        if (!formData.email || !formData.password) {
            toast.error("Please fill in all fields.");
            return;
        }

        try {
            console.log("Form Data:", formData);
            setLoading(true);
            const response = await axios.post(
               "http://localhost:5000/user/login",
                formData
            );
            toast.success("Logged in successfully!");
            console.log("Response:", response.data.existingUser);
                setUser(response.data.existingUser);
                const token=response.data.token;
                localStorage.setItem("authToken", token);
        } catch (error) {
            console.error("Error:", error);
            toast.error(error.response?.data?.message || "An unexpected error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="font-[sans-serif]">
            <div className="h-screen flex flex-col items-center justify-center p-6 ml-20">
                <div className="grid lg:grid-cols-2 items-center gap-2 max-w-6xl max-lg:max-w-xl w-full">
                    <form className="lg:max-w-md w-full">
                        <h3 className="text-red-500 text-3xl font-extrabold mb-12">
                            Ready to Explore Again?
                        </h3>
                        <div className="space-y-4">
                            {/* Email */}
                            <div>
                                <label className="font-semibold text-gray-800 text-xs mb-1 block">
                                    Email
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    className="bg-gray-200 w-full text-gray-800 text-xs px-3 py-3 focus:bg-transparent outline-red-500 transition-all"
                                    placeholder="Enter email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            {/* Password */}
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
                                        value={formData.password}
                                        onChange={handleInputChange}
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-800 focus:outline-none p-1 rounded"
                                    >
                                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                        <div className="mt-8">
                            <button
                                disabled={loading}
                                type="button"
                                className={`py-3 px-6 text-xs font-semibold text-white tracking-wide ${
                                    loading ? "bg-gray-500 cursor-not-allowed" : "bg-red-500 hover:bg-red-600"
                                }`}
                                onClick={handleSubmit}
                            >
                                {loading ? "Loading..." : "Log in"}
                            </button>
                        </div>
                        <p className="text-xs text-gray-800 mt-4">
                            Don’t have an account?{" "}
                            <a
                                href="/signup"
                                className="text-red-600 font-semibold hover:underline ml-1"
                            >
                                Sign Up
                            </a>
                        </p>
                    </form>
                    <div className="h-full max-lg:mt-12">
                        <img
                            src="log3.png"
                            className="w-full h-full object-cover"
                            alt="Login visual representation"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
