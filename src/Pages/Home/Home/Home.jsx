import React from 'react';
import Banner from '../Banner/Banner';
import PopularClass from '../PopularClass/PopularClass';
import Instructors from '../../Instructors/Instructors';
import Customerfeedback from '../../Customerfeedback/Customerfeedback';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <Instructors></Instructors>
            <Customerfeedback></Customerfeedback>
        </div>
    );
};

export default Home;