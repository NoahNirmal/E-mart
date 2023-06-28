import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { addCart } from '../Redux/action'

export const ProductDetails = () => {
    const {id} =useParams()
    const [details, setDetails] = useState([])
    const [isloading, setIsloading] = useState(false)

     const dispatch =useDispatch()

     const CartData = useSelector((state)=>state.reducer.Cart)
    console.log(CartData)

    useEffect(()=>{

        const getProductDetails = async ()=>{
            setIsloading(true)
            const res = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await res.json()
            // console.log(data)
            setDetails(data)
            setIsloading(false)
        }

    getProductDetails()

    },[id])

    const Loading =()=>{
        return(

            <>
            
            <div className="col-md-6">
                <Skeleton height={400} />
            </div>
            <div className="col-md-6" style={{lineHeight:2}}>
                <Skeleton height={50}  width={300}/>
                <Skeleton height={75}  />
                <Skeleton height={25}  width={150}/>
                <Skeleton height={50}  />
                <Skeleton height={150} />
                <Skeleton height={50} width={100} />
                <Skeleton height={50} width={100} style={{marginLeft:6}}/>






            </div>
            </>
        )
    }


    const ShowProductDetails =()=>{
        return(

            <>
            <div className="col-md-6">
                <img src={details.image} alt={details.title} height="400px" width="400px"/>
            </div>
            <div className="col-md-6">
                <h4 className='text-uppercase text-black-50'>{details.category}</h4>
                <h1 className='display-5'>{details.title}</h1>
                <p className='lead fw-bolder' >Rating {details.rating && details.rating.rate}</p>

                <h3 className='display-5 fw-bold my-4'> $ {details.price}</h3>
                <p className="lead">{details.description}</p>
                <button className="btn btn-outline-dark px-4 py-2" onClick={()=>{
                    dispatch(addCart(details))
                }}> Add to Cart</button>
                <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2"> Go to Cart</NavLink>
            </div>
            </>
        )
    }



  return (
    <div>
 <div className="container py-5">
    <div className="row py-5">
    {
            
            isloading ? <Loading /> :<ShowProductDetails/>
        }

    </div>
 </div>
      
    </div>
  )
}
