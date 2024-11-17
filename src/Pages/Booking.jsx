import axios from 'axios';
import '../App.css';
import Footer from '../components/footer';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import BathtubIcon from '@mui/icons-material/Bathtub';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';
function Booking() {

    const navigate = useNavigate();
  const location = useLocation();
  const { id } = location.state || {};

  const [obj, setObj] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchProperty = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/listings/GetData/${id}`);
      setObj(response.data);
    } catch (err) {
      setError('Failed to fetch property details. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperty();
  }, []);

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
                src={obj.image }
                alt={obj.title }
                className="rounded-lg shadow-lg w-full object-cover max-h-[800px]"
              />
            </div>

            <div className="space-y-6 ml-20">
              <h1 className="text-3xl font-bold text-gray-900">{obj.title || 'Untitled Property'}</h1>
              <div className="flex space-x-2">
              <LocationOnIcon/>
              <h2 className="text-xl font-bold text-gray-900">{obj.location.town},{obj.location.city}</h2>
              </div>
              <p className="text-sm text-gray-500">Type: <span className=" text-gray-700 font-medium">{obj.type}</span>
              </p>

              <div className="flex items-center space-x-4">
                <p className="text-2xl font-semibold text-green-600">{obj.price}</p>
                <div className="flex items-center space-x-1 text-yellow-500">
                  <StarIcon/>
                  <p className="text-sm font-medium">{obj.rating}</p>
                </div>
              </div>

              
              <div className="border-t border-b py-4">
                <p className="text-gray-700 pb-2">
                    <Diversity3Icon/>
                  <strong>     Guests:</strong> {obj.guests || 'N/A'}
                </p>
                <p className="text-gray-700 pb-2">
                  <SingleBedIcon/>
                  <strong>     Bedrooms:</strong> {obj.bedrooms || 'N/A'}
                </p>

                <p className="text-gray-700 pb-2">
                    <BathtubIcon/>
                  <strong>     Bathrooms:</strong> {obj.bathrooms || 'N/A'}
                </p>
              </div>

              <div className="flex space-x-8">
                <button onClick={() => navigate("/reservation",{ state: { Obj: obj } })} className="bg-pink-600 text-white px-10 py-2 rounded-md shadow hover:bg-blue-500">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Booking;
