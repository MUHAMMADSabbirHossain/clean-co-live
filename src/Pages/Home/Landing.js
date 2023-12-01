import React from 'react';
import BucketGirl from "../../assets/image/bucketgirl.png";

const Landing = () => {
    return (
        <div className="relative">
            <div className="hero h-screen lg:h-[60vh] bg-accent relative z-0 mt-16">
                <div className="hero-content flex-col lg:flex-row">

                    <div>
                        <p
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-delay="200" className="text-xl">Best Quality</p>
                        <h1
                            data-aos="fade-right"
                            data-aos-delay="400"
                            data-aos-duration="900"
                            className="text-5xl font-bold">Professional Cleaning Service</h1>
                        <p
                            data-aos="fade-right"
                            data-aos-delay="600"
                            data-aos-duration="800"
                            className="py-6 max-w-xl">At Clean Co, we go beyond cleaning - we perfect every detail. Our meticulous approach ensures a spotless space, prioritizing your satisfaction. Ready to experience the difference? Schedule your cleaning service now!</p>
                        <button data-aos="zoom-in"
                            data-aos-delay="1300"
                            className="btn btn-primary">Get Started</button>
                    </div>

                    <div className="h-[60vh] shrink-0">
                        <img src={BucketGirl} className="h-full" alt='' />
                    </div>
                </div>
            </div>

            <div className=" rounded-2xl mx-auto mt-[-50px] relative z-20 bg-base-200 shadow-lg p-10 w-5/6">
                <h1 className="text-2xl mb-5 text-primary">Get Free Estimate</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" >
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w" />
                </div>
                <button className="btn btn-primary mt-5">Request a Quote</button>
            </div>
        </div>
    );
};

export default Landing;