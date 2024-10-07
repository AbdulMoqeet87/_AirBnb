import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'; // Import arrow icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrellaBeach, faTree, faCity, faHouseChimney, faGem, faHome, faBox } from '@fortawesome/free-solid-svg-icons'; // Import icons

// Sample categories data with FontAwesome icons
const categories = [
  { name: "Beachfront", icon: faUmbrellaBeach },
  { name: "Countryside", icon: faTree },
  { name: "Urban", icon: faCity },
  { name: "Cabin", icon: faHouseChimney },
  { name: "Luxury", icon: faGem },
  { name: "Villas", icon: faHome },
  { name: "Tiny Homes", icon: faBox },
];

// Custom Arrow component
const CustomArrow = ( className, style, onClick, icon ) => (
  <div className={className} style={{ ...style, display: 'block', zIndex: 1 }} onClick={onClick}>
    <FontAwesomeIcon icon={icon} size="2x" />
  </div>
);

const CategorySlider = () => {
  // Slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 8, // Adjust for your layout
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    nextArrow: <CustomArrow icon={faAngleRight} />,
    prevArrow: <CustomArrow icon={faAngleLeft} />,
  };

  return (
    <div className="category-slider">
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <FontAwesomeIcon icon={category.icon} size="lg" />
            <h3>{category.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategorySlider;
