import React from 'react'
import { logoIconsList } from '../constants'

const LogoIcon = ({icon})=>{
    return (
        <div className='flex-none flex-center marquee-item'>
            <img src= {icon.imgPath} alt = {icon.name}/>
        </div>
    )
}

const LogoSection = () =>{
    return (
        <div className = "md:my-20 my-10 relative">
            <div className='gradient-edge' key="gradient-edge-1"></div>
            <div className='gradient-edge' key="gradient-edge-2"></div>

            <div className='marquee h-52'>
                <div className='marquee-box md:gap-12 gap-5'>
                    {logoIconsList.map((icon) => (
                        <LogoIcon key={icon.name}  icon={icon} />
                    ))}
                    {/* trick, when the first one complete, the second one will be continue */}

                    {logoIconsList.map((icon) => (
                        <LogoIcon key={icon.name}  icon={icon} />
                    ))}

                </div>
            </div>

        </div>

    )
}
export default LogoSection