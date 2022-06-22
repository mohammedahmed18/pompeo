import React from "react";
import { NavLink } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import "./details.css";
function Deatials() {
    return (
        <section className="deatials">
            <div className="container">
                <div className="row parent">
                    <Fade left>
                    <div className="img-box col-md-6 col-12 d-flex align-items-center justify-content-center"> 
                        <img src="assets/img/blackvase.png"   alt=""/>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="content-box col-md-6 col-12 my-4">
                        <h3>Gold & Black Pottery</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute.</p>
                        <NavLink className='btn' to="/product">View Details</NavLink>
                    </div>
                    </Fade>
                </div>
                <div className="row parent">
                    <Fade left>
                    <div className="content-box col-md-6 col-12 my-4">
                        <h3>Orange Ceramic</h3>
                        <p>Pri cu dico labores officiis, odio principes complectitur ad sea. Sea id doctus forensibus, nec lorem vocent aliquam eu. Aliquid definitiones id cum, ad meliore perpetua referrentur sed. Quas suscipit ad mea verear vivendo tincidunt.</p>
                        <NavLink className='btn' to="/product">View Details</NavLink>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="img-box col-md-6 col-12 d-flex align-items-center justify-content-center">
                    <img src="assets/img/pinkvase.png"  alt="pinkvase"/>
                    </div>
                    </Fade>
                </div>
            </div>
        </section>
    )
}
export default Deatials;