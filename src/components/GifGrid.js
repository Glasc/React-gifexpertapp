import React from 'react';
import useFetchGifs from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <React.Fragment>
      <h3>{category}</h3>
      {loading ? (
        <p
          style={{
            color: 'red',
            fontWeight: 'bold',
          }}
        >
          Cargando...
        </p>
      ) : (
        <div className='card-grid'>
          {images.map((img) => {
            return <GifGridItem key={img.id} {...img} />;
          })}
        </div>
      )}
    </React.Fragment>
  );
};

export default GifGrid;
