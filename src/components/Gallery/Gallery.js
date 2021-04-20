import React, { useState } from 'react';
import GalleryCard from './GalleryCard/GalleryCard';
import './Gallery.scss';

function Gallery() {
  const [pics, setPics] = useState([]);
  fetch("https://picsum.photos/v2/list?limit=5")
  .then(response => response.json())
  .then(data => {
      console.log(data);
      setPics(data);
  });

  return (
    <section>
      <h2>Gallery of Sorts</h2>
      <div className='gallery'>
        {pics.map((pic) => (
          <GalleryCard
            url={pic.download_url}
            description={pic.author}
            alt=""
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
