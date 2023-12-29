
import Banner from './Banner';
import Trending from './Trending';
import './styles.scss';

const Home = () => {
  return (
    <div className='home-page'>
      <Banner />
      <Trending />
    </div>
  )
}

export default Home