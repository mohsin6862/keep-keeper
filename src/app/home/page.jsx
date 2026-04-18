import Banner from '@/Components/Banner/Banner';
import Display from '@/Components/Display/Display';

import React from 'react';
import Friends from '../../Components/Friends/Friends';

const HomePage = () => {
    return (
        <div>
      <Banner></Banner>
      <Display></Display>
      <Friends></Friends>
        </div>
    );
};

export default HomePage;