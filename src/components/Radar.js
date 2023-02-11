import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Equipment from './Equipment'
import radar from '../EquipData/radars.json'

const Radar = () => {
  return (
    <div>
        <Navbar />
            <Sidebar />
            <div className="d-flex flex-column mb-3">
                {
                    radar.map((element, index) => {
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

export default Radar