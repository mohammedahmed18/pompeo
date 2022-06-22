import NAVBAR from "../components/navbar/navbar";
import Shopheading from "../components/shop heading/shopheading";
import Shop from "../components/shop/shop";
import Lastest_news from "../components/latest news/latest news";
import Copyright from "../components/copyright/copyright";
function Shoppage() {
    return(
        <>
        <NAVBAR />
        <Shopheading />
        <Shop />
        <Lastest_news />
        <Copyright />
        </>
    )
}
export default Shoppage;