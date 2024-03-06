import { Link } from "react-router-dom";
import "./cardDecoration.css"
import styled from "styled-components";



const CardDecoration = ({data, align}) => {
    const ButtonDeco = styled.button.attrs(()=>({
        className: 'button'
    }))`
        background-color: ${props => props.theme.btncolor};
        color: ${props => props.theme.txtcolor};
        border: none;
        // padding: 1.5rem;
        // font-size: 1.875rem;
        width: 235px;
        // height: 91px;
        // margin-bottom: 10vh;
        // position: absolute;
        // bottom: 1.2rem;
        // right: 10rem;
        // right: 30px
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
        background: url(${props => props.imgpath.imgurl}), lightgray 50% / cover no-repeat;
        `
        
        console.log('data', data)
        let alignOrder = (align === "right" ? "order-1": "")
        let borderRadiusSide = (align === "right" ? "15px 0 0 15px": "0 15px 15px 0")

        return ( 
        <>
        {/* <div className="container"> */}
        <ContainerDeco theme={{bgcolor: data.bgColor}} br={borderRadiusSide}>

            <div className="row h-70">
                <div className={"col-12 col-lg-7 h-100 "+ alignOrder}>
                    {/* <div className="image-wrapper">
                        <div className="image-deco"/>
                    </div> */}
                    <img className=" mx-auto d-block img-box" src={data.srcUrl} alt="img"/>
                </div>
                <div className="col-12 col-lg-5 position-relative pt-4">
                    <div className="row h-15 deco-title ff-itali">{data.title}</div>
                    <div className="row px-4 deco-desc">
                        <div className="col">
                            <ul>
                                <p>{data.desc}</p>
                                {/* <li>Make a huge statement by framing out your wall or draping your ceiling with our beautiful balloons</li>
                                <li>A great way to make your party truly magical</li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center buttonDeco-wrapper w-100">
                        <Link to={data.linkPath}>
                            <ButtonDeco theme={{btncolor: data.btnColor, txtcolor: data.txtColor}} >Explore More</ButtonDeco>
                        </Link>
                    </div>
                </div>
            </div>
        </ContainerDeco>
        {/* </div> */}
        </>
     );
}
 
export default CardDecoration;