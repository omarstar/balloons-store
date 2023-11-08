import { useState } from "react";
import Filter from "../components/filter/Filter";
import Products from "../components/products/Products";
import data from "../data.json"
import Cart from "../components/cart/Cart";

const LayoutProducts = () => {

    const [products, setProducts] = useState(data.products);
    const [size, setSize] = useState("")
    const [sort, setSort] = useState("")
    const [cartItems, setCartItems] = useState([])

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
        console.log('cart', cart)
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
        console.log('after push', cart)
        setCartItems(cart);
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

}

    return ( 
        <>
        <div className="content">
            <div className="main">
                <Filter
                count={products.length}
                sort={sort}
                size={size}
                filterProducts={filterProducts}
                sortProducts={sortProducts}
                 />
                <Products products={products} addtoCart={handleAddtoCart} />
            </div>
            <div className="sidebar">
                <Cart cartItems={cartItems} removeCartFromCart={handleRemoveCart} />
            </div>
        </div>
        </>
     );
}
 
export default LayoutProducts;