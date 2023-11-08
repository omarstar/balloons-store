// import { decorationItems } from "../../utils/constants";
import "./cardDecoration.css"
import styled from "styled-components";



const CardDecoration = ({data, align}) => {
    const ButtonDeco = styled.button.attrs(()=>({
        className: 'button'
    }))`
        background-color: ${props => props.theme.btncolor};
        color: ${props => props.theme.txtcolor};
        border: none;
        padding: 1.5rem;
        // font-size: 1.875rem;
        width: 289px;
        // height: 91px;
        margin-bottom: 10vh;
    `

    // const themecolors = {
    //     bgColor:"#DB7F2C",
    //     btnColor:"#CABBAC",
    //     txtColor:"#fff"
    // }

    const ContainerDeco = styled.div.attrs(()=>({
        className: 'decoration-width'
    }))`
        background-color: ${props => props.theme.bgcolor};
        border-radius: ${props => props.br};
        `
    const ImageDeco = styled.div`
        width: 468px;
        height: auto;
        background: url(${props => props.imgPath.imgurl}), lightgray 50% / cover no-repeat;
        `
        
        console.log('data', data)
        let alignOrder = (align === "right" ? "order-1": "")
        let borderRadiusSide = (align === "right" ? "15px 0 0 15px": "0 15px 15px 0")

        return ( 
        <>
        {/* <div className="container"> */}
        <ContainerDeco theme={{bgcolor: data.bgColor}} br={borderRadiusSide}>

            <div className="row h-70">
                <div className={"col-12 col-lg-6 "+ alignOrder}>
                    {/* <div className="image-wrapper">
                        <div className="image-deco"/>
                    </div> */}
                    <img className=" mx-auto d-block img-box" src={data.srcUrl} alt="img"/>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="row h-15 deco-title ff-itali">Balloon Arches</div>
                    <div className="row h-40 px-4 deco-desc">
                        <div className="col">
                            <ul>
                                <li>Transform your room instantly with our ceilingand wall décor</li>
                                <li>Make a huge statement by framing out your wall or draping your ceiling with our beautiful balloons</li>
                                <li>A great way to make your party truly magical</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row  h-15 justify-content-center align-items-center">
                        <ButtonDeco theme={{btncolor: data.btnColor, txtcolor: data.txtColor}} >Learn More</ButtonDeco>
                    </div>
                </div>
            </div>
        </ContainerDeco>
        {/* </div> */}
        </>
     );
}
 
export default CardDecoration;