import React from 'react';
import Header from '../Header';

import SectionHome from '../Sections/SectionHome';
import SectionCouple from '../Sections/SectionCouple';
import SectionFrase from '../Sections/SectionFrase';
import SectionTimeLine from '../Sections/SectionTimeLine';
import SectionCounter from '../Sections/SectionCounter';
import SectionFeatured from '../Sections/SectionFeatured';
import SectionGifts from '../Sections/SectionGifts';
import SectionRSVP from '../Sections/SectionRSVP';

const Home = () => (
  <div>
    <SectionHome />
    <Header />
    <SectionCouple />
    <SectionFrase />
    <SectionTimeLine />
    <SectionCounter />
    <SectionFeatured />
    <SectionGifts />
    <SectionRSVP />
  </div>
);

export default Home;
