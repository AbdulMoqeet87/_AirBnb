



const properties = [
  {
    image: "/hotel.jpg",
    title: 'Modern Apartment',
    type: 'Entire home',
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    price: '$120/night',
    rating: 4.8,
  },
  {
    image: '/beach.jpg',
    title: 'Cozy Private Room',
    type: 'Private room',
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    price: '$80/night',
    rating: 4.5,
  },
  {
    image: '/beach2.jpg',
    title: 'Beachside Villa',
    type: 'Entire home',
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    price: '$350/night',
    rating: 5.0,
  },
  {
    image: '/urban.jpg',
    title: 'Modern Apartment',
    type: 'Entire home',
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    price: '$120/night',
    rating: 4.8,
  },
  {
    image: '/hotel.jpg',
    title: 'Cozy Private Room',
    type: 'Private room',
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    price: '$80/night',
    rating: 4.5,
  },
  {
    image: '/urban.jpg',
    title: 'Beachside Villa',
    type: 'Entire home',
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    price: '$350/night',
    rating: 5.0,
  },
];



const CardList = () => {
    return (
      <div className="card-list">
        {properties.map((property, index) => (
          <div className="card" key={index}>
            <img src={property.image} alt={property.title} className="card-img" />
            <div className="card-body">
              <h3 className="card-title">{property.title}</h3>
              <p className="card-type">{property.type}</p>
              <p className="card-info">
                {property.guests} guests · {property.bedrooms} bedrooms · {property.bathrooms} bathrooms
              </p>
              <p className="card-price">{property.price}</p>
              <p className="card-rating">Rating: {property.rating}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  

export default CardList;
