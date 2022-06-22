import NAVBAR from '../components/navbar/navbar';
import Home from '../components/home/home';
import CATEGORIES from '../components/categories/categories';
import Deatials from '../components/detials/details';
import Collection from '../components/collection/collection';
import Startshopping from '../components/start shopping/start shopping';
import Lastest_nwes from '../components/latest news/latest news';
import Footer from '../components/footer/footer';
import Coppyright from '../components/copyright/copyright';
function Homepage() {
  return (
      <>
           <NAVBAR />
           <Home />
           <CATEGORIES />
           <Deatials />
           <Collection />
           <Startshopping />
           <Lastest_nwes />
           <Footer />
           <Coppyright />
      </>
  );
}

export default Homepage;