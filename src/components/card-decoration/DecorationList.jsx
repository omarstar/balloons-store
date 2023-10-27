import { decorationItems } from "../../utils/constants";
import CardDecoration from "./CardDecoration";

const DecorationList = () => {
    return ( 
        <>
            <div class="card-deco-wrapper f-right">
            <CardDecoration data={decorationItems[0]} align={"right"} />
            </div>
            <div class="card-deco-wrapper">
            <CardDecoration data={decorationItems[1]}/>
            </div>
        </>
     );
}
 
export default DecorationList;