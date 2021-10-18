import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Slider from '../Slider/Slider'
import Carousel from '../Carousel/Carousel'
import Grid from '../Grid/Grid'

import './Home.css'

function HomePage() {
    return (
        <div className="Home">
            <Header />
            <div className="content">
                <Slider />
                <Carousel />
                <Grid />
            </div>
            <Footer />
        </div>    
    )
}

export default HomePage;