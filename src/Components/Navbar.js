import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai"
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"
const Navbar = () => {
    let data = useSelector(state => state.product.cart)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div className="container">
                    <Link className="navbar-brand fw-bold fs-4" to="/home">E-commerce</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="Products">Products</Link>
                            </li>
                        </ul>
                        <div className="buttons  m-2">
                            <Link to="Cart" className='btn btn-outline-dark'> <AiOutlineShoppingCart className='me-2' />Cart ({data.length})</Link>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar