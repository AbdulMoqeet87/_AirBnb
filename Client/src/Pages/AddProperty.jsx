import{ useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';
import Footer from '../components/footer';

const Tournament = () => {
  const { state } = useLocation();
  const g_id = state && state.id ? state.id : "";

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    guests: null,
    bath: '',
    bed: '',
    price: '',
    town: '',
    city: '',
    img: '',
  });

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFormData({ ...formData, posterPath: e.target.files[0] });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => setStep((prevStep) => prevStep + 1);
  const handlePrev = () => setStep((prevStep) => prevStep - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    Object.keys(formData).forEach((key) => {
      form.append(key, formData[key]);
    });

    try {
      await axios.post(
        `http://localhost:4000/GroundOwner/tournaments/${g_id}`,
        form,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      toast.success("Tournament registered successfully");
      navigate('/OwnerGroundInfo', { state: { id: g_id } });
    } catch (error) {
      console.error("Error registering tournament:", error);
      toast.error("Failed to register tournament");
    }
  };

  return (
    <div className="w-screen bg_images_T  min-h-screen flex flex-col items-center justify-center">
      <Navbar />
      <div className="mt-24 mb-20 bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl mx-auto border border-gray-400">
        <h1 className="text-3xl font-bold text-center mb-8 text-red-500">
          Property Registration
        </h1>
        <form>
          <div className="grid grid-cols-2 gap-6">
            {step === 1 && (
              <>
                <div className="mb-4">
                  <label
                    htmlFor="title"
                    className="block text-red-500 text-sm font-bold mb-2 border-gray-600"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter title "
                    className="w-full px-4 py-2 border text-black rounded-lg focus:outline-none focus:border-blue-500 border-gray-600"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="type"
                    className="block text-red-500 text-sm font-bold mb-2 border-gray-600"
                  >
                    Type
                  </label>
                  <input
                    type="text"
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    placeholder="Enter type"
                    className="w-full px-4 py-2 border text-black border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="guests"
                    className="block text-red-500 text-sm font-bold mb-2"
                  >
                    Max Guests
                  </label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    placeholder="Enter number of guests"
                    className="w-full px-4 py-2 border border-gray-600 text-black rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="bath"
                    className="block text-red-500 text-sm font-bold mb-2"
                  >
                    Bathroom Count
                  </label>
                  <input
                    type="number"
                    id="bath"
                    name="bath"
                    value={formData.bath}
                    onChange={handleChange}
                    placeholder="Enter number of bathrooms"
                    className="w-full px-4 py-2 border-gray-600 border text-black rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="bed"
                    className="block text-red-500 text-sm font-bold mb-2"
                  >
                    Bedroom Count
                  </label>
                  <input
                    type="number"
                    id="bed"
                    name="bed"
                    value={formData.bed}
                    onChange={handleChange}
                    placeholder="Enter number of bedrooms"
                    className="w-full px-4 py-2 border border-gray-600 text-black rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
              </>
            )}
            {step === 2 && (
              <>
                <div className="mb-4">
                  <label
                    htmlFor="price"
                    className="block text-red-500 text-sm font-bold mb-2"
                  >
                    Price
                  </label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="Enter price"
                    className="w-full px-4 py-2 border border-gray-600 text-black rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="town"
                    className="block text-red-500 text-sm font-bold mb-2"
                  >
                    Town
                  </label>
                  <input
                    type="text"
                    id="town"
                    name="town"
                    value={formData.town}
                    onChange={handleChange}
                    placeholder="Enter town"
                    className="w-full px-4 py-2 border border-gray-600 text-black rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="city"
                    className="block text-red-500 text-sm font-bold mb-2"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter city"
                    className="w-full px-4 py-2 border border-gray-600 text-black rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="img"
                    className="block text-red-500 text-sm font-bold mb-2"
                  >
                    Poster
                  </label>
                  <input
                    type="file"
                    id="img"
                    name="img"
                    onChange={handleFileChange}
                    className="w-full px-4 py-2 border border-gray-600 text-black rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
              </>
            )}
          </div>
          <div className="flex justify-between mt-6">
            {step === 2 && (
              <button
                type="button"
                className="bg-red-500 hover:bg-gray-700 text-white font-bold py-2 px-3 rounded-lg focus:outline-none focus:shadow-outline"
                onClick={handlePrev}
              >
                Previous
              </button>
            )}
            {step === 1 && (
              <button
                type="button"
                className="bg-red-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3 rounded-lg focus:outline-none focus:shadow-outline"
                onClick={handleNext}
              >
                Next
              </button>
            )}
            {step === 2 && (
              <button
                type="button"
                className="bg-red-500 hover:bg-green-700 text-white font-bold py-1.5 px-3 rounded-lg focus:outline-none focus:shadow-outline"
                onClick={handleSubmit}
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Tournament;
