import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import Faq from "./Faq/Faq";
import Member from "./Member/Member";
import Membership from "./Membership/Membership";
import PopularService from "./PopularService";
import LatestBlog from "./LatestBlog/LatestBlog";


const Home = () => {
    return (
        <div>

            <Helmet>
                <title>Home</title>
            </Helmet>


            <div>
                <Banner></Banner>
            </div>

            <div className="my-20 container mx-auto">
                <PopularService></PopularService>

            </div>


            <div className="my-20 container mx-auto">
                <Member></Member>

            </div>



            <div className="my-20 container mx-auto">
                <Membership></Membership>
            </div>
            <div className="my-20 container mx-auto">
                <Faq></Faq>

            </div>
            <div className="my-20 container mx-auto">
                <LatestBlog></LatestBlog>

            </div>

        </div>
    );
};

export default Home;