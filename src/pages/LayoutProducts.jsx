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

                // go to details for deco
                let decoItem = data.decorations.filter(item => (
                    item.cat === prds
                ))
                console.log('decoItem', decoItem)
                if(decoItem.length === 0){
                    console.log('nothing found')
                }else if(decoItem.length === 1){
                    dispatch(productActions.handleProductSelected(decoItem[0]))
                    navigate(`/decorations/details`)
                }else{
                    dispatch(productActions.recreateProductsList(decoItem))
                    navigate('/collections/decorations')
                }

                // if(prds === "nadiapicks" ){
                //     //goto list with wide clmns
                //     dispatch(productActions.recreateProductsList(data.nadiapicks))
                //     navigate('/collections/decorations')

                // }else if(prds === "setups"){
                //     dispatch(productActions.recreateProductsList(data.setups))
                //     navigate('/collections/decorations')
                // }
                // else{
                //     // go to details for deco
                //     let decoItem = data.decorations.filter(item => (
                //         item.image === prds
                //     ))
                //     console.log('decoItem', decoItem)
                //     if(decoItem.length === 0){
                //         console.log('nothing found')
                //     }else if(decoItem.length === 1){
                //         dispatch(productActions.handleProductSelected(decoItem[0]))
                //         navigate(`/decorations/details`)
                //     }else{
                //         dispatch(productActions.recreateProductsList(decoItem))
                //         navigate('/collections/decorations')
                //     }

                // }

            
            }
            // else if(rentalList.includes(prds)){

            // }
            else if(prds === 'jbounce') {
                console.log('products list updated to inflatables')
                dispatch(productActions.recreateProductsList(data.inflatables))
                return navigate('/collections/inflatables')
            }
            else if(prds === 'bouquets' || bouquetsList.includes(prds)) {
                console.log('products list updated to bouquests')
                dispatch(productActions.recreateProductsList(data.products))
                return navigate('/collections/boquests')
            }
            else navigate('/')

            // if(prds === "setups"){
            //     console.log('products list updated to setups')
            //     dispatch(productActions.recreateProductsList(data.setups))
            //     navigate('/collections/decorations')
            // }else if(prds ===  'garlands' || prds === 'columns' || prds === 'centerpieces' || prds === 'Ceiling-Walls' || prds === 'arches' || prds === 'sculptures'){
            //     console.log('products list updated to decoration');
            //     dispatch(productActions.recreateProductsList(data.decorations))
            //     navigate('/collections/decorations')
            // }else if(prds ===  'nadia-picks'){
            //     console.log('products list updated to nadia picks');
            //     dispatch(productActions.recreateProductsList(data.nadiapicks))
            //     navigate('/collections/nadia-picks')
            // }else if(prds ===  'decorations'){
            //     console.log('products list updated to all decorations list');
            //     dispatch(productActions.recreateProductsList([...data.decorations, ...data.setups]))
            //     navigate('/collections/decorations')
            // }else if(prds === 'bouquets'){
            //     console.log('products list updated to bouquests')
            //     dispatch(productActions.recreateProductsList(data.products))
            //     navigate('/collections/boquests')
            // }else{
            //     if(bouquetsList.includes(prds)) {
            //         console.log('products list updated to bouquests')
            //         dispatch(productActions.recreateProductsList(data.products))

            //         return navigate('/collections/boquests')
            //     }
            //     else navigate('/')
            // }

        } catch (error) {
            navigate('/')
        }
    }

    useEffect(() => {
      callDisplayProducts();
    }, [prds])

}
 
export default LayoutProducts;