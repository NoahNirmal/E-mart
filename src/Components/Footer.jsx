import React from 'react';

const Footer = () => {
  return (
    // <footer className="bg-dark text-white py-4 ">
    //   <div className='container '>
    //     <div className='row  d-flex justify-content-between align-items-center'>
    //       <div className='col-ms-6'>
    //         <h5>Emart</h5>
    //         <p>A platform for all your shopping needs</p>
    //       </div>
    //       <div className='col-ms-3'>
    //         <h6>Quick Links</h6>
    //         <ul className="list-unstyled">
    //           <li><a href="/">Home</a></li>
    //           <li><a href="/products">Products</a></li>
    //           <li><a href="/cart">Cart</a></li>
    //           <li><a href="/contact">Contact</a></li>
    //         </ul>
    //       </div>
    //       <div  className='col-ms-3'>
    //         <h6>Contact Us</h6>
    //         <ul className="list-unstyled">
    //           <li>Email: info@emart.com</li>
    //           <li>Phone: +1 123 456 7890</li>
    //           <li>Address: 123 Main Street, City, Country</li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="text-center py-3 bg-secondary">
    //     <p className="mb-0">&copy; {new Date().getFullYear()} Emart. All rights reserved.</p>
    //   </div>
    // </footer>
    <footer className="bg-dark text-white text-center py-2">
    <div className="container">
      <p className="mb-0">&copy; {new Date().getFullYear()} Emart. All rights reserved.| Created by Noah Nirmal</p>
    </div>
  </footer>
  );
};

export default Footer;

