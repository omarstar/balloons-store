import "./contactForms.css"
import "../contact-us/contactus.css"
import { useDispatch, useSelector } from "react-redux";
import { quoteRequestActions } from "../../store/contact/qoute-slice";
import 'react-datepicker/dist/react-datepicker.module.css'
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import styled from "styled-components";
import { locations, toastOption } from "../../utils/constants";
import { toast } from "react-toastify";
// validate the input form
// dispatch the form data to Quote store
// call api to send email

const QuoteRental = () => {

    const dispatch = useDispatch();
    const contactPersonal = useSelector((state) => state.quoterequest.contactinfo);
    const contactEvent = useSelector((state) => state.quoterequest.eventData);
    console.log('contactPersonal', contactPersonal??{})
    console.log('contactEvent', contactEvent??{})

    const [validationMessage, setValidationMessage] = useState(["",""])
    const [selectedDate, setSelectedDate] = useState(new Date())
    // const [timeValue, setTimeValue] = useState('');
    // const [timeError, setTimeError] = useState('');

    const CustomDatePicker = styled(ReactDatePicker)`
    .react-datepicker__calendar-icon {
        display: flex !important;
        justify-content: space-evenly !important;
    }
    `

    const handleInputChange = (e, fieldName) => {
        const { name, value } = e.target;
        let isValid = true;
        if (fieldName === 'name' && value.length < 3) {
            isValid = false;
            setValidationMessage([fieldName, "Your Name is Required"]);
        } else if (fieldName === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            isValid = false;
            setValidationMessage([fieldName, "valid email si required"]);
        } else if (fieldName === 'phone' && !/^\d*$/.test(value)) {
            isValid = false;
            setValidationMessage([fieldName, "Please enter a valid phone number"])
        }
        
        if(isValid){
            dispatch(quoteRequestActions.updateContactData({ field: name, value }));
            setValidationMessage(["",""])
        }

      };

      const handleDateChange = (dateSelected) => {
        setSelectedDate(dateSelected)
        dispatch(quoteRequestActions.updateEventData({field : 'date', value: dateSelected}))
      }

      const handleTimeChange = (e) => {
        const { name, value } = e.target;
        console.log('time change', value)
          dispatch(quoteRequestActions.updateEventData({ field: name, value }));
        // if (/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(value)) {
        //   setTimeValue(value);
        //   setTimeError('');
        //   dispatch(quoteRequestActions.updateEventData({ field: 'time', value }));
        // } else {
        //   setTimeError('Please enter a valid time (HH:mm)');
        // }
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        //validate
        //send data to email
        setValidationMessage("")
      }

      const handleLocationOnSelectChange = (e) => {
        const { name, value } = e.target;
        dispatch(quoteRequestActions.updateEventData({ field: name, value }));
      };

// action="sendmail.php"
    return ( 
        <section className="">
                <div className="row">
                    <div className="form-holder">
                        {/* <div className="contactus-title ff-itali"><h3></h3></div> */}
                        <div className="contactus-desc"><p>Tell us your details and we'll get right back to you.</p></div>
                        <div className="contactus-form-wrapper d-flex justify-content-center">
                        <div className="row form-row">
                                <div className="col-12 col-lg-7">
                                    <div className="contact form-part">
                                        <form method="POST" onSubmit={handleSubmit} className="contact-form">
                                            <div className="row gtr-uniform">
                                                <div className="col-12 col-md-6  form-group">
                                                    <input onChange={(e)=>handleInputChange(e, 0)} className="form-control input-shadow" type="text" name="name" id="name" value={contactPersonal.name} placeholder="Name" data-rule="minlen:3" data-msg="Please enter at least 4 chars"/>
                                                    { validationMessage[0] === "name" && (
                                                        <div className="validation">{ validationMessage[1] }</div>
                                                    )}
                                                </div>
                                                <div className="col-12 col-md-6  form-group">
                                                    <input onChange={(e)=>handleInputChange(e, 2)} className="form-control input-shadow" type="email" name="email" id="email" value={contactPersonal.email} placeholder="Email" data-rule="email" data-msg="Please enter a valid email"/>
                                                    { validationMessage[0] === "email" && (
                                                        <div className="validation">{ validationMessage[1] }</div>
                                                    )}
                                                </div>
                                                <div className="col-12 col-md-6  form-group">
                                                    <input onChange={(e)=>handleInputChange(e, 4)} className="form-control input-shadow" type="text" name="phone" pattern="\d*" 
                                                    inputMode="numeric" id="phone" value={contactPersonal.phone} placeholder="Phone Number" maxLength={12} oninvalid="this.setCustomValidity('Not Valid')" />
                                                    { validationMessage[0] === "phone" && (
                                                        <div className="validation">{ validationMessage[1] }</div>
                                                    )}
                                                </div>

                                                <div className="col-12 col-md-6  form-group">
                                                    <input onChange={(e)=>handleInputChange(e, 3)} className="form-control input-shadow" type="text" name="subject" id="subject" placeholder="Subject" data-rule="maxlen:4" data-msg="Please enter at least 8 chars of subject"/>
                                                    { validationMessage[0] === "subject" && (
                                                        <div className="validation">{ validationMessage[1] }</div>
                                                    )}
                                                </div>

                                                <div className="row">
                                                    <h2>Event Details</h2>
                                                </div>
                                                <div className="col-12 col-md-6 form-group date-picker__calendar-icon">
                                                    <label>Date</label>
                                                    <CustomDatePicker
                                                    showIcon
                                                    toggleCalendarOnIconClick
                                                    selected={selectedDate}
                                                    onChange={handleDateChange}
                                                    minDate={new Date()}
                                                    
                                                    className="form-control text-center input-shadow"
                                                    />
                                                </div>

                                                <div className="col-12 col-md-6 form-group ">
                                                    <label>Decorators Start Time</label>
                                                    <input
                                                        type="time"
                                                        name="decortime"
                                                        value={contactEvent.decortime}
                                                        onChange={handleTimeChange}
                                                        className="form-control text-center input-shadow"
                                                        placeholder="Enter time (HH:mm)"
                                                        required
                                                    />
                                                </div>

                                                <div className="col-12 col-md-6 form-group custom-pd-top">
                                                    <label>Event Start Time</label>
                                                    <input
                                                        type="time"
                                                        name="starttime"
                                                        value={contactEvent.starttime}
                                                        onChange={handleTimeChange}
                                                        className="form-control text-center input-shadow"
                                                        placeholder="Enter time (HH:mm)"
                                                        required
                                                    />
                                                </div>

                                                <div className="col-12 col-md-6 form-group custom-pd-top">
                                                    <label>Event End Time</label>
                                                    <input
                                                        type="time"
                                                        name="endtime"
                                                        value={contactEvent.endtime}
                                                        onChange={handleTimeChange}
                                                        className="form-control text-center input-shadow"
                                                        placeholder="Enter time (HH:mm)"
                                                        required
                                                    />
                                                </div>
                                                <div className="col-12 form-group custom-pd-top">
                                                    <label>Event Location</label>
                                                    <select
                                                        name={'locationEvent'}
                                                        className="w-100"
                                                        value={contactEvent.locationEvent}
                                                        onChange={(e) => handleLocationOnSelectChange(e)}
                                                        required
                                                        >
                                                        <option value="">Select  your area</option>
                                                        {locations.map((location, index)=> (
                                                            <option key={index} value={location.area}>{location.area}</option>
                                                        ))}
                                                    </select>
                                                </div>

                                                <div className="col-12  form-group">
                                                    <textarea className="form-control input-shadow" name="messagenote" id="message" placeholder="Decoration setup notes, questions about event booking" data-rule="required" data-msg="Message" rows="6"></textarea>
                                                </div>
                                                <div className="col-12">
                                                    <ul className="actions form-buttons">
                                                        <li>
                                                            <input type="submit" id="submit-btn" className="primary button line-btn" value="Send Message" onClick={()=>{return toast.success(`your Qoute is sent successfully`, toastOption)}} />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-5">
                                    <dl className="contact address-part h-max">
                                        <div class="address-part_title">
                                            <h3 className="sendMessage-title">SEND US A MESSAGE</h3>
                                            <p>Looking to book an event with us or need decor to support your party theme? Call us or send us a message to find out how we can help!</p>
                                        </div>
                                        <div className="v-space"></div>
                                        <div className="d-flex justify-content-center" style={{"margin": "auto 20px"}}>
                                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                                            <h3 className="mt-0">Our Address</h3>
                                        </div>
                                        <address>
                                                JAFZA 14 | Office 434 | PO Box 262995<br />
                                                Jebel Ali | Dubai<br />
                                                United Arab Emirates
                                        </address>

                                        <div class="contact-call">
                                            <div className="d-flex justify-content-center">
                                                <i className="fa-solid fa-phone" style={{"margin": "auto 20px"}}></i>
                                                <h3>Call Us</h3>
                                            </div>
                                            <a href="tel:+97148876763">+971 4 887 6763</a><br/>
                                            <a href="tel:+97143686083">+971 4 368 6083</a>
                                        </div>

                                        <div className="d-flex justify-content-center">
                                         <i class="fa fa-envelope" style={{"margin": "auto 20px"}} aria-hidden="true"></i>
                                            <h3>Email Us</h3>
                                        </div>
                                        <a href="mailto:">funkymonkeyuae</a>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
     );
}
 
export default QuoteRental;