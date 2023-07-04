import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import Skeleton from "react-loading-skeleton"
import { NavLink } from 'react-router-dom'








export const Products = () => {
    const [products, SetProducts] = useState([])
    const [filter, setFilter] = useState(products)
    const [isloading, setIsloading] = useState(false)
    const [active, setActive] = useState("All")

    const componentMounted = useRef(true)

    useEffect(() => {
        const getProducts = async () => {
            setIsloading(true)
            const res = await fetch('https://fakestoreapi.com/products')
            // console.log(data)

            if (componentMounted.current) {
                const data = await res.json()

                SetProducts(data)
                setFilter(data)
                setIsloading(false)
                // console.log(products,"filterdata")

                // console.log(filter,"filterdata")


            }



            return () => {
                componentMounted.current = false
            }
        }

        getProducts()




    }, [])




    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton  height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton  height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton  height={350}/>
                </div>

                <div className="col-md-3">
                    <Skeleton  height={350}/>
                </div>
            </>
        )
    }

    const Filterproducts=(cat)=>{
        if(cat==="All"){
            setFilter(products)
            setActive(cat)
        }
        else{
            setActive(cat)
            const updatefilter = products.filter((ele)=>ele.category === cat)
            setFilter(updatefilter)
        }
     

    }





    const ShowProducts = () => {
        return (
            <>
                <div  className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className={`btn btn-outline-dark me-2 ${active === "All"?"active": null}` } onClick={()=>Filterproducts("All")}> All</button>
                    <button className={`btn btn-outline-dark me-2 ${active === "men's clothing"?"active": null}` } onClick={()=>Filterproducts("men's clothing")}> Men's Clothing</button>
                    <button className={`btn btn-outline-dark me-2 ${active === "women's clothing"?"active": null}` } onClick={()=>Filterproducts("women's clothing")}> Women's Clothing</button>
                    <button className={`btn btn-outline-dark me-2 ${active === "jewelery"?"active": null}` } onClick={()=>Filterproducts("jewelery")}> Jewellery's</button>
                    <button className={`btn btn-outline-dark me-2 ${active === "electronics"?"active": null}` } onClick={()=>Filterproducts("electronics")}> Electronic</button>

                </div>

                {
                    filter.map((ele) => {
                        return (
                            <React.Fragment key={ele.id}>
                                <div className="col-md-3 mb-4">
                                    <div className="card h-100 text-center p-4" >
                                        <img src={ele.image} className="card-img-top" alt={ele.title} height="250px"/>
                                        <div className="card-body">
                                            <h5 className="card-title mb-0">{ele.title.substring(0,12)}...</h5>
                                            <p className="card-text lead fw-bold">${ele.price}</p>
                                            <NavLink to={`/products/${ele.id}`} className="btn btn-outline-dark">Buy now</NavLink>
                                        </div>
                                    </div>

                                </div>
                                </React.Fragment>
                        )
                    })
                }
            </>
        )
    }


    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 ">
                        <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {
                        isloading ? <Loading /> : <ShowProducts />
                    }


                </div>
            </div>


        </div>
    )
}
