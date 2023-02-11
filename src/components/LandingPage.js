import i1 from '../assets/d3.jpg'
import i2 from '../assets/av1.jpg'
import i3 from '../assets/je2.jpg'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <>
    <Navbar />
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={i1} className="d-block w-100" alt="..." height="650px" />
            <div className="carousel-caption d-none d-md-block">
              <Link className="nav-link" to="/defence"><h5>Defence</h5></Link>
            </div>
        </div>
        <div className="carousel-item">
          <img src={i2} className="d-block w-100" alt="..." height="650px" />
            <div className="carousel-caption d-none d-md-block">
            <Link className="nav-link" to="/aviation"><h5>Aviation</h5></Link>
            </div>
        </div>
        <div className="carousel-item">
          <img src={i3} className="d-block w-100" alt="..." height="650px" />
            <div className="carousel-caption d-none d-md-block">
            <Link className="nav-link" to="/sub"><h5>Sub Components</h5></Link>
            </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </>
  )
}

export default LandingPage