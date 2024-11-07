import React from 'react';
import Navbar from '../components/Navbar';
import ViewTable from '../components/ViewTable';
import Signin from '../components/Signin';
import Signup from '../components/Signup';

const RouterArr = [
    {
        component_name: 'Navbar',
        file: Navbar,
        path: '/navbar',
    },
    {
        component_name: 'ViewTable',
        file: ViewTable,
        path: '/viewTable',
    },
    {
        component_name: 'Signup-Page',
        file: Signup,
        path: '/sign-up',
    },
    {
        component_name: 'Signin-Page',
        file: Signin,
        path: '/sign-up',
    },
];

export default RouterArr;
