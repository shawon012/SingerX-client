import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const ClassItem = ({ item }) => {
    const { image, name, instructorName, availableSeats, totalSeats, price, enrolledStudents } = item;
    const [error, setError] = useState(null);
    const { user } = useContext(AuthContext);
    const handleSelect = () => {
        if (!user) {
            setError('Please log in to select the course.');
            return;
        }

        if (availableSeats === 0) {
            setError('This course is currently full.');
            return;
        }

        if (user.role === 'admin' || user.role === 'instructor') {
            setError('Only students can select the course.');
            return;
        }

    };
    return (
        <div className={`mx-auto ${availableSeats === 0 ? 'bg-red-500' : 'bg-base-100'
            }`}>
            <div className='mx-auto'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={image} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}!</h2>
                        <p>Instructor Name: {instructorName}</p>
                        <p>Available Seats: {availableSeats}</p>
                        <p>Price: {price}</p>
                        <div className="card-actions justify-end">
                            <button onClick={handleSelect}
                                disabled={availableSeats === 0 || user?.role === 'admin' || user?.role === 'instructor'} className="btn btn-primary">Enroll Now
                            </button>
                            {error && <p className="text-danger">{error}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ClassItem;