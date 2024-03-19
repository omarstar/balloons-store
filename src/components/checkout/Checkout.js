import { useDispatch, useSelector } from "react-redux";
import "./checkout.css"
import { useEffect, useState } from "react";
import { cartActions } from "../../store/cart/cart-slice";
import ReactDatePicker from "react-datepicker";
import styled from "styled-components";
import { checkOrderActions } from "../../store/contact/checkout-slice";
import { locations, timeSlots } from "../../utils/constants";
import TimeSlotsDropdown from "../elements/TimeSlotsDropdown";
import { formatDateToYMD } from "../../utils/helpers";
import { isSelectAgreement } from "../../store/selectors";
import $ from 'jquery';

const Checkout = () => {

    const cart = useSelector((state) => state.cart);//[{}]
    const personalContact = useSelector((state) => state.checkoutorder.personalinfo)

    const correctGreenSign = '<span className="fas fa-check"></span>'

    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const agreeToTerms = useSelector(isSelectAgreement);

    const [selectedDate, setSelectedDate] = useState(new Date())
    const [selectedTime, setSelectedTime] = useState("")
    const [validationMessage, setValidationMessage] = useState(["",""])

    const handleCheckboxChange = () => {
        dispatch(checkOrderActions.toggleAgreement());
      };

    const handleDateChange = (dateSelected) => {
        // const datePicked = formatDateToYMD(dateSelected)
        console.log('dateSelected: ', dateSelected)
       const formatedDate = formatDateToYMD(dateSelected)
        console.log('serializedDate: ', formatDateToYMD(dateSelected) )

        setSelectedDate(dateSelected)
        dispatch(checkOrderActions.updateDeliveryData({ field: 'deliveryDate', value: formatedDate}))
        // dispatch(checkOrderActions.updateAvailableTimeSlots(formatedDate))
        dispatch(checkOrderActions.updateAvailableTimeSlots(dateSelected))
    }

    const handleChechout = () => {
        const form = $('#checkoutForm').serializeArray();
        var data = [];
        form.forEach(f=>{
            data[f.name] = f.value;
        });
        console.log('data',data);

        var payLoad = {
            "cartItems": cart.cartItems,
            "cartTotalQuantity": 0,
            "cartTotalAmount": 0,
            "personalinfo": {
                "name": "Tayyab",
                "email": "tayyabalizaheer@gmail.com",
                "phone": "0561902113"
            },
            "eventData": {
                "date": "",
                "decortime": "",
                "starttime": "",
                "endtime": "",
                "locationEvent": "",
                "messagenote": ""
            },
            "addressDetails": {
                "locationEvent": "",
                "address": "",
                "isDelivery": false
            }
        
            
        };
    }

    const handleInputChange = (e, fieldName) => {
        const { name, value } = e.target;
        // let isValid = true;
        // if (fieldName === 'name' && value.length < 3) {
        //     isValid = false;
        //     setValidationMessage([fieldName, "Your Name is Required"]);
        // } else if (fieldName === 'email' && !/\S+@\S+\.\S+/.test(value)) {
        //     isValid = false;
        //     setValidationMessage([fieldName, "valid email si required"]);
        // } else if (fieldName === 'phone' && !/^\d*$/.test(value)) {
        //     isValid = false;
        //     setValidationMessage([fieldName, "Please enter a valid phone number"])
        // }
        
        // if(isValid){
        //     dispatch(checkOrderActions.updatePersonalData({ field: name, value }));
        //     setValidationMessage(["",""])
        // }
        dispatch(checkOrderActions.updatePersonalData({ field: name, value }));

      };

      const handleLocationOnSelectChange = (e) => {
        const { name, value } = e.target;
        dispatch(checkOrderActions.updateDeliveryData({ field: name, value }));
      };
        
    const CustomDatePicker = styled(ReactDatePicker)`
    .react-datepicker__calendar-icon {
        display: flex !important;
        justify-content: space-evenly !important;
    }
    `

    useEffect(() => {
        dispatch(cartActions.getTotals());
    }, [cart, dispatch]);

    

    return ( 
        <form action="" id="checkoutForm">
        <div className="container-checkout d-lg-flex">
            <div className="d-flex flex-column">
            <div className="box-2">
                <div className="box-inner-2">
                    <div>
                        <p className="fw-bold">Contact</p>
                        {/* <p className="dis mb-3">All fields are mandatory</p> */}
                    </div>
                    <div className="mb-3">
                        <p className="dis fw-bold mb-2">Email address</p>
                        <input className="form-control" type="email" name="email" value={personalContact.email} placeholder="Please enter a valid email address"/>
                        { validationMessage[0] === "email" && (
                            <div className="validation">{ validationMessage[1] }</div>
                        )}
                    </div>
                        <div className="mb-3">
                            <p className="dis fw-bold mb-2">Phone number</p>
                            <input className="form-control" type="text" name="phone" pattern="\d*" value={personalContact.phone} placeholder="Please enter your mobile number"/>
                            { validationMessage[0] === "phone" && (
                                <div className="validation">{ validationMessage[1] }</div>
                            )}
                        </div>
                        <div className="mb-3">
                            <p className="dis fw-bold mb-2">Full name</p>
                            <input className="form-control" type="text" name="fullname" value={personalContact.fullname} placeholder="Full name"/>
                            { validationMessage[0] === "fullname" && (
                                <div className="validation">{ validationMessage[1] }</div>
                            )}
                        </div>                
                </div>
            </div>
            <div className="box-2">

            </div>
            <div className="box-2">
                <div className="box-inner-2">
                    <div>
                        <p className="fw-bold">Event Details</p>
                        <p className="dis mb-3">All fields are mandatory</p>
                    </div>
                        <div className="mb-3">
                            <p className="dis fw-bold mb-2">When would you like to get the order</p>
                            <CustomDatePicker
                                showIcon
                                toggleCalendarOnIconClick
                                selected={selectedDate}
                                onChange={handleDateChange}
                                minDate={new Date()}
                                name='deliveryDate'
                                className="form-control text-center input-shadow"
                                />
                        </div>
                        <div className="mb-3">
                            <input name="time" type="time" class="form-control"/>
                        </div>
                        <div className="mb-3">
                            <TimeSlotsDropdown />
                        </div>
                        <div className="mb-3">
                            <label>Select Delivery Region</label>
                            <select
                                name='location-delivery'
                                className="w-100"
                                value=''
                                onChange={(e)=>handleLocationOnSelectChange(e)}
                                required
                                >
                                <option value="">Select  your area</option>
                                {locations.map((location, index)=> (
                                    <option key={index} value={location.area}>{location.area}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <p className="dis fw-bold mb-2">Address</p>
                            <textarea className="form-control" type="text" name="address" value="" placeholder="Address"></textarea>
                        </div>
                        <div className="my-3">
                            <label>
                                <input
                                type="checkbox"
                                name="terms"
                                checked={agreeToTerms}
                                onChange={handleCheckboxChange}
                                />
                                <span>I agree to the terms and refund policy</span>
                            </label>
                        </div>
                </div>
            </div>
            {/* payment */}
            {/* <div className="box-2">
                <div className="box-inner-2">
                    <div>
                        <p className="fw-bold">Payment Details</p>
                        <p className="dis mb-3">Complete your purchase by providing your payment details</p>
                    </div>
                    <form action="">
                        <div className="mb-3">
                            <p className="dis fw-bold mb-2">Email address</p>
                            <input className="form-control" type="email" value="luke@skywalker.com"/>
                        </div>
                        <div>
                            <p className="dis fw-bold mb-2">Card details</p>
                            <div className="d-flex align-items-center justify-content-between card-atm border rounded">
                                <div className="fab fa-cc-visa ps-3"></div>
                                <input type="text" className="form-control" placeholder="Card Details"/>
                                <div className="d-flex w-50">
                                    <input type="text" className="form-control px-0" placeholder="MM/YY"/>
                                    <input type="password" maxlength="3" className="form-control px-0" placeholder="CVV"/>
                                </div>
                            </div>
                            <div className="my-3 cardname">
                                <p className="dis fw-bold mb-2">Cardholder name</p>
                                <input className="form-control" type="text"/>
                            </div>
                            <div className="address">
                                <p className="dis fw-bold mb-3">Billing address</p>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected hidden>United States</option>
                                    <option value="1">India</option>
                                    <option value="2">Australia</option>
                                    <option value="3">Canada</option>
                                </select>
                                <div className="d-flex">
                                    <input className="form-control zip" type="text" placeholder="ZIP"/>
                                    <input className="form-control state" type="text" placeholder="State"/>
                                </div>
                                <div className=" my-3">
                                    <p className="dis fw-bold mb-2">VAT Number</p>
                                    <div className="inputWithcheck">
                                        <input className="form-control" type="text" value="GB012345B9"/>
                                        <span className="fas fa-check"></span>
                                    </div>
                                </div>
                                <div className="d-flex flex-column dis">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <p>Subtotal</p>
                                        <p><span className="fas fa-dollar-sign"></span>33.00</p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <p>VAT<span>(20%)</span></p>
                                        <p><span className="fas fa-dollar-sign"></span>2.80</p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <p className="fw-bold">Total</p>
                                        <p className="fw-bold"><span className="fas fa-dollar-sign"></span>35.80</p>
                                    </div>
                                    <div className="btn btn-primary mt-2">Pay<span className="fas fa-dollar-sign px-1"></span>35.80
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div> */}
        </div>
            <div className="box-2 bg-light user w-100">
            {/* <div className="d-flex align-items-center mb-3">
                <img src="https://images.pexels.com/photos/4925916/pexels-photo-4925916.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    className="pic rounded-circle" alt=""/>
                <p className="ps-2 name">Oliur</p>
            </div> */}
            <div className="box-inner-2 pb-3 mb-3 ">
                {/* <div className="d-flex justify-content-between mb-3 userdetails">
                    <p className="fw-bold">Lightroom Presets</p>
                    <p className="fw-lighter"><span className="fas fa-dollar-sign"></span>33.00+</p>
                </div>
                
                <p className="dis info my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quos ipsa
                    sed officiis odio
                </p>
                <div className="radiobtn">
                    <input type="radio" name="box" id="one"/>
                    <input type="radio" name="box" id="two"/>
                    <input type="radio" name="box" id="three"/>
                    <label for="one" className="box py-2 first">
                        <div className="d-flex align-items-start">
                            <span className="circle"></span>
                            <div className="course">
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <span className="fw-bold">
                                        Collection 01
                                    </span>
                                    <span className="fas fa-dollar-sign">29</span>
                                </div>
                                <span>10 x Presets. Released in 2018</span>
                            </div>
                        </div>
                    </label>
                    <label for="two" className="box py-2 second">
                        <div className="d-flex">
                            <span className="circle"></span>
                            <div className="course">
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <span className="fw-bold">
                                        Collection 01
                                    </span>
                                    <span className="fas fa-dollar-sign">29</span>
                                </div>
                                <span>10 x Presets. Released in 2018</span>
                            </div>
                        </div>
                    </label>
                    <label for="three" className="box py-2 third">
                        <div className="d-flex">
                            <span className="circle"></span>
                            <div className="course">
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <span className="fw-bold">
                                        Collection 01
                                    </span>
                                    <span className="fas fa-dollar-sign">29</span>
                                </div>
                                <span>10 x Presets. Released in 2018</span>
                            </div>
                        </div>
                    </label>
                </div> */}
                
                {/* <div className=" my-3">
                    <p className="dis fw-bold mb-2">VAT Number</p>
                    <div className="inputWithcheck">
                        <input className="form-control" type="text" value="GB012345B9"/>
                        <span className="fas fa-check"></span>
                    </div>
                </div> */}
                {cart.cartItems.map((e, index) => (
                    <div key={'cartitem'+index}>
                        <div className="d-flex justify-content-between mb-3 userdetails">
                            <p className="fw-bold">{e.cartQuantity}x {e.title}</p>
                            {/* <span className="fas fa-dollar-sign"> </span> */}
                            <p className="fw-lighter">AED {e.price}</p>
                        </div>
                        
                        <p className="dis info my-3">{e.description}
                        </p>
                    </div>
                ))
                    
                }
                <div className="d-flex flex-column dis">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <p>Subtotal</p>
                        <p>AED {cart.cartTotalAmount}</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <p className="fw-bold">Total</p>
                        <p className="fw-bold">AED {cart.cartTotalAmount}</p>
                    </div>
                    <div onClick={handleChechout} className="btn btn-primary mt-2">Complete Order<span className="fas fa-dollar-sign px-1"></span>{cart.cartTotalAmount}
                    </div>
                </div>
                {/* end */}
            </div>
        </div>
        </div>
        </form>
     );
}
 
export default Checkout;