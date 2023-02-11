import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Equipment from './Equipment'
import ad from '../EquipData/ad.json'

const AD = () => {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <div className="d-flex flex-column mb-3">
                {
                    ad.map((element, index) => {
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

export default AD