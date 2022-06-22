import { useState,useEffect } from 'react';
import { useParams,NavLink } from 'react-router-dom'
import './productdetail.css'
import {getProductbyId} from '../../utils/products'
function Productdetail() {
    const {id} = useParams();
    const [product,setproduct] = useState({})
    useEffect(()=>{
        const loadProduct = async() => {
            const product = await getProductbyId(id)
            setproduct(product)
        }   
        loadProduct()
    },[])
    return(
        <section className='productdetail'>
            <div className='container'>
                <div className='row'>
                    <div className='img-box col-12 col-md-6'>
                        <img src={'http://localhost:8000'+product.src} alt={product.title} />
                    </div>
                    <div className='content-box col-12 col-md-6'>
                        <h4>PRODUCT DETAIL</h4>
                        <h2>{product.title}</h2>
                        <h5>{product.price}</h5>
                        <NavLink className='link text-decoration-none' to={`${product.catogryurl}`} >Category:<span>{product.catogrey}</span></NavLink>
                        <p>The attractions of ceramics lie partly in its contradictions. It is both difficult and easy, with an element beyond our control. It is both extremely fragile and durable. Like 'Sumi' ink painting, it does not lend itself to erasures and indecision.</p>
                        <h5>Track Number:<span>{product.id}</span></h5>
                        <h5>Quantity</h5>
                        <input type='number'/>
                        <button>add to cart</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Productdetail;