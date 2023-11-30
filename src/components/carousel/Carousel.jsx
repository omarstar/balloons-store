import './carousel.css'
import { useState } from 'react';
import {BsArrowRightCircleFill, BsArrowLeftCircleFill} from 'react-icons/bs'

const Carousel = ({slidesData}) => {
    const [showSlide, setShowSlide] = useState(0)
    const nextSlide = () => {
        if(showSlide === slidesData.length-1)
            setShowSlide(0);
        else
            setShowSlide(showSlide + 1)
    }
    const prevSlide = () => {
        if(showSlide === 0)
            setShowSlide(slidesData.length-1);
        else
            setShowSlide(showSlide - 1)
    }

    return ( 
        <div className="carousel">
            <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide}/>
            {slidesData.map((carouselItem, ci) => {
                return (
                    <img src={require(`../../assets/images/cover/${carouselItem.src}.webp`)} alt={carouselItem.alt} key={ci} className={showSlide === ci ? "slide" : "slide slide-hidden"} />
                )
            })}
            <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide} />
            <span className='indicators'>
                {slidesData.map((_, idx)=> <button key={idx} className={showSlide === idx ? "indicator" : "indicator indicator-inactive"} onClick={()=> setShowSlide(idx)}></button>)}
            </span>
        </div>
     );
}
 //disable
 //set the idx
export default Carousel;