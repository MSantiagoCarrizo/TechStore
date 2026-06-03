import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { CartWidget } from "../Cart/CartWidget";
import logo from "../../assets/logo-techstore.png";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar px-4">

            <NavLink to="/" className="navbar-brand d-flex align-items-center gap-2" >
                <img src={logo} alt="TechStore Logo" className="logo-img" />

                <span className="logo-text">
                    TechStore
                </span>
            </NavLink>

            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTechStore"
                aria-controls="navbarTechStore"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTechStore" >

                <ul className="navbar-nav mx-auto align-items-lg-center gap-lg-4">

                    <li className="nav-item">
                        <NavLink to="/" className="nav-link custom-link" >
                            Productos
                        </NavLink>
                    </li>

                    <li className="nav-item dropdown">

                        <button className="btn dropdown-toggle category-btn" data-bs-toggle="dropdown" aria-expanded="false" >
                            Categorías
                        </button>

                        <ul className="dropdown-menu custom-dropdown">

                            <li>
                                <NavLink to="/category/monitores" className="dropdown-item" >
                                    Monitores
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/category/smartphones" className="dropdown-item" >
                                    Smartphones
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/category/audio" className="dropdown-item" >
                                    Audio
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/category/notebooks" className="dropdown-item" >
                                    Notebooks
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/category/accesorios" className="dropdown-item" >
                                    Accesorios
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/category/tablets" className="dropdown-item" >
                                    Tablets
                                </NavLink>
                            </li>

                        </ul>

                    </li>

                    <li className="nav-item">
                        <NavLink to="/contacto" className="nav-link custom-link" >
                            Contacto
                        </NavLink>
                    </li>

                </ul>

                <NavLink to="/cart" className="cart-icon" >
                    <CartWidget />
                </NavLink>

            </div>

        </nav>
    )
}