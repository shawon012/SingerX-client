import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers, FaChalkboardTeacher } from 'react-icons/fa';
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";


const Dashboard = () => {
    const [carts] = useCart();

    // TODO: load data from the server to have dynamic isAdmin based on Data
    const isAdmin = true;
    // const [isAdmin] = useAdmin();
    const[isInstructor] = useInstructor();

    return (
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">

                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/manageClasses"><FaHome></FaHome> Manage Classes</NavLink></li>
                            <li><NavLink to="/dashboard/manageUsers"> <FaUtensils></FaUtensils> Manage Users</NavLink></li>

                        </> : isInstructor ? 
                            <>
                                <li>
                                    <NavLink to="/dashboard/addAClass">
                                        <FaHome></FaHome> Add A Class
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/myCourses">
                                        <FaChalkboardTeacher></FaChalkboardTeacher> My Classes
                                    </NavLink>
                                </li>
                            </>
                        :<>
                            <li><NavLink to="/dashboard/mySelectedClasses"><FaHome></FaHome> My Selected Classes</NavLink></li>
                            <li><NavLink to="/dashboard/myEnrolledClasses"><FaCalendarAlt></FaCalendarAlt> My Enrolled Classes</NavLink></li>
                            <li><NavLink to="/dashboard/myPaymentHistory"><FaWallet></FaWallet> Payment History</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/myCart"><FaShoppingCart></FaShoppingCart> My Cart
                                    <span className="badge inl badge-secondary">+{carts?.length || 0}</span>
                                </NavLink>

                            </li>
                        </>
                    }




                <div className="divider"></div>
                <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                <li><NavLink to="/classes"> Music Classes</NavLink></li>
                <li><NavLink to="/instructors">Instructors</NavLink></li>
            </ul>

        </div>
        </div >
    );
};

export default Dashboard;