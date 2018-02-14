import React from 'react';
import SectionGallery from '../Sections/SectionGallery';

const Gallery = match => (
  <div>
    <h1>{match.url}</h1>
    <SectionGallery />
  </div>
);

export default Gallery;
