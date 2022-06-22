import Coppyright from '../components/copyright/copyright';
import Heading from '../components/heading/heading';
import NAVBAR from '../components/navbar/navbar';
import Productdetail from '../components/productdetail/productdetial';
function Productpage(){
    return(
        <>
            <NAVBAR />
            <Heading brand='Product Page' />
            <Productdetail />
            <Coppyright />
        </>
    )
}
export default Productpage;