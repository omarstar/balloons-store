import "./breadcrumb.css"
const breadcrumb = {
    color: "#000",
    backgroundColor: 'white',
    // border: '1px solid rgba(0,0,0,0.125)',
    // borderRadius: '0.37rem'
}

const NavBreadCrumb = ({crumbs, selected}) => {
    
    

    function isLast(index) {
        return index === crumbs.length-1;
    }
    function isHome(index) {
        return index === 0;
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
                                <a href="#" className={`btn btn-link ${disabled} text-decoration-none`} onClick={() => selected(crumb)}>
                                    {homeIcon ? (
                                        <i className="icon-home" >🏠</i>
                                    ) : (
                                        crumb
                                    )}
                                </a>
                            </li>
                        )
                    })
                }
            </ol>
        </nav>
     );
}
 
export default NavBreadCrumb;