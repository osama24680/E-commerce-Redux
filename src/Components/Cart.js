import { useSelector, useDispatch } from 'react-redux'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai"
import {plusItem,minusItem} from "../ToolKit/productSlice"
const Cart = () => {

    let data = useSelector(state => state.product.cart)
    let dispatch = useDispatch()

    return (
        <div className="container my-4 ">
            {data.length > 0 ? (
                data.map(product => (
                    <div className="row py-4" key={product.id}>
                        <div className="col-md-6">
                            <img src={product.image} alt="" height="250px" width="230px" />
                        </div>
                        <div className="col-md-6">
                            <h3>{product.title}</h3>
                            <p className="lead fw-bold">{product.quantity} x {product.price} = ${product.quantity * product.price}</p>
                            <button className="btn btn-outline-dark me-4" onClick={() => dispatch(minusItem(product))}><AiOutlineMinusCircle /></button>
                            <span className="lead fw-bold me-3">{product.quantity} </span>
                            <button className="btn btn-outline-dark me-4" onClick={() => dispatch(plusItem(product))}><AiOutlinePlusCircle /></button>
                        </div>
                    </div>
                ))
            ) : <h1 className="text-center">You have no products.</h1>}
            <hr />
            <div className="text-center w-100">
                <p className="lead fw-bold">Total : {data.reduce((prevEl, currentEl) => prevEl + (currentEl.quantity * currentEl.price), 0).toFixed(2)} </p>
                
            </div>
        </div>
    )
}

export default Cart