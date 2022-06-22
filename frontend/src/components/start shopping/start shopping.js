import { NavLink } from "react-router-dom";
import "./start shoping.css"
function Startshopping() {
    return(
        <section className="startshopping">
            <div className="container">
                <div className="d-flex align-items-center w-50">
                    <div>
                        <h3>POMPEO POTTERY</h3>
                        <h2>Ready to start shopping?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum.</p>
                        <NavLink className='btn' to='/shop'>NEW COLLECTION</NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Startshopping;