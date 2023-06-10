import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';


const SignUp = () => {
    const [error, setError] = useState(null);
    const { createUser } = useContext(AuthContext);
    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const displayName = form.name.value;
        console.log(displayName)
        const photoURL = event.target.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (!email || !password || !photoURL || !displayName) {
            setError('Please fill in all fields.');
            return;
        }


        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        if (!/[A-Z]/.test(password)) {
            setError('Password must contain at least one capital letter.');
            return;
        }

        if (!/[!@#$%^&*]/.test(password)) {
            setError('Password must contain at least one special character.');
            return;
        }

        createUser(email, password, photoURL, displayName);

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-center font-bold">SignUp now!</h1>
                    <p className="py-6">Discover the joy of music and unlock your artistic potential by signing up for our Music School. Join a community of passionate musicians, learn from talented instructors, and embark on a musical adventure like no other. Don't wait any longer, create your account today and let the melody of your dreams guide you to new heights.</p>
                </div>
               
                    <form onSubmit={handleSignup} className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered" />
                            </div>
                            <div>
                                <p><small>Already Registered? Please <Link to='/login'>Login!</Link></small></p>
                                {error && <p className='text-danger'>{error}</p>}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">SignUp</button>
                            </div>

                        </div>
                        <SocialLogin></SocialLogin>
                    </form>
                    
              
                
            </div>
        </div>
    );
};

export default SignUp;