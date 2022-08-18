import React, {useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Loading from './Loading';
import { AiOutlineStar } from "react-icons/ai"
import { useSelector, useDispatch } from "react-redux"
import { getProductDetails, addItem } from "../ToolKit/productSlice"
import { ToastContainer } from 'react-toastify';

const ProductDetails = () => {
    let comingData = useSelector(state => state.product)
    let seekingProduct = useSelector(state => state)
    let dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getProductDetails(id))
    }, [])

    function ShowProduct() {
        return (
            <>
                <div className="col-md-6" >
                    <img src={comingData.productDetails.image} alt="" height="400px" width="400px" />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50 ">{comingData.productDetails.category}</h4>
                    <h1 className="display-5 ">{comingData.productDetails.title}</h1>
                    <p className="lead fw-bolder">Rating : {comingData.productDetails.rating && comingData.productDetails.rating.rate} <AiOutlineStar /></p>
                    <h3 className="fw-bold my-4 display-6">$ {comingData.productDetails.price}</h3>
                    <p className="lead">$ {comingData.productDetails.description}</p>
                    <button className="btn btn-outline-dark" onClick={() => dispatch(addItem(seekingProduct.product.productDetails)) } >Add to Cart</button>
                    {/* onClick={() => dispatch({ type: "ADD_ITEM", payload: product }) } */}
                    <Link to="/cart" className="btn btn-dark ms-2">Go to Cart</Link>
                </div>

            </>
        )
    }
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row py-3">
                    {comingData.loading ? <Loading type="details" /> : <ShowProduct />}
                </div>
                <ToastContainer />
            </div>
        </div>
    )
}

export default ProductDetails
