import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {context}from '../App.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrellaBeach, faTree, faCity, faHouseChimney, faGem, faHome, faBox } from '@fortawesome/free-solid-svg-icons'; // Import icons
import { useContext} from "react";

// Sample categories data with FontAwesome icons
const categories = [
  {
    name: "Beachfront",
    icon: faUmbrellaBeach,
    "type": "Private room",
  },
  {
    name: "Countryside",
    icon: faTree,
    "title": "Cozy Private Room",
  },
  {
    name: "Urban",
    icon: faCity,
    "type": "Entire home",
  },
  {
    name: "Cabin",
    icon: faHouseChimney,
    "type": "Entire home",
  },
  {
    name: "Luxury",
    icon: faGem,
    "type": "Private room",
  },
  {
    name: "Villas",
    icon: faHome,
    "type": "Entire home",
  },
  {
    name: "Tiny Homes",
    icon: faBox,
    "type": "Entire home",
  },
];

const CategorySlider = () => {
  // Slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 10, // Adjust the number of visible slides
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows:true,
  };
  const [cat,setCategory]=useContext(context);

  return (
    <div className="category-slider">
      
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div key={index} 
          className="category-item" onClick={() => setCategory(category)}>
            
            {console.log(cat,"in bet")}              
            
            
            {/* Use a smaller size for FontAwesomeIcon */}
            <FontAwesomeIcon icon={category.icon} size="lg" /> {/* Change size here */}
            <h3>{category.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategorySlider;
