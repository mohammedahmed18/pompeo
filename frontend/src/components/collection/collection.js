import { useState } from "react";
import { NavLink } from "react-router-dom";
import datacollection from '../../data/datacollection.json'
import "./collection.css"
function Collection () {
   const collection = datacollection.map((ele) => {
        return(
            <div key={ele.id} className="parent col-md-4 col-12">
                <NavLink to={ele.url} className="child col-12">
                    <img src={ele.src} alt={ele.name} />
                    <div className="content">
                    <h6>{ele.name}</h6>
                    <span>{ele.price}</span>
                    </div>
                </NavLink>
            </div>
        )
    });
    return (
        <section className="collection">
           <div className="container">
                <div className="heading">
                    <h5>OUR ONLINE STORE</h5>
                    <h2>Pottery Collection</h2>
                </div>
                <div className="row">
                    {collection}
                </div>
                <div className="btn">
                <NavLink className='link' to="/shop" >VIEW ALL PRODUCTS</NavLink>
                </div> 
           </div> 
        </section>
    )
}
export default Collection