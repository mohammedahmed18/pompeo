import './lastest news.css'
import { } from 'react-icons'
function Lastest_nwes(params) {
    return (
        <section className='lastestnwes text-center'>
            <div className='img-box'>
                <img src='assets/img/lastest news.png' alt='news' />
            </div>
            <h4>LATEST NEWS</h4>
            <h2>Latest news <span>&</span> New updates</h2>
            <div className='subscribe-box d-flex justify-content-center'>
                <input type='text' />
                <button>subscribe</button>
            </div>

        </section>
    )
}
export default Lastest_nwes;