import { decorationItems } from "../../utils/constants";
import CardDecoration from "./CardDecoration";

const DecorationList = () => {
    return ( 
        <>
            <div className="card-deco-wrapper f-right">
            <CardDecoration data={decorationItems[0]} align={"right"} />
            </div>
            <div className="card-deco-wrapper">
            <CardDecoration data={decorationItems[1]}/>
            </div>
            <div className="card-deco-wrapper f-right">
            <CardDecoration data={decorationItems[2]} align={"right"} />
            </div>
            <div className="card-deco-wrapper">
            <CardDecoration data={decorationItems[3]}/>
            </div>
            <div className="card-deco-wrapper f-right">
            <CardDecoration data={decorationItems[4]} align={"right"} />
            </div>
            <div className="card-deco-wrapper">
            <CardDecoration data={decorationItems[5]}/>
            </div>
        </>
     );
}
 
export default DecorationList;