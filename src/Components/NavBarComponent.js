import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import './NavBarComponent.css'

function NavBarComponent(props) {
    const history = useHistory();

    const [searchQuery, setSearchQuery] = useState('')

    const handelSearch = (e) => {
        setSearchQuery(e.target.value)
    }

    const logout = () => {
        localStorage.setItem("loggedInUser", '');
        history.push('/login');
    }
    const user = localStorage.getItem('loggedInUser');
    console.log("userlogin",user)

    return (
        <>
        <nav className="navbar navbar-expand-lg sticky-top" style={{"background" :"#fff"}}>
            <div className="container-fluid ">
                <a href="/" class="text-decoration-none  navbar-brand navbar-brand-title me-5"><i className=" fas fa-cart-arrow-down text-success"></i> React E-Commerce</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" ></span>
                </button>
            <div className="container">
                <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item me-2">
                            <Link className="nav-link active text-light bg-success rounded"  aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item me-2 nav-header">
                            <Link className="nav-link active text-secondary lnk"  aria-current="page" to="/products">products</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item me-2 nav-header text-secondary">
                            <Link to='/login' className="nav-link active"  aria-current="page" href="#">Login</Link>
                        </li>
                        <li className="nav-item me-2 nav-header text-secondary">
                            <Link to='/register' className="nav-link active"  aria-current="page" href="#">Register</Link>
                        </li>
                    </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Product Search" aria-label="Search" 
                                onChange={(e)=> handelSearch(e)} value={searchQuery}
                            />
                            <Link to={`/products/${searchQuery}`} className="btn search-lnk" type="submit">Search</Link>
                        </form>
                        <div className="icons ms-2">
                            <Link to='/favorit' className="fas fa-heart"></Link>
                            <Link to='/cart' className="fas fa-shopping-cart"></Link>
                            {user == '' ? <Link to='/login' className="fa-solid fa-right-to-bracket fas" ></Link>
                            : <a  className="fa-solid fa-right-from-bracket fas" onClick={logout}></a>}
                    </div>
                </div>
              </div>
            </div>
        </nav>
        
        </>



    )
}
export default NavBarComponent;