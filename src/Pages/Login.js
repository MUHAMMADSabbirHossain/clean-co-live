import React from 'react';

const Login = () => {
    return (
        <div className="h-screen bg-accent flex justify-center items-center">
            {/* <div className="hero-content flex-col lg:flex-row-reverse"> */}

            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body">
                    <h1 className='text-2xl text-center'>Login</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div className="divider">OR</div>
                    <button className="btn btn-glass hover:btn-accent">Continue with Google</button>
                </form>
            </div>
            {/* </div> */}
        </div>
    );
};

export default Login;