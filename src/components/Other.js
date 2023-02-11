import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Equipment from './Equipment'
import other from '../EquipData/other.json'

const Other = () => {
    return (
        <div><Navbar />
            <Sidebar />
            <div className="d-flex flex-column mb-3">
                {
                    other.map((element, index) => {
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
            </div></div>
    )
}

export default Other