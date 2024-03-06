import { useEffect } from "react";
import NavBreadCrumb from "../components/breadcrumb/NavBreadCrumb";
import { breadcrumbsActions } from "../store/breadcrumb/breadcrumbsSlice";
import { useDispatch } from "react-redux";
import CatCard from "../components/categoryCard/CatCard";
import { dropdownItems } from "../utils/constants";
import { Link, useParams } from "react-router-dom";
import { validateCategoryParams } from "../utils/helpers";

const LayoutCategories = () => {

    const {cat} = useParams();
    console.log('category params', cat)
    const checkParams = validateCategoryParams(cat);

    const catName = cat.toUpperCase();
    const catNote = "shoose the collection you desire, then pick from te list the colors and shapes you are looking for."

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(breadcrumbsActions.updateBreadcrumbs(['Home', catName]))
    })
    
    return ( 
        <>
        {checkParams ? (

            <div className="container">
                <div className="cat-page-inner">
                    <div className="row bread-title px-4">
                        <div className="col-12">
                            <NavBreadCrumb />
                            <p className="cat-name">{catName}</p>
                        </div>
                    </div>
                    <div className="row cat-note px-4">
                        <p>{catNote}</p>
                    </div>
                    <div className="row cat-list-box">
                        <div className="container">
                            <ul className="cards">
                                {
                                    dropdownItems[catName].map((catItem,i) => (
                                        <CatCard category={catItem} ckey={i}/>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <Link to="/">back home</Link>
        )}
        </>
     );
}
 
export default LayoutCategories;