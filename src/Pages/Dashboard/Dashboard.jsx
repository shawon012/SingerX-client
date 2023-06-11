import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers, FaChalkboardTeacher, FaPeopleArrows, FaMusic } from 'react-icons/fa';
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";


const Dashboard = () => {
    const [carts] = useCart();

    // TODO: load data from the server to have dynamic isAdmin based on Data
    // const isAdmin = true;
    // const isInstructor = true;
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    console.log(isInstructor);

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {
                            isAdmin ? <>
                                <li><NavLink to="/dashboard/manageClasses"><FaHome></FaHome> Manage Classes</NavLink></li>
                                <li><NavLink to="/dashboard/manageUsers"> <FaPeopleArrows></FaPeopleArrows>  Manage Users</NavLink></li>

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
                                : <>

                                    <li><NavLink to="/dashboard/myEnrolledClasses"><FaCalendarAlt></FaCalendarAlt> My Enrolled Classes</NavLink></li>
                                    <li><NavLink to="/dashboard/myPaymentHistory"><FaWallet></FaWallet> Payment History</NavLink></li>
                                    <li>
                                        <NavLink to="/dashboard/mySelectedClasses"><FaShoppingCart></FaShoppingCart> My Selected Classes
                                            <span className="badge inl badge-secondary">+{carts?.length || 0}</span>
                                        </NavLink>

                                    </li>
                                </>
                        }




                        <div className="divider"></div>
                        <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                        <li><NavLink to="/classes"> <FaMusic></FaMusic> Music Classes</NavLink></li>
                        <li><NavLink to="/instructors"> <FaChalkboardTeacher></FaChalkboardTeacher> Instructors</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;