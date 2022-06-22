import { useParams } from 'react-router';
import Coppyright from '../components/copyright/copyright';
import Footer from '../components/footer/footer';
import Heading from '../components/heading/heading';
import NAVBAR from '../components/navbar/navbar'
import ProductCollection from '../components/productcollection/productcollection';
function CategoryProducts(){
    const {category} = useParams()
    return(
        <>
            <NAVBAR />
            <Heading brand={category} />
            <ProductCollection/>
            <Footer />
            <Coppyright />
        </>
    )
}
export default CategoryProducts;