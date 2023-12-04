import React from 'react';
import { useForm } from "react-hook-form";
import fetcher from '../../api';

const AddService = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        // console.log(data);
        const res = await fetcher.post("add-service", data);
        console.log(res);
        reset();
    };

    return (
        <div className="h-screen  w-full bg-accent flex justify-center items-center">
            {/* <div className="hero-content flex-col lg:flex-row-reverse"> */}

            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <h1 className='text-2xl text-center'>Add Service</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>
                        <input type="text"
                            className="input input-bordered" required
                            {...register("serviceName")} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Charge</span>
                        </label>
                        <input type="text"
                            className="input input-bordered" required
                            {...register("serviceCharge")} />
                        {/* <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label> */}
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">Add Service</button>
                    </div>

                </form>
            </div>
            {/* </div> */}
        </div>
    );
};

export default AddService;