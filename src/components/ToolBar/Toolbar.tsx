import { NavLink } from "react-router-dom";

const Toolbar = () => {
    return (
        <nav className="navbar navbar-light bg-light mb-4">
            <div className="container d-flex align-items-center">
        <span className="navbar-brand fs-4 mb-0">
          GoldCraft
        </span>
                <ul className="navbar-nav flex-row gap-4 ms-auto">
                    <li className="nav-item">
                        <NavLink
                            to="/pages/about"
                            className={({ isActive }) =>
                                "nav-link text-black p-0" + (isActive ? " active" : "")
                            }
                        >
                            About
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink
                            to="/pages/history"
                            className={({ isActive }) =>
                                "nav-link text-black p-0" + (isActive ? " active" : "")
                            }
                        >
                            History
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink
                            to="/pages/products"
                            className={({ isActive }) =>
                                "nav-link text-black p-0" + (isActive ? " active" : "")
                            }
                        >
                            Products
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink
                            to="/pages/process"
                            className={({ isActive }) =>
                                "nav-link text-black p-0" + (isActive ? " active" : "")
                            }
                        >
                            Process
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink
                            to="/pages/contacts"
                            className={({ isActive }) =>
                                "nav-link text-black p-0" + (isActive ? " active" : "")
                            }
                        >
                            Contacts
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink
                            to="/pages/admin"
                            className={({ isActive }) =>
                                "nav-link text-danger p-0" + (isActive ? " active" : "")
                            }
                        >
                            Admin
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Toolbar;
