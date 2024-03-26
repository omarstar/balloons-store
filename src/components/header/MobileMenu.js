import React from 'react'
import MenuSmall from './elements/MenuSmall'
import MenuMobile from './elements/MenuMobile'
export default function MobileMenu(params) {
    return(
        <>
        {/* d-flex flex-column bg-white w-100 h-100 justify-content-center align-items-center  */}
        <div className='inner'>
            <div className='small-menu'><MenuSmall /></div>
            <div className='slider slick-initialized slick-slider'>
                <div className="slick-list draggable" aria-live="polite">
                    <div className="slick-track" style={{
                        opacity: 1,
                        width: "355px",
                        transform: "translate3d(0px, 0px, 0px)"
                    }}>
                        <div className="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{width: "335px"}}>
                            <MenuMobile />
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
        </>
    )
};
