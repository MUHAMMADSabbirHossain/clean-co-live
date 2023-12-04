import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import fetcher from '../../api';
import axios from 'axios';

const AddService = () => {
    const [imageURL, setImageURL] = useState("");
    const [loading, setLoading] = useState(false);
    console.log(imageURL);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        // console.log(data);

        const serviceData = {
            ...data,
            image: imageURL
        };


        const res = await fetcher.post("add-service", serviceData);
        console.log(res);
        reset();
        setImageURL("");
    };

    const handleUploadImage = (event) => {
        setLoading(true);
        const image = event.target.files[0];

        const formData = new FormData();

        formData.set("image", image);

        axios
            .post("https://api.imgbb.com/1/upload?key=7e8cfab1a7e91d931a338d7c431d0e06",
                formData
            )
            .then((res) => {
                // console.log(res);
                setImageURL(res.data.data.display_url);
                setLoading(false);
            }).catch((error) => {
                console.log(error);
            })
    };



    return (
        <div className="h-screen  w-full bg-accent flex justify-center items-center">
            {/* <div className="hero-content flex-col lg:flex-row-reverse"> */}

            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <h1 className='text-2xl text-center'>Add Service</h1>
                    <div className="form-control">
                        <label htmlFor="serviceName" className="label">
                            <span className="label-text">Service Name</span>
                        </label>
                        <input type="text"
                            id="serviceName"
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
                    <div className="form-control">
                        <label htmlFor='image' className={
                            loading
                                ? "btn btn-primary loading mt-5"
                                : "btn btn-primary mt-5"}>
                            Upload Image
                        </label>
                        <input type="file"
                            id='image'
                            className="input input-bordered hidden" required
                            onChange={handleUploadImage} />
                    </div>

                    <div className="form-control mt-6">
                        <button type='submit'
                            className="btn btn-primary"
                            disabled={!imageURL ? true : false}>Add Service</button>
                    </div>

                </form>
            </div>
            {/* </div> */}
        </div>
    );
};

export default AddService;