import react from 'react'
import Coppyright from '../components/copyright/copyright';
import Footer from '../components/footer/footer';
import Heading from '../components/heading/heading';
import NAVBAR from '../components/navbar/navbar';
function Checkout () {
    return(
        <>
            <NAVBAR />
            <Heading brand='check-out' />
        
            <Footer />
            <Coppyright />
        </>
    )
}
export default Checkout