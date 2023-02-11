import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Equipment from './Equipment'
import submarine from '../EquipData/submarine.json'

const SubMarine = () => {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <div className="d-flex flex-column mb-3">
                {
                    submarine.map((element, index) => {
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

export default SubMarine