import React from 'react';

import FullScreenLoaidng from './FullScreenLoaidng';
import Header from './Header';
import Footer from './Footer';

import SectionHome from './Sections/SectionHome';
import SectionCouple from './Sections/SectionCouple';
import SectionFrase from './Sections/SectionFrase';
import SectionOurStory from './Sections/SectionOurStory';
import SectionCounter from './Sections/SectionCounter';
import SectionGallery from './Sections/SectionGallery';
import SectionFeatured from './Sections/SectionFeatured';
import SectionGifts from './Sections/SectionGifts';
import SectionRSVP from './Sections/SectionRSVP';

const Main = () => (
  <div>
    <FullScreenLoaidng />
    <SectionHome />
    <Header />
    <SectionCouple />
    <SectionFrase />
    <SectionOurStory />
    <SectionCounter />
    <SectionGallery />
    <SectionFeatured />
    <SectionGifts />
    <SectionRSVP />
    <Footer />
  </div>
);

export default Main;
