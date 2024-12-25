
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CardList = (category) => {

  const categoryType = category?.categ?.type || "Entire home";
  const [properties,setProperties] =useState([]);
  useEffect(()=>{
    
fetchData()
  },[]
)
const navigate= useNavigate();
const fetchData =async()=>{

  try{
    const response = await axios.get('http://localhost:5000/user/GetData');
  
  const data =  response.data;
  console.log(data);
  setProperties(data);

  }
catch(error)
{
    console.log(error.message);
}  
}

function DetailPage(id)
{
    if(id)
      navigate('/booking',{ state: { id: id } });
    
}


return (
      


      <div className="card-list">
        {

          properties
          .filter((property) =>  property.type === categoryType)
          .map((property, index) => (
          
          <div  className="card"  onClick={() =>DetailPage(property.id)}   key={index}>
         
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
