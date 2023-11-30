import { useEffect, useState } from "react";
import Filter from "../components/filter/Filter";
import Products from "../components/products/Products";
import data from "../data.json"
// import Cart from "../components/cart/Cart";
import { getImage, getLocalStorageValue } from "../utils/helpers";
import NavBreadCrumb from "../components/breadcrumb/NavBreadCrumb";
import styled from "styled-components";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { cartActions } from "../store/cart/cart-slice";

const LayoutProducts = () => {

    const breadcrumbs = useSelector(state => state.breadcrumb.breadcrumbs)
    console.log('breadcrumbs', breadcrumbs)

    const [products, setProducts] = useState(data.products);
    const [size, setSize] = useState("")
    const [sort, setSort] = useState("")
    const [cartItems, setCartItems] = useState(getLocalStorageValue("cartItems") ? JSON.parse(getLocalStorageValue("cartItems")) : [])
    const [crumbs, setCrumbs] = useState([])
    // const [crumbs, setCrumbs] = useState(['Home','Category','Sub Category'])

    useEffect(() => {
      setCrumbs(breadcrumbs);
    
    }, [breadcrumbs])
    

    // const dispatch = useDispatch();

    const  filterProducts = (event)=>{
        const {value} = event.target;
        console.log('value', value)
        console.log('products', products)
        if(event.target.value === ""){
            setSize(value);
            setProducts(data);
        }else{
            setSize(value)
            setProducts(data.products.filter(product=>{
                console.log('indexOf', product.availableSizes.indexOf(value))
                return product.availableSizes.indexOf(value)  >= 0
        }))
        }
    }

    const handleAddtoCart = (product) => {
        const cart = cartItems.slice();
        let alreadyInCart = false;
        cart.forEach(item => {
            if(item._id === product._id){
                item.count ++;
                alreadyInCart = true;
            }
        });
        if(!alreadyInCart){
            cart.push({...product, count: 1})
        }
        setCartItems(cart);
        console.log('cart after update', cart)
        console.log('cart items after update', cartItems)
        localStorage.setItem("cartItems", JSON.stringify(cart));
        console.log('ls', getLocalStorageValue("cartItems"))
        
        
    }

    const sortProducts = (event) => {
        const sortValue = event.target.value;
        console.log('sortValue', sortValue)
        setSort(sortValue);
        setProducts(products.slice().sort((a,b)=>(
            sortValue === "lowest"
            ? a.price > b.price
                ? 1 : -1
            : sort === "highest"
            ? a.price < b.price
                ? 1 : -1
            : a._id < b._id
                ? 1 : -1
        )))
    }

const handleRemoveCart = (product) => {
    const cart = cartItems.slice();
    const updatedCart = cart.filter(item=> {
        return item._id !== product._id
    })
    setCartItems(updatedCart)
    console.log('cart items after remove', cartItems)
    console.log('cart updated items after remove', updatedCart)
    localStorage.setItem("cartItems", JSON.stringify(updatedCart))
    console.log('ls', getLocalStorageValue("cartItems"))
}

const selectedCrumb = (crumb) => {
    console.log('crumb', crumb)
}
// {/* <div className="sidebar">
//     <Cart cartItems={cartItems} removeCartFromCart={handleRemoveCart} />
//                 </div> */}

const ImageDeco = styled.div.attrs(()=>({
    className: 'category-banner banner text-uppercase'
}))`
        width: 100%;
        height: 300px;
        background: url(${props => props.imgpath}), lightgray no-repeat 60% / cover ;
        `
    return ( 
        <>
        <div className="content">
            <div className="main">
                <div className="category-banner-container bg-gray">
                    {/* banner */}
                    <ImageDeco imgpath={getImage("../assets/images/banners/NationalDay-Banner.webp")}>
                        <div className="container position-relative">
                            <div className="row">
                                <div className="pl-lg-5 pb-5 pb-md-0 col-md-5 col-xl-4 col-lg-4 offset-1">
                                    
                                </div>
                                <div className="pl-lg-3 col-md-4 offset-md-0 offset-1 pt-3">

                                </div>
                            </div>
                        </div>
                    </ImageDeco>
                </div>

                <div className="container">
                    <NavBreadCrumb crumbs={crumbs} selected={selectedCrumb} />
                    <Filter
                    count={products.length}
                    sort={sort}
                    size={size}
                    filterProducts={filterProducts}
                    sortProducts={sortProducts}
                     />
                    <Products products={products} addtoCart={handleAddtoCart} />
                </div>
                                
            </div>
        </div>
        </>
     );
}
 
export default LayoutProducts;