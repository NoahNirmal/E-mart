import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addCart, deItem, delCart } from '../Redux/action'
import { Login } from './Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const Cart = () => {
    const CartData = useSelector((state)=>state.reducer)
    const dispatch = useDispatch()
    console.log(CartData.login)
    const handleAdd = (item) => {
        dispatch(addCart(item))
    }
    
    const handlewholeDel = (item) => {
        dispatch(deItem(item))
        toast.error('Item deleted from cart!!', {
            position: "top-right",
            autoClose: 800,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }
    const handleDel = (item) => {
        dispatch(delCart(item))
       
    }

    const emptyCart = () => {
        return(
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        )
    }
    const cartItems = (product) => {
        console.log(product,"cart")
        return(
            <>
                <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                <button onClick={()=>handlewholeDel(product)} className="btn-close float-end" aria-label="Close"></button>

                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={product.image} alt={product.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{product.title}</h3>
                            <p className="lead fw-bold">
                                {product.qty} X ${product.price} = ${product.qty * product.price}
                            </p>
                            <button className="btn btn-outline-dark me-4" onClick={()=>handleDel(product)}>
                                {/* <i className="fa fa-minus"></i> */}
                                -
                            </button>
                            <button className="btn btn-outline-dark" onClick={()=> handleAdd(product)}>
                                {/* <i className="fa fa-plus"></i> */}
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )

    }
    const buttons = () => {
        return(
            <>
                <div className="container">
                    <div className="row">
                        <NavLink to="/checkout" className="btn btn-outline-dark mb-5 w-25 mx-auto">
                            Proceed to Checkout
                        </NavLink>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div>
            {CartData.login?(<>
                {CartData.Cart.length === 0 && emptyCart()}
            {CartData.Cart.length !== 0 && CartData.Cart.map(cartItems)}
            {CartData.Cart.length !== 0 && buttons()}
        
            </>):<Login />}

            <ToastContainer
position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
           
        </div>
    );
}
