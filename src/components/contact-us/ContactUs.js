import { useState } from "react";
import "./contactus.css"
import { useDispatch } from "react-redux";
import { quoteRequestActions } from "../../store/contact/qoute-slice";
const ContactUs = () => {

    const dispatch = useDispatch();
    const [validationMessage, setValidationMessage] = useState(["",""])

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
        console.log('isValid in handleInputChange', isValid);
        
        if(isValid){
            dispatch(quoteRequestActions.updateContactData({ field: name, value }));
            setValidationMessage(["",""])
        }

      };


    const handleContactSubmit = (e) => {
        e.preventDefault();
        //validate
        //send data to email
        setValidationMessage("")
    }

    return ( 
        <>
            <section className="">
                <div className="row">
                    <div className="form-holder">
                        <div className="contactus-title ff-itali"><h3>Contact Us</h3></div>
                        <div className="contactus-desc"><p>Tell us your details and we'll get right back to you.</p></div>
                        <div className="contactus-form-wrapper">
                        <div className="row form-row">
                                <div className="col-12 col-lg-7">
                                    <div className="contact form-part">
                                        <form method="POST" action="sendmail.php" className="contact-form">
                                            <div className="row gtr-uniform">
                                                <div className="col-12 col-md-6  form-group"><input className="form-control input-shadow" type="text" name="name" id="name" onChange={(e)=>handleInputChange(e, 'name')} placeholder="Name" data-rule="maxlen:4" data-msg="Please enter at least 4 chars"/>
                                                    { validationMessage[0] === "name" && (
                                                    <div className="validation">{ validationMessage[1] }</div>
                                                    )}  
                                                </div>
                                                <div className="col-12 col-md-6  form-group"><input className="form-control input-shadow" type="email" name="email" id="email" onChange={(e)=>handleInputChange(e, 'email')} placeholder="Email" data-rule="email" data-msg="Please enter a valid email"/>
                                                    { validationMessage[0] === "email" && (
                                                    <div className="validation">{ validationMessage[1] }</div>
                                                    )}  
                                                </div>
                                                <div className="col-12 col-md-6  form-group"><input className="form-control input-shadow" type="text" name="subject" id="subject" onChange={(e)=>handleInputChange(e, 'subject')} placeholder="Subject" data-rule="maxlen:4" data-msg="Please enter at least 8 chars of subject"/>
                                                    { validationMessage[0] === "subject" && (
                                                    <div className="validation">{ validationMessage[1] }</div>
                                                    )}  
                                                </div>
                                                <div className="col-12 col-md-6  form-group"><input className="form-control input-shadow" type="text" name="phone" pattern="[0-9]*" inputMode="numeric" id="phone" onChange={(e)=>handleInputChange(e, 'phone')} placeholder="Contact number" />
                                                    { validationMessage[0] === "phone" && (
                                                    <div className="validation">{ validationMessage[1] }</div>
                                                    )}  
                                                </div>
                                                <div className="col-12  form-group"><textarea className="form-control input-shadow" name="message" id="message" onChange={(e)=>handleInputChange(e, 'message')}  placeholder="Your Messages" data-rule="required" data-msg="Message" rows="6"></textarea>
                                                    { validationMessage[0] === "message" && (
                                                    <div className="validation">{ validationMessage[1] }</div>
                                                    )}  
                                                </div>
                                                <div className="col-12">
                                                    <ul className="actions form-buttons">
                                                        <li><input type="submit" id="submit-btn" onClick={handleContactSubmit} className="primary button line-btn" value="Send Message" /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-5">
                                    <dl className="contact address-part">
                                        <h3 className="mt-0">Our Address</h3>
                                        <address>
                                                JAFZA 14 | Office 434 | PO Box 262995<br />
                                                Jebel Ali | Dubai<br />
                                                United Arab Emirates
                                        </address>
                                        <h3>Call Us</h3>
                                        <a href="tel:+97148876763">+971 4 887 6763</a><br/>
                                            <a href="tel:+97143686083">+971 4 368 6083</a>
                                        <h3>Email Us</h3>
                                        <a href="mailto:">funkymonkeyuae</a>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default ContactUs;