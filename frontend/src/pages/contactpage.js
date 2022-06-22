import NAVBAR from '../components/navbar/navbar';
import Contactheading from '../components/contactheading/contactheading';
import Getintouch from '../components/get in touch/getintouch';
import Footer from '../components/footer/footer';
import Coppyright from '../components/copyright/copyright';
function Contactpage() {
  return (
      <>
           <NAVBAR />
            <Contactheading />
            <Getintouch />
           <Footer />
           <Coppyright />
      </>
  );
}

export default Contactpage;