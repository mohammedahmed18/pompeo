import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {getCategories} from '../../utils/categories'
import './categories.css'
function CATEGORIES() {
    // انا عدلت دي يا مصطفى
    const [data , setData] = useState([])
    useEffect(() => {
        const loadCategories = async () => {
            const cats = await getCategories()
            setData(cats)
        }
        loadCategories()
    },[])
    const categories = data.map((el)=>{   
        return (
                <div key={el.id} className="parent col-md-3 col-12">
                    <NavLink  to={'/category/'+el.title} className={el.class}>
                        <div className="child text-center">
                            <img src={'http://localhost:8000'+el.src} alt={el.title+' image'} />
                            <h3 className="title">{el.title}</h3>
                        </div>
                    </NavLink>
                </div>   
        );   
    });  
    return (
        <section className="categories">
            <div className="container">
                <div className="text-center categories-header">
                    <h3>PRODUCT CATEGORIES</h3>
                    <h2>Porcelain <span>&</span> Pottery</h2>
                </div>
                <div  className="categories-body  d-flex flex-wrap justify-content-between align-items-center">
                    {categories}
                </div>
                 
                <div className="categories-footer row my-sm-5">
                    <div className=" col-md-6 col-12 my-sm-5">
                        <h2>Hand GraftedPottery since 1990</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
                    </div>
                    <div className=" col-md-6 col-12 my-sm-5">
                        <h2>We Provide PremiumPottery Produts</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
                    </div>
                </div>
            </div>
        </section>
    );
  }
  
  export default CATEGORIES;