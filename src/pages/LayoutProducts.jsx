import { useEffect, useState } from "react";
import data from "../data.json"
// import { getBreadFromPath, getLocalStorageValue } from "../utils/helpers";
import { useDispatch } from "react-redux";
// import { breadcrumbsActions } from "../store/breadcrumb/breadcrumbsSlice";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { productActions } from "../store/product/product-slice";
import { bouquetsList, decorationList, rentalList } from "../utils/constants";

const LayoutProducts = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {prds} = useParams();
    console.log('collection params', prds)

    // const location = useLocation();
    // const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
    // const crumb = getBreadFromPath(pathSegments)
    // console.log('crumb', crumb)

    // useEffect(() => {
    //   dispatch(breadcrumbsActions.updateBreadcrumbs(crumb))
    
    // }, [dispatch])

    // const selectedCrumb = (crumb) => {
    //     console.log('crumb', crumb)
    // }

    const callDisplayProducts = () => {

        //filter the data later
        try {
            dispatch(productActions.updateLastCategoryLanded(prds));
            
            if(decorationList.includes(prds) || rentalList.includes(prds)){
                // *** decoration or rental to get quote directly

                // using cat from data
                let decoItem = data.decorations.filter(item => (
                    item.cat === prds
                ))
                console.log('decoItem', decoItem)
                if(decoItem.length === 0){
                    console.log('nothing found')
                }else if(decoItem.length === 1){
                    //goto details directly, no list to show
                    dispatch(productActions.handleProductSelected(decoItem[0]))
                    navigate(`/decorations/details`)
                }else{
                    //goto show list of items to select
                    dispatch(productActions.recreateProductsList(decoItem))
                    navigate('/collections/decorations')
                }
            
            }
            // else if(rentalList.includes(prds)){

            // }
            else if(prds === 'jbounce') {
                console.log('products list updated to inflatables')
                dispatch(productActions.recreateProductsList(data.inflatables))
                return navigate('/collections/inflatables')
            }
            else if(prds === 'create-bouquet') {
                console.log('products list updated to bouquests')
                dispatch(productActions.recreateProductsList(data.bulkballoon))
                return navigate('/collections/create-your-bouquet')
                
            }
            else if(prds === 'nadiapicks') {
                console.log('products list updated to bouquests')
                dispatch(productActions.recreateProductsList(data.nadiapicks))
                return navigate('/collections/nadiapicks')
                
            }
            else if(bouquetsList.includes(prds)) {
                console.log('products list updated to bouquests')
                dispatch(productActions.recreateProductsList(data.products))
                return navigate('/collections/boquets')
            }
            else navigate('/')

        } catch (error) {
            navigate('/')
        }
    }

    useEffect(() => {
      callDisplayProducts();
    }, [prds])

}
 
export default LayoutProducts;