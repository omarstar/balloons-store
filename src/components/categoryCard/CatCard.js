import { Link } from "react-router-dom";
import "./CartCard.css"
const CatCard = ({category, ckey}) => {
    const {briefText, title, imgSrc, path} = category;
//https://i.imgur.com/2DhmtJ4.jpg
    const cardStatus = "Explore more"
    return ( 
        
        <li key={ckey}>
    <Link to={path} className="card">
      <img src={imgSrc} className="card__image" alt="" />
      <div className="card__overlay">        
        <div className="card__header">
          {/* <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <img className="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" /> */}
          <div className="card__header-text">
            <h3 className="card__title">{title}</h3>
            <span className="card__status">{cardStatus}</span>
          </div>
        </div>
        <p className="card__description">{briefText}</p>
      </div>
    </Link>
  </li>
     );
}
 
export default CatCard;