import Coppyright from '../components/copyright/copyright';
import Footer from '../components/footer/footer';
import Heading from '../components/heading/heading';
import NAVBAR from '../components/navbar/navbar';
import Platecollection from '../components/plate collection/platecollection';
function Platepage(){
    return(
        <>
            <NAVBAR />
            <Heading brand='plate' />
            <Platecollection />
            <Footer />
            <Coppyright />
        </>
    )
}
export default Platepage;