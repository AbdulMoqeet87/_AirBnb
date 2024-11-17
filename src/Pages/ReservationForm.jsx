import  { useState } from "react";

function BookingForm() {
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const { checkIn, checkOut } = formData;

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
      alert("Booking submitted successfully!");
      // Handle form submission logic here (e.g., send data to server)
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Book Your Stay</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="checkIn" className="block text-gray-700 font-medium">
            Check-In Date
          </label>
          <input
            type="date"
            id="checkIn"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleInputChange}
            className={`w-full border ${
              errors.checkIn ? "border-red-500" : "border-gray-300"
            } rounded p-2`}
          />
          {errors.checkIn && (
            <p className="text-red-500 text-sm mt-1">{errors.checkIn}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="checkOut" className="block text-gray-700 font-medium">
            Check-Out Date
          </label>
          <input
            type="date"
            id="checkOut"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleInputChange}
            className={`w-full border ${
              errors.checkOut ? "border-red-500" : "border-gray-300"
            } rounded p-2`}
          />
          {errors.checkOut && (
            <p className="text-red-500 text-sm mt-1">{errors.checkOut}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
