import CardDecoration from "./CardDecoration";

const DecorationList = ({decorationItems}) => {

    
    return ( 
        <>
            {decorationItems && decorationItems.map( (item , i) =>{
                return(
                    <div className={"card-deco-wrapper " + (i%2 === 1 ? "f-right": "")}>
                        <CardDecoration data={item} align={(i%2 === 1 ) ? "right" : ""} />
                    </div>
                );
            })}
        </>
     );
}
 
export default DecorationList;