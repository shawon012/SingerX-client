import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const [error, setError] = useState(null);
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if (!email || !password) {
            setError('Please fill up all fields.');
            return;
        }

        signIn(email, password)
            .then(result => {
                // const user = result.user;
                console.log(result);
                navigate(from, { replace: true })



            })
            .catch(error => setError(error));

    }
    return (
        <div className="hero pb-20 pt-5 bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse mt-5">
                <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                    <div className="card-body">

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

                        <div>
                            <p><small>Are You A New User? Please <Link to='/signUp'>SignUp Now!</Link></small></p>
                            {error && <p className='text-danger'>{error}</p>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">LogIn</button>
                        </div>
                        <SocialLogin></SocialLogin>
                    </div>
                </form>
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-center font-bold">LogIn Now!</h1>
                    <p className="py-6">Unlock the magic of music by logging into our Music School. Join us in discovering melody, rhythm, and endless possibilities. Embrace your inner artist, learn from dedicated instructors, and access a wealth of resources. Take the first step towards your musical dreams. Login now and let the music inspire you!</p>
                </div>
            </div>
            
        </div>
    );
};

export default Login;