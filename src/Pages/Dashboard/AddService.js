import React from 'react';

const AddService = () => {


    return (
        <div className="h-screen  w-full bg-accent flex justify-center items-center">
            {/* <div className="hero-content flex-col lg:flex-row-reverse"> */}

            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body">
                    <h1 className='text-2xl text-center'>Add Service</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Charge</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        {/* <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label> */}
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Service</button>
                    </div>

                </form>
            </div>
            {/* </div> */}
        </div>
    );
};

export default AddService;