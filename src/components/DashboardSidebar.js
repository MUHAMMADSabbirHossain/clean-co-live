import React from 'react';

const DashboardSidebar = ({ children }) => {
    return (
        <div className="drawer lg:drawer-open flex mt-16 bg-accent">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>

            </div>

            <div className="drawer-content flex flex-col items-center justify-center w-full">
                {/* Page content here */}
                {children}
            </div>
        </div>
    );
};

export default DashboardSidebar;