import React from 'react';
import Navbar from '../components/Navbar';
import ViewTable from '../components/ViewTable';

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
];

export default RouterArr;
