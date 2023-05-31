import { useSetTitle } from '../../../hooks/useSetTitle';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Partner from '../Partner/Partner';
import SubCategory from '../SubCategory/SubCategory';
import Video from '../Video/Video';

const Home = () => {
    useSetTitle('Home')

    return (
        <div className='mx-auto max-w-7xl'>
            <Banner></Banner>
            <SubCategory></SubCategory>
            <Gallery></Gallery>
            <Partner></Partner>
            <Video></Video>
        </div>
    );
};

export default Home;