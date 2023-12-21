import { useSelector } from "react-redux";
import "./breadcrumb.css"
import { useNavigate } from "react-router-dom";
const breadcrumb = {
    color: "#000",
    backgroundColor: 'white',
    // border: '1px solid rgba(0,0,0,0.125)',
    // borderRadius: '0.37rem'
}

const NavBreadCrumb = () => {
    
    //{crumbs, selected}
    const crumbs = useSelector(state => state.breadcrumbs.crumbs)
    console.log('crumbs in the bread: ', crumbs)
    const navigate = useNavigate();

    function isLast(index) {
        return index === crumbs.length-1;
    }

    function isHome(index) {
        return index === 0;
    }

    function selected(crumb, i) {

        console.log('crumb selected', [crumb, i])
        if(i === 0){
            navigate('/home')
        }
        else if(i === 1){
            navigate(`/category/${crumb.toLowerCase()}`)
        }else if( i === 2){
            navigate(`/collections/${crumb.toLowerCase()}`)
        }
    }

    return ( 
        <nav className="breadcrumb-nav row justify-content-center mt-4" aria-label="breadcrumb">
            <ol className="breadcrumb" style={breadcrumb}>
                {
                    crumbs && crumbs.map((crumb,ci) => {
                        const disabled = isLast(ci) ? 'disabled active' : '';
                        const homeIcon = isHome(ci);
                        return (
                            <li 
                                key={ci}
                                className="breadcrumb-item align-items-center"
                            >
                                <div className={`btn btn-link ${disabled} text-decoration-none`} onClick={() => selected(crumb, ci)}>
                                    {homeIcon ? (
                                        <i className="icon-home" >🏠</i>
                                    ) : (
                                        crumb
                                    )}
                                </div>
                                {/* <a href={`/category/${crumbs[1]}`} className={`btn btn-link ${disabled} text-decoration-none`} onClick={() => selected(crumb)}>
                                    {homeIcon ? (
                                        <i className="icon-home" >🏠</i>
                                    ) : (
                                        crumb
                                    )}
                                </a> */}
                            </li>
                        )
                    })
                }
            </ol>
        </nav>
     );
}
 
export default NavBreadCrumb;