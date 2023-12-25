import { Link } from "react-router-dom";

export default function CartEmpty() {
    return ( 
        <div className="container mt-5">
        <div className="row">
            <div className="col-10 mx-auto text-center text-title">
                <h1>your cart is currently empty</h1>
                <div className="start-shopping">
                    <Link to="/home">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>
                    <span>Start Shopping</span>
                    </Link>
                </div>
            </div>
        </div>
        </div>
        // <div className="cart cart-header">Cart is empty! continue shopping 😊🎈</div>
     );
}
