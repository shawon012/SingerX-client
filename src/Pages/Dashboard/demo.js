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
                <li><NavLink to="/classes"> Music Classes</NavLink></li>
                <li><NavLink to="/instructors">Instructors</NavLink></li>
            </ul>

        </div>
        </div >