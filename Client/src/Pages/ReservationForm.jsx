import { useState } from "react";
import Navbar from "../components/Navbar";
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from "../components/footer";


function BookingForm() {

    const navigate=useNavigate();
    const [formData, setFormData] = useState({
    name: "",
    phone: "",
    checkIn: "",
    checkOut: "",
  });
const location = useLocation();
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const obj=location.state;
  console.log("obj in form",obj.Obj);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const { checkIn, checkOut, name, phone } = formData;

    if (!name) {
      newErrors.name = "Name is required.";
    }

    if (!phone) {
      newErrors.phone = "Phone number is required.";
    }

    if (!checkIn) {
      newErrors.checkIn = "Check-in date is required.";
    }

    if (!checkOut) {
      newErrors.checkOut = "Check-out date is required.";
    }

    if (checkIn && checkOut && new Date(checkIn) >= new Date(checkOut)) {
      newErrors.checkOut = "Check-out date must be after the check-in date.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {

        const daysBetween = Math.ceil(
            (new Date(formData.checkOut) - new Date(formData.checkIn)) / (1000 * 60 * 60 * 24)
          );
          
      setSubmittedData({
        ...formData,
        price:daysBetween * obj.Obj.price , // Add price here
      });
    }
  };

  if (submittedData) {
    return (
     <>
     <Navbar/>
        <div className=" container mx-auto p-6 mb-20">
        
                
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className=" relative mt-20">
            <img
               src={obj.Obj.image}
              // alt={obj.title }
              // className="rounded-lg shadow-lg w-full object-cover max-h-[800px]"
            />
          </div>


     
     
     <div className="mt-20 p-12  max-w-lg mx-auto bg-gray-50 rounded-xl shadow-xl ">
        <h2 className="text-3xl font-semibold mb-6 text-center">Booking Summary</h2>
        <div className="space-y-4 text-lg">
          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Phone:</strong> {submittedData.phone}
          </p>
          <p>
            <strong>Check-In Date:</strong> {submittedData.checkIn}
          </p>
          <p>
            <strong>Check-Out Date:</strong> {submittedData.checkOut}
          </p>
          <p>
            <strong>Price:</strong> ${submittedData.price}
          </p>
        </div>
        <button onClick={()=>navigate("/")} className="pl-10 pr-10 text-white mt-10 ml-20 w-[80] bg-pink-700 ">
                OK
        </button>
        </div>
        </div>
      </div>
      <Footer/>
      </>
    );
  }

  return (

<>
<Navbar/>
<div className=" container mx-auto p-6 mb-20">
        
                
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className=" relative mt-20">
              <img
                 src={obj.Obj.image}
                // alt={obj.title }
                // className="rounded-lg shadow-lg w-full object-cover max-h-[800px]"
              />
            </div>

    
    <div className=" flex justify-center items-center min-h-screen bg-white">
      <div className="p-8 bg-white rounded-xl shadow-lg w-[500] max-w-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center">Book Your Stay</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full border-2 ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-xl p-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full border-2 ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } rounded-xl p-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <label htmlFor="checkIn" className="block text-lg font-medium text-gray-700">
              Check-In Date
            </label>
            <input
              type="date"
              id="checkIn"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleInputChange}
              className={`w-full border-2 ${
                errors.checkIn ? "border-red-500" : "border-gray-300"
              } rounded-xl p-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.checkIn && (
              <p className="text-red-500 text-sm mt-1">{errors.checkIn}</p>
            )}
          </div>

          <div>
            <label htmlFor="checkOut" className="block text-lg font-medium text-gray-700">
              Check-Out Date
            </label>
            <input
              type="date"
              id="checkOut"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleInputChange}
              className={`w-full border-2 ${
                errors.checkOut ? "border-red-500" : "border-gray-300"
              } rounded-xl p-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.checkOut && (
              <p className="text-red-500 text-sm mt-1">{errors.checkOut}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
    </div>
    <Footer/>
    </>
  );
}

export default BookingForm;
