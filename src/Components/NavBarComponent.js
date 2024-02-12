import { useState } from "react";
import { Link } from "react-router-dom"

import './NavBarComponent.css'

function NavBarComponent() {

    const [searchQuery, setSearchQuery] = useState('')

    const handelSearch = (e) => {
        setSearchQuery(e.target.value)
    }

    return (
        <>
        <nav className="navbar navbar-expand-lg sticky-top" style={{"background" :"#fff"}}>
            <div className="container-fluid ">
                <a className="navbar-brand" href="/">
                {/* <img src="product-logo.jpg" alt="products Logo" width="50" height="50" className="d-inline-block me-2" /> */}
                Ecommerce app
                {/* <span className="ms-2"></span> */}
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" ></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active"  aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active"  aria-current="page" to="/products">products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active"  aria-current="page" to="/favorit">Favourit</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/login' className="nav-link active"  aria-current="page" href="#">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/register' className="nav-link active"  aria-current="page" href="#">Register</Link>
                        </li>
                    </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Product Search" aria-label="Search" 
                                onChange={(e)=> handelSearch(e)} value={searchQuery}
                            />
                            <Link to={`/products/${searchQuery}`} className="btn search-lnk" type="submit">Search</Link>
                        </form>
                </div>
            </div>
        </nav>
        
        </>



    )
}
export default NavBarComponent;