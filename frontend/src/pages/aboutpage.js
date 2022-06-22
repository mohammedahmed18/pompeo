import NAVBAR from '../components/navbar/navbar';
import CATEGORIES from '../components/categories/categories';
import Footer from '../components/footer/footer';
import Coppyright from '../components/copyright/copyright';
import Aboutheading from '../components/aboutheading/aboutheading';
function Aboutpage() {
  return (
      <>
           <NAVBAR />
            <Aboutheading />
           <CATEGORIES /> 
           <Footer />
           <Coppyright />
      </>
  );
}

export default Aboutpage;