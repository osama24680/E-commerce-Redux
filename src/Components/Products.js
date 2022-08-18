import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getProductsX } from "../ToolKit/productSlice"
import { Link } from 'react-router-dom';
import Loading from './Loading';
const Products = () => {

    let dataProduct = useSelector(state => state.product)
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductsX())
    }, [dispatch])

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className={`${dataProduct.active === "All" ? ' btn btn-dark me-2' : 'btn btn-outline-dark me-2'}  `} onClick={(e) => dispatch(getProductsX())}>All</button>
                    <button className={`${dataProduct.active === "Men's Clothing" ? ' btn btn-dark me-2' : 'btn btn-outline-dark me-2'}  `} onClick={(e) => dispatch(getProductsX(e.target.textContent))}>Men's Clothing</button>
                    <button className={`${dataProduct.active === "Women's Clothing" ? ' btn btn-dark me-2' : 'btn btn-outline-dark me-2'}  `} onClick={(e) => dispatch(getProductsX(e.target.textContent))}>Women's Clothing</button>
                    <button className={`${dataProduct.active === "Jewelery" ? ' btn btn-dark me-2' : 'btn btn-outline-dark me-2'}  `} onClick={(e) => dispatch(getProductsX(e.target.textContent))}>Jewelery</button>
                    <button className={`${dataProduct.active === "Electronics" ? ' btn btn-dark me-2' : 'btn btn-outline-dark me-2'}  `} onClick={(e) => dispatch(getProductsX(e.target.textContent))}>Electronics</button>
                </div>
                {dataProduct.filter?.map(product => (
                    <div className="col-md-3 mb-4" key={product.id}>
                        <div className="card h-100 text-center p-4" >
                            <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                            <div className="card-body">
                                <h5 className="card-title mb-4">{product.title.substring(0, 12)}</h5>
                                <Link to={`/productDetails/${product.id}`} className="btn btn-outline-dark">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        )
    }

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest Products </h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {!dataProduct.loading ? < ShowProducts /> : <Loading />}
                </div>
            </div>
        </div>
    )
}

export default Products
