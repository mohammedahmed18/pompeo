import Coppyright from '../components/copyright/copyright';
import Footer from '../components/footer/footer';
import Heading from '../components/heading/heading';
import NAVBAR from '../components/navbar/navbar';
import Mugcollection from '../components/mug collection/mugcollection'
function Mugpage(){
    return(
        <>
            <NAVBAR />
            <Heading brand='mugs' />
            <Mugcollection/>
            <Footer />
            <Coppyright />
        </>
    )
}
export default Mugpage;