import { useState, useEffect } from 'react';
import PropertyCard from '../../components/PropertyCard';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  
  // properties fetch request
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/properties');
      if (!res.ok) throw new Error(res.statusText);
      const json = await res.json();
      setProperties(json);
    }

    fetchData()
  }, []);
  
  return (
    <>
      {properties.map(property => {
        return (
          <PropertyCard
            key={property.id}
            name={property.name}
            image={property.image_url}
            address={property.full_address}
            phone={property.phone_number}
          />
        )
      })}
    </>
  )
}

export default PropertyList;