import { useState, useEffect } from 'react';

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
    <div>PropertyList</div>
  )
}

export default PropertyList;