import "./filter.css"
const Filter = ({count, sort, size, filterProducts, sortProducts}) => {
    return ( 
        <div className="filter-wrapper">
            <div className="row filter-inner filter-flex-space">
                <div className="filter-result">
                    {count} items
                </div>
                <div className="filter-sort">
                    Order {"  "}
                    <select value={sort} onChange={sortProducts}>
                        <option>Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>
                <div className="filter-size">
                    Filter {"  "}
                    <select value={size} onChange={filterProducts}>
                        <option value="">All</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                    </select>
                </div>
            </div>
        </div>
     );
}
 
export default Filter;