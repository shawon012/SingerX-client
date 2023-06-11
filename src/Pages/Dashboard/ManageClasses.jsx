import { useQuery } from "@tanstack/react-query";
import {  FaSurprise, FaTrashAlt} from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useState } from "react";



const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        return res.data;
    })

    const handleUpdateApproved = clas =>{
        fetch(`http://localhost:5000/classes/approve/${clas._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${clas.name} is Approved Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    const handleUpdateDenied = clas =>{
        fetch(`http://localhost:5000/classes/deny/${clas._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${clas.name} is Denied Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    return (
        <div className="w-full">
            
            <h3 className="text-3xl font-semibold my-4">Total Courses: {classes.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Approve</th>
                            <th>Deny</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((clas, index) => <tr key={clas._id}>
                                <th>{index + 1}</th>
                                <td><img className="h-6 w-6" src={clas.image} alt="" /></td>
                                <td>{clas.name}</td>
                                <td>{clas.instructorName}</td>
                                <td>{clas.email}</td>
                                <td>{clas.availableSeats}</td>
                                <td>{clas.price}</td>
                                <td>{clas.status}</td>
                                <td>
                                    <button  onClick={() => handleUpdateApproved(clas)} className="btn btn-ghost bg-orange-600  text-white"><FaSurprise></FaSurprise> </button> 
                                    </td>
                                <td><button  onClick={() => handleUpdateDenied(clas)} className="btn btn-ghost bg-red-600  text-white"> <FaTrashAlt></FaTrashAlt> </button></td>
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;