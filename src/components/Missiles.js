import React from 'react'
import missile from '../EquipData/missile.json'
import Equipment from './Equipment'
import Navbar from './Navbar'
import Sidebar from './Sidebar'


const Missiles = () => {
    return (
        <div className='miss'>
            <h1 className="heading">MISSILES</h1>
            <div className="d-flex flex-column mb-3">
                {
                    missile.map((element, index) => {
                        return (
                            <Equipment
                                key={index}
                                Name={element.Name}
                                Status={element.Status}
                                img={element.img}
                                About={element.About}
                            />
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Missiles