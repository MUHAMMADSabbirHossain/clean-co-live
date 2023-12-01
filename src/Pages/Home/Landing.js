import React from 'react';
import BucketGirl from "../../assets/image/bucketgirl.png";

const Landing = () => {
    return (
        <div className="hero h-screen lg:h-[60vh] bg-accent mt-16">
            <div className="hero-content flex-col lg:flex-row">

                <div>
                    <p>Best Quality</p>
                    <h1 className="text-5xl font-bold">Professional Cleaning Service</h1>
                    <p className="py-6 max-w-xl">At Clean Co, we go beyond cleaning - we perfect every detail. Our meticulous approach ensures a spotless space, prioritizing your satisfaction. Ready to experience the difference? Schedule your cleaning service now!</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>

                <div className="h-[60vh] shrink-0">
                    <img src={BucketGirl} className="h-full" />
                </div>
            </div>
        </div>
    );
};

export default Landing;