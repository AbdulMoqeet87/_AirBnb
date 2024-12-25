import  { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import BathtubIcon from "@mui/icons-material/Bathtub";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";

function Booking() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = location.state || {};

  const [obj, setObj] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [showForm, setShowForm] = useState(false); // State for form visibility
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const fetchProperty = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/user/GetData/${id}`);
      setObj(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperty();
  }, []);

  const handleBookNow = () => {
    setShowForm(true); // Show the form on button click
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Check-In Date:", checkInDate);
    console.log("Check-Out Date:", checkOutDate);
    setShowForm(false); // Close the form after submission
    navigate("/reservation", { state: { obj, checkInDate, checkOutDate } });
  };

  return (
    <>
      <Navbar />
      <div className="mt-20 container mx-auto p-6 mb-20">
        {loading ? (
          <div className="text-center py-20">
            <p className="text-xl font-semibold">Loading property details...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-red-500 font-semibold">{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative">
              <img
                src={obj.image}
                alt={obj.title}
                className="rounded-lg shadow-lg w-full object-cover max-h-[800px]"
              />
            </div>

            <div className="space-y-6 ml-20">
              <h1 className="text-3xl font-bold text-gray-900">{obj.title || "Untitled Property"}</h1>
              <div className="flex space-x-2">
                <LocationOnIcon />
                <h2 className="text-xl font-bold text-gray-900">{obj.location.town}, {obj.location.city}</h2>
              </div>
              <p className="text-sm text-gray-500">
                Type: <span className="text-gray-700 font-medium">{obj.type}</span>
              </p>

              <div className="flex items-center space-x-4">
                <p className="text-2xl font-semibold text-green-600">{obj.price}</p>
                <div className="flex items-center space-x-1 text-yellow-500">
                  <StarIcon />
                  <p className="text-sm font-medium">{obj.rating}</p>
                </div>
              </div>

              <div className="border-t border-b py-4">
                <p className="text-gray-700 pb-2">
                  <Diversity3Icon />
                  <strong> Guests:</strong> {obj.guests || "N/A"}
                </p>
                <p className="text-gray-700 pb-2">
                  <SingleBedIcon />
                  <strong> Bedrooms:</strong> {obj.bedrooms || "N/A"}
                </p>

                <p className="text-gray-700 pb-2">
                  <BathtubIcon />
                  <strong> Bathrooms:</strong> {obj.bathrooms || "N/A"}
                </p>
              </div>

              <div className="flex space-x-8">
                <button
                  onClick={handleBookNow}
                  className="bg-pink-600 text-white px-10 py-2 rounded-md shadow hover:bg-blue-500"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <form
            onSubmit={handleFormSubmit}
            className="bg-white p-8 rounded-lg shadow-lg w-96 animate-fadeIn"
          >
            <h2 className="text-2xl font-bold mb-4">Reservation Details</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Check-In Date</label>
              <input
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Check-Out Date</label>
              <input
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                required
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 bg-gray-300 rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Booking;
