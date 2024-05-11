import Banner from "./Banner/Banner";
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
            
        </div>
    );
};

export default Home;