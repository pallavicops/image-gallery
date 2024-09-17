import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
 // Assuming you added the CSS above

const Body = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Fetch images from the API
  const fetchImages = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=20`);
      if (response.data.length === 0) {
        setHasMore(false);
      } else {
        setImages(prevImages => [...prevImages, ...response.data]);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching images:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  
 

  return (
    <div className='image-gallery' >
    <div className='image-container'>
      {images.map((image, index) => (
      
          <img 
            key={image.id}
            src={image.download_url} 
            alt={image.author}
            style={{width:'100%',height:'auto'}}
          />
       
      ))}
    </div>
 
      
      {/* Load more button */}
      {hasMore && !loading && (
        <button onClick={handleLoadMore} className='load-more-button'>
          Load More
        </button>
      )}

      {/* Loading indicator */}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default Body;
