
import { useEffect } from "react";
import { useState } from "react";

const CardList = ( category) => {

  console.log(category.categ.type,"this is cat ");
  const [properties,setProperties] =useState([]);
  useEffect(()=>{
    
fetchData()
  },[]
)

const fetchData =async()=>{

  try{
    const response = await fetch('http://localhost:5000/');
  
  const data = await response.json();
  console.log(data);
  setProperties(data);

  }
catch(error)
{
    console.log(error.message);
}  

}
    return (
      


      <div className="card-list">
        {
          properties
          .filter((property) => !category || property.type === category.categ.type)
          .map((property, index) => (
          
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
        ))
        }
      </div>
    );
  };
  

export default CardList;
