import './productcollection.css';
import { NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductsByCategory } from '../../utils/categories';



const ProductCollection = () => {
    const [data , setData] = useState([])
    const {category} = useParams()

    useEffect(() => {
        // get catefory name
        const loadProducts = async () =>{
            const products = await getProductsByCategory(category)
            setData(products)
        }
        loadProducts()
    },[])
    const item = data.map((ele) => {
        return(
            <div key={ele.id} className="parent col-md-4 col-12">
                <NavLink to={"/product/" + ele.id} className="child col-12">
                    <img src={'http://localhost:8000'+ele.src} alt={ele.title} />
                    <div className="content">
                    <h6>{ele.title}</h6>
                    <span>{ele.price}</span>
                    </div>
                </NavLink>
            </div>
        )
    })
    return(
        <section className='Productcollection'>
            <div className='container'>
                <div className='d-flex flex-wrap'>
                    {item}
                </div>
                <div className='btn'>
                <NavLink className='link' to='/shop'>BACK TO SHOP</NavLink>
                </div>
            </div>
        </section>
    )
}
export default ProductCollection;