import  { useEffect, useState } from 'react'
import './shop.css'
import { NavLink } from 'react-router-dom';
import {getProducts} from '../../utils/products'
const Shop = () =>{
    const [products,setproduct] = useState([])
    useEffect(() => {
        const loadProducts = async() => {
            const productsdata = await getProducts()
            setproduct(productsdata)
        }
        loadProducts()
        // setproduct(await getProducts())
    },[])

    const items = products.map((value) =>{
        return(
            <div key={value.id} className='parent p-3 col-12 col-md-4'>
                <NavLink to={"/product/" + value.id} className='child text-decoration-none'>
                    <img className='col-12' src={'http://localhost:8000'+value.src} alt={value.title} />
                    <div className='card-details'>
                        <h4>{value.title}</h4>
                        <span>{value.price}</span>
                    </div>
                </NavLink>
            </div>
        )
    })
    return(
        <section className='shop'>
           <div className='container'>
               <div className='shop-title text-center'>
                   <h3>OUR ONLINE STORE</h3>
                   <h2>Ceramic Collection</h2>
               </div>
                <div className='row shop-body'>
                    {items}
                </div>
           </div>
        </section>
    )
}
export default  Shop;
