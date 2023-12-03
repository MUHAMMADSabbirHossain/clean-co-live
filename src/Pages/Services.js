import React, { useEffect, useState } from 'react';
import axios from "axios";
import fetcher from '../api';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        // axios.get("http://localhost:5000/service").then(res => setServices(res.data));

        (async () => {
            const res = await fetcher.get("/service");
            setServices(res.data);
        })()
    }, []);
    console.log("services", services);

    return (
        <div>
            <h1>This is Services</h1>
        </div>
    );
};

export default Services;