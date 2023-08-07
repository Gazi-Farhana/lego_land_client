import { useSetTitle } from '../../../hooks/useSetTitle';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Partner from '../Partner/Partner';
import Speciality from '../Speciality/Speciality';
import SubCategory from '../SubCategory/SubCategory';
import TopSeller from '../TopSeller/TopSeller';
import Video from '../Video/Video';
import Vision from '../Vision/Vision';

const Home = () => {
    useSetTitle('Home')

    return (
        <div >
            <Banner></Banner>
            <div className='mx-auto max-w-7xl'>

                <SubCategory></SubCategory>
                <TopSeller />
                <Gallery></Gallery>
                <Speciality></Speciality>
                <Partner></Partner>
                <Vision></Vision>
                <Video></Video>
            </div>
        </div>
    );
};

export default Home;