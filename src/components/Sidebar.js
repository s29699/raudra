import React from 'react'
import { Link } from 'react-router-dom';
import cardimg from '../assets/LCAmk2.jpg'

const Sidebar = () => {
  return (
    <div className="sidebar_card">
      <div className="card">
        <img src={cardimg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Missile</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="/missiles" className="btn btn-primary">Missile</Link>
        </div>
      </div>
      <div className="card">
        <img src={cardimg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Radar</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div className="card">
        <img src={cardimg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Air Defense</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div className="card">
        <img src={cardimg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Guns</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div className="card">
        <img src={cardimg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Artillery</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div className="card">
        <img src={cardimg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">SubMarine</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div className="card">
        <img src={cardimg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Fighter Jet</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div className="card">
        <img src={cardimg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Helicopters</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div className="card">
        <img src={cardimg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Warships</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div className="card">
        <img src={cardimg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Trainers</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    
  )
}

export default Sidebar