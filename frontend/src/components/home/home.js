import React from "react";
import { NavLink } from "react-router-dom";
import './home.css';
function Home(){
    return(
        <div className="home">
            <div className="container">
                <div className="row">
                    <div className="home-content text-center text-lg-start col-12 col-lg-6 d-flex align-items-center">
                           <div>
                           <h5>POMPEO POTTERY</h5>
                           <h1>Unique Porcelain <span>&</span> Stone Collection</h1>
                           <h6>Unique & modern pottery made by our master in porcelain & stones</h6>
                            <NavLink className='btn' to='/shop'>SHOP COLLECTION</NavLink>
                           </div>
                    </div>
                    <div className="home-img-box col-12 col-lg-6">
                        <img className="col-12 w-100 h-100" src="assets/img/home.png" alt="nabil"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;