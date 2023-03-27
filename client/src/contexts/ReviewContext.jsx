import { createContext, useState, useEffect } from 'react';

const ReviewContext = createContext();

const ReviewContextProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const res = await fetch('/reviews');
      if (!res.ok) throw new Error(res.statusText);
      const json = await res.json();
      setReviews(json);
    }
    fetchReviews().catch(error => error.message)
  }, [])

  return (
    <ReviewContext.Provider value={{ reviews, setReviews }}>
      {children}
    </ReviewContext.Provider>
  )
}

export { ReviewContext, ReviewContextProvider };