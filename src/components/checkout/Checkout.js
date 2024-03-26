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

    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);//[{}]
    const personalContact = useSelector((state) => state.checkout.personalData)
    const selectedDate = useSelector((state) => state.checkout.selectedDate);
    const availableTimeSlots = useSelector((state) => state.checkout.availableTimeSlots);
    const agreeToTerms = useSelector(isSelectAgreement);

    console.log('the all checkout data:', useSelector((state) => state.checkout))

    // const correctGreenSign = '<span className="fas fa-check"></span>'
    // const [selectedDate, setSelectedDate] = useState(new Date())
    // const [selectedTime, setSelectedTime] = useState("")

    const [validationMessages, setValidationMessages] = useState({})
    const [deliveryOption, setDeliveryOption] = useState('pickup')  
    
    const handleDeliveryOptionChange = (option) => {
        setDeliveryOption(option);
    };

    const handleCheckboxChange = () => {
        dispatch(checkOrderActions.toggleAgreement());
      };

    const handleDateChange = (dateSelected) => {
        const formatedDate = formatDateToYMD(dateSelected)
        console.log('dateSelected: ', dateSelected)
        console.log('serializedDate: ', formatDateToYMD(dateSelected) )

        dispatch(checkOrderActions.updateDeliveryData({ field: 'deliveryDate', value: formatedDate}))
        dispatch(checkOrderActions.updateAvailableTimeSlots(dateSelected))
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        let newValidationMessages = { ...validationMessages }; // Copy current validation messages

        // Perform validation based on field name
        switch (name) {
            case 'email':
                newValidationMessages.email = !/\S+@\S+\.\S+/.test(value) ? "Please enter a valid email address" : "";
                break;
            case 'phone':
                newValidationMessages.phone = !/^\d*$/.test(value) ? "Please enter a valid phone number" : "";
                break;
            case 'fullname':
                newValidationMessages.fullname = value.length < 4 ? "Please enter at least 4 characters" : "";
                break;
            default:
                break;

                
            };
        dispatch(checkOrderActions.updatePersonalData({ field: name, value }));
        setValidationMessages(newValidationMessages);

    }

    const handleLocationOnSelectChange = (e) => {
    const { name, value } = e.target;
    dispatch(checkOrderActions.updateDeliveryData({ field: name, value }));
    };
        
    const handleChechout = () => {

        var payloadData = {
            cartItems: cart.cartItems,
            personalData: personalContact,
            eventData: {
                date: selectedDate,
                decortime: "", // You can update this field accordingly
                starttime: '', // Update with selected time
                endtime: "", // You can update this field accordingly
                messagenote: "" // You can update this field accordingly
            },
            addressDetails: {
                locationEvent: '',
                address: '',
                isDelivery: true // Assuming it's a delivery
            }
        }

        var payLoad = {
            "cartItems": cart.cartItems,
            "cartTotalQuantity": 0,
            "cartTotalAmount": 0,
            "personalData": {
                "name": "Tayyab",
                "email": "tayyabalizaheer@gmail.com",
                "phone": "0561902113"
            },
            "eventData": {
                "date": "",
                "decortime": "",
                "starttime": "",
                "endtime": "",
                "messagenote": ""
            },
            "addressDetails": {
                "locationEvent": "",
                "address": "",
                "isDelivery": false
            }
        
            
            
        };
        // for test
        // while we need to get the data from the state later, means directly to the payload.
        const form = $('#checkoutForm').serializeArray();
        var data = [];
        form.forEach(f=>{
            data[f.name] = f.value;
        });
        console.log('data that will be sent to the send email api',data);
        // the data that will be sent to the send email api
    }

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
        <form method="POST" action="" id="checkoutForm" className="contact-form">
        <div className="container-checkout d-lg-flex">
            <div className="d-flex flex-column">
                <div className="box-2">
                    <div className="box-inner-2">
                        <div class=" ff-itali chk-title"><h3>Personal Info</h3></div>
                        {/* <div>
                            <p className="fw-bold">Contact</p>
                            <p className="dis mb-3">All fields are mandatory</p>
                        </div> */}
                        <div className="mb-3">
                            <p className="dis fw-bold mb-2">Email address</p>
                            <input className="form-control input-shadow" type="email" name="email" value={personalContact.email || ''} placeholder="Please enter a valid email address"/>
                            { validationMessages.email && (
                                <div className="validation">{ validationMessages.email}</div>
                            )}
                        </div>
                        <div className="mb-3">
                            <p className="dis fw-bold mb-2">Phone number</p>
                            <input className="form-control input-shadow" type="text" name="phone" pattern="[0-9]*" inputMode="numeric" id="phone" onBlur={(e)=>handleInputChange(e)} value={personalContact.phone || ''} placeholder="Please enter your mobile number"/>
                            { validationMessages.phone && (
                                <div className="validation">{ validationMessages.phone }</div>
                            )}
                        </div>
                        <div className="mb-3">
                            <p className="dis fw-bold mb-2">Full name</p>
                            <input className="form-control input-shadow" type="text" name="fullname" id="name" onBlur={(e)=>handleInputChange(e)} value={personalContact.fullname || ''} placeholder="Full name" data-rule="maxlen:4" data-msg="Please enter at least 4 chars"/>
                            { validationMessages.fullname && (
                                <div className="validation">{ validationMessages.fullname }</div>
                            )}
                        </div>                
                    </div>
                </div>
                <div className="box-2">

                </div>
                <div className="box-2">
                    <div className="box-inner-2">
                        <div class=" ff-itali chk-title"><h3>Event Details</h3></div>
                        {/* choose delivery option radio */}
                        <div className="mb-3">
                        <p className="dis fw-bold mb-2">Choose delivery option:</p>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="deliveryOption"
                                    value="pickup"
                                    checked={deliveryOption === 'pickup'}
                                    onChange={() => handleDeliveryOptionChange('pickup')}
                                />
                                Pick up
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="deliveryOption"
                                    value="delivery"
                                    checked={deliveryOption === 'delivery'}
                                    onChange={() => handleDeliveryOptionChange('delivery')}
                                />
                                Delivery
                            </label>
                        </div>
                    </div>
                    {deliveryOption === 'delivery' && (
                        <div>
                            <div className="mb-3">
                                {/* Input fields for delivery */}
                            </div>
                            <div className="mb-3">
                                <label>Select Delivery Region</label>
                                {/* Dropdown for selecting delivery region */}
                            </div>
                            <div className="mb-3">
                                <p className="dis fw-bold mb-2">Address</p>
                                {/* Textarea for entering address */}
                            </div>
                        </div>
                    )}
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
                    {/*  */}
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
        </div>
        {/* end of dflex clmn and start of box order section */}
            <div className="box-2 bg-light user w-100 order-box-section">
            {/* <div className="d-flex align-items-center mb-3">
                <img src="https://images.pexels.com/photos/4925916/pexels-photo-4925916.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    className="pic rounded-circle" alt=""/>
                <p className="ps-2 name">Oliur</p>
            </div> */}
            <div className="box-inner-2 pb-3 mb-3 ">
                <div className="d-flex justify-content-between mb-3 userdetails">
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
                                        Pick up
                                    </span>
                                    <span >AED 29</span>
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
                                        by Delivery
                                    </span>
                                    <span >AED 29</span>
                                </div>
                                <span>10 x Presets. Released in 2018</span>
                            </div>
                        </div>
                    </label>
                </div>
                
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
                    <div onClick={handleChechout} className="btn btn-primary mt-2">Complete Order<span className="px-1"> AED </span>{cart.cartTotalAmount}
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