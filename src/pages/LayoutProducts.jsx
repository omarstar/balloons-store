import { useState } from "react";
import Filter from "../components/filter/Filter";
import Products from "../components/products/Products";
import data from "../data.json"

const LayoutProducts = () => {

    const [products, setProducts] = useState(data.products);
    const [size, setSize] = useState("")
    const [sort, setSort] = useState("")

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

    return ( 
        <>
        <div className="main">
            <Filter 
            count={products.length} 
            sort={sort} 
            size={size}
            filterProducts={filterProducts}
            sortProducts={sortProducts}
             />
            <Products products={products}/>
        </div>
        </>
     );
}
 
export default LayoutProducts;