import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrellaBeach, faTree, faCity, faHouseChimney, faGem, faHome, faBox } from '@fortawesome/free-solid-svg-icons'; // Import icons

// Sample categories data with FontAwesome icons
const categories = [
  {
    name: "Beachfront",
    icon: faUmbrellaBeach,
  },
  {
    name: "Countryside",
    icon: faTree,
  },
  {
    name: "Urban",
    icon: faCity,
  },
  {
    name: "Cabin",
    icon: faHouseChimney,
  },
  {
    name: "Luxury",
    icon: faGem,
  },
  {
    name: "Villas",
    icon: faHome,
  },
  {
    name: "Tiny Homes",
    icon: faBox,
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

  return (
    <div className="category-slider">
      
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div key={index} className="category-item">
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
