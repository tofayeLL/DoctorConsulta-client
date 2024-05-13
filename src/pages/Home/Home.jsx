import Banner from "./Banner/Banner";
import Faq from "./Faq/Faq";
import Member from "./Member/Member";
import Membership from "./Membership/Membership";
import PopularService from "./PopularService";


const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>   
            </div>

            <div className="my-20">
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
            
        </div>
    );
};

export default Home;