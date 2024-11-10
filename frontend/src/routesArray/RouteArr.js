import React from 'react';
import Navbar from '../components/Navbar';
import ViewTable from '../components/ViewTable';
import News from '../components/News';
import Signin from '../components/Signin';
import Signup from '../components/Signup';
import Home from '../components/Home';

const RouterArr = [
    {
        component_name: 'ViewTable',
        file: ViewTable,
        path: '/viewTable',
    },
    {
        component_name: 'Navbar',
        file: Navbar,
        path: '/navbar',
    },
    {
        component_name: 'News',
        file: News,
        path: '/viewNews',
    },
    {
        component_name: 'Signup-Page',
        file: Signup,
        path: '/Signup-Page',
    },
    {
        component_name: 'Signin-Page',
        file: Signin,
        path: '/',
    },
    {
        component_name: 'Home-Page',
        file: Home,
        path: '/Home-Page',
    },
];

export default RouterArr;
