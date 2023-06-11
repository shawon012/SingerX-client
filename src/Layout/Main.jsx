import React from 'react';
import { Outlet} from "react-router-dom";
import Navbar from '../Pages/Shared/Navbar';
import Hooter from '../Pages/Shared/Hooter';

const Main = () => {
 
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Hooter></Hooter>
        </div>
    );
};

export default Main;

// https://fproserver.vercel.app
// https://fproserver.vercel.app