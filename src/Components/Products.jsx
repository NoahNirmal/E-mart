import React, { useEffect, useState } from "react";
import { useRef } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart } from "../Redux/action";
import "./Products.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StarRatings from "react-star-ratings";


const Loading = () => {
  return (
    <>
      <div className="col-md-3">
        <Skeleton height={350} />
      </div>
      <div className="col-md-3">
        <Skeleton height={350} />
      </div>
      <div className="col-md-3">
        <Skeleton height={350} />
      </div>

      <div className="col-md-3">
        <Skeleton height={350} />
      </div>
    </>
  );
};


const ShowProducts = ({handleSearch,Filterproducts,active,searchvalue,filterarr}) => {
  const dispatch = useDispatch();

 


  return (
    <>
      <div className="buttons d-flex justify-content-center mb-5 pb-5">
        <button
          className={`btn btn-outline-dark me-2 ${
            active === "All" ? "active" : null
          }`}
          onClick={() => Filterproducts("All")}
        >
          {" "}
          All
        </button>
        <button
          className={`btn btn-outline-dark me-2 ${
            active === "men's clothing" ? "active" : null
          }`}
          onClick={() => Filterproducts("men's clothing")}
        >
          {" "}
          Men's Clothing
        </button>
        <button
          className={`btn btn-outline-dark me-2 ${
            active === "women's clothing" ? "active" : null
          }`}
          onClick={() => Filterproducts("women's clothing")}
        >
          {" "}
          Women's Clothing
        </button>
        <button
          className={`btn btn-outline-dark me-2 ${
            active === "jewelery" ? "active" : null
          }`}
          onClick={() => Filterproducts("jewelery")}
        >
          {" "}
          Jewellery's
        </button>
        <button
          className={`btn btn-outline-dark me-2 ${
            active === "electronics" ? "active" : null
          }`}
          onClick={() => Filterproducts("electronics")}
        >
          {" "}
          Electronic
        </button>
        <div className="col-md-3 ms-5">
          <input
            type="text"
            value={searchvalue}
            className="form-control "
            placeholder="Search your item"
            style={{ border: "1px solid black" }}
            onChange={handleSearch}
          />
        </div>
      </div>

      {filterarr.map((ele) => {
        return (
          <React.Fragment key={ele.id}>
            <div className="col-md-3 mb-5">
              <div className="card h-100 text-center p-3">
                <img
                  src={ele.image}
                  className="card-img-top"
                  alt={ele.title}
                  height="250px"
                />
                <div className="card-body">
                  <div className="card-body">
                    <div>
                      <h5 className="card-title mb-0">
                        {ele.title.substring(0, 12)}...
                      </h5>
                      <p className="card-text lead fw-bold">${ele.price}</p>
                    </div>
                    <div className="row">
                      <StarRatings
                        rating={ele.rating && ele.rating.rate}
                        starRatedColor="gold"
                        numberOfStars={5}
                        starDimension="20px"
                        starSpacing="2px"
                        className="star-ratings"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <button
                      className="btn btn-dark  px-2 py-2 mb-2"
                      onClick={() => {
                        dispatch(addCart(ele));
                        toast.success("Item added to cart!", {
                          position: toast.POSITION.TOP_RIGHT,
                          autoClose: 1000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "dark",
                        });
                      }}
                    >
                      Add to Cart
                    </button>
                    <NavLink
                      to={`/products/${ele.id}`}
                      className="btn btn-outline-dark "
                    >
                      More Details
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
};

export const Products = () => {
  const [products, SetProducts] = useState([]);
  const [filterarr, setFilterarr] = useState(products);
  const [isloading, setIsloading] = useState(false);
  const [active, setActive] = useState("All");
  const [searchvalue, setSearchvalue] = useState("");

  const componentMounted = useRef(true);

  useEffect(() => {
    const getProducts = async () => {
      setIsloading(true);
      const res = await fetch("https://emart-data.onrender.com/products");
      // console.log(data)

      if (componentMounted.current) {
        const data = await res.json();

        SetProducts(data);
        setFilterarr(data);
        setIsloading(false);
        // console.log(products,"filterdata")

        // console.log(filter,"filterdata")
      }

      return () => {
        componentMounted.current = false;
      };
    };

    getProducts();
  }, []);


  const Filterproducts = (cat) => {
    if (cat === "All") {
      setFilterarr(products);
      setActive(cat);
    } else {
      setActive(cat);
      const updatefilter = products.filter((ele) => ele.category === cat);
      setFilterarr(updatefilter);
    }
  };

  const handleSearch = (e) => {
    setSearchvalue(e.target.value);
    if (searchvalue.trim() === " ") {
      setFilterarr(products);
    } else {
      const searchproducts = products.filter((ele) => {
        return ele.title.toLowerCase().includes(searchvalue.toLowerCase());
      });
      console.log("searchproducts",searchproducts)
      setFilterarr(searchproducts);
    }
  };
  

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5 ">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {isloading ? <Loading /> : <ShowProducts searchvalue={searchvalue} Filterproducts ={Filterproducts} handleSearch={handleSearch} active={active} filterarr={filterarr}/>}
        </div>
      </div>

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
};
