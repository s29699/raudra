import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Equipment from './Equipment'
import gun from '../EquipData/guns.json'

const Gun = () => {
  return (
    <div>
        <Navbar />
            <Sidebar />
            <div className="d-flex flex-column mb-3">
                {
                    gun.map((element, index) => {
                        return (
                            <Equipment
                                key={index}
                                Name={element.Name}
                                Status={element.Status}
                                img={element.img}
                                about={element.About}
                            />
                        )
                    })
                }
            </div>
    </div>
  )
}

export default Gun