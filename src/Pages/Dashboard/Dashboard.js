import React from 'react';
import DashboardSidebar from '../../components/DashboardSidebar';
import { Outlet, Route, Routes } from 'react-router-dom';
import AddAdmin from './AddAdmin';
import AddService from './AddService';

const Dashboard = () => {
    return (
        <DashboardSidebar>
            <h1>Clean Co.</h1>

            <Outlet></Outlet>
        </DashboardSidebar>
    );
};

export default Dashboard;