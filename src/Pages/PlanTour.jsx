import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/PlanTour.css';

const PlanTour = () => {
  const [productData, setProductData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/places.json');
        const placesArray = response.data.places;

        if (Array.isArray(placesArray)) {
          setProductData(placesArray);
        } else {
          console.error('Data is not an array:', placesArray);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = productData && productData.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="featured" className="py-4">
      <div class = "container">
                <div class = "title-wrap">
                    <span class = "sm-title">know about some places before your travel</span>
                    <h2>Choose your Travel location:</h2>
                </div>
        <input
          className='search_1'
          type="text"
          placeholder="Search by product name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="featured-row">
          {filteredProducts.map((product) => (
            <div key={product.id} className="card-hover">
              {/* Add your content for each place here */}
              <img className='image' src={product.image} alt={product.name} />
              <p> {product.name}</p>
              <p>{product.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanTour;
