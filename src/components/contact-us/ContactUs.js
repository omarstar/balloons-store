import { useEffect, useState } from "react";
import "./contactus.css"
import { useDispatch } from "react-redux";
import { quoteRequestActions } from "../../store/contact/qoute-slice";
import { sendEmailContact } from "../../utils/api";
const ContactUs = () => {

    const dispatch = useDispatch();
    const [validationMessage, setValidationMessage] = useState(["",""])
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: ""
    })

    const handleInputChange = (e, fieldName) => {
        const { name, value } = e.target;
        console.log('whta input field', [name, value, fieldName])
        let isValid = true;
        if (fieldName === 'name' && value.length < 3) {
            isValid = false;
            setValidationMessage([fieldName, "Your Name should at least be three characters"]);
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
            setFormData({...formData, [fieldName]: value})
            setValidationMessage(["",""])
        }

      };


    const handleContactSubmit = async (e) => {
        e.preventDefault();
        console.log('contact submit clicked')
        //validate
        if (!formData.name || !formData.email || !formData.subject || !formData.phone || !formData.message) {
            setValidationMessage(['error', 'Please fill in all fields']);
            return;
          }
          
        //send data to email
        try {
            console.log('formData form values', formData)
            const emailTo = "obarakat12@gmail.com"
            const htmlTemplateText = `
            Name: ${formData.name}
            Email: ${formData.email}
            Subject: ${formData.subject}
            Phone: ${formData.phone}
            Message: ${formData.message}
          `

        //   const encodedHtmlContent = encodeURIComponent(htmlTemplateText);
        //     console.log('encodedHtmlContent', encodedHtmlContent)

        //     const decodedHtmlContent = decodeURIComponent(encodedHtmlContent);
        //     console.log('decodedHtmlContent', decodedHtmlContent)
            
        const response = await sendEmailContact(htmlTemplateText, emailTo)
        console.log('response sending email in contact', response)
        
        //we may use taost and reset this validation msg
        setValidationMessage("success", "Message sent successfully")
        //clear formData
        setFormData({
            name:'',
            email:'',
            subject:'',
            phone:'',
            message:''
        })
        } catch (error) {
            console.error('Error sending message', error);
            setValidationMessage(['error', 'Error sending message']);
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

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
                                                <div className="col-12 col-md-6  form-group"><input className="form-control input-shadow" type="text" name="name" id="name" onBlur={(e)=>handleInputChange(e, 'name')} placeholder="Name" data-rule="maxlen:4" data-msg="Please enter at least 4 chars"/>
                                                    { validationMessage[0] === "name" && (
                                                    <div className="validation">{ validationMessage[1] }</div>
                                                    )}  
                                                </div>
                                                <div className="col-12 col-md-6  form-group"><input className="form-control input-shadow" type="email" name="email" id="email" onBlur={(e)=>handleInputChange(e, 'email')} placeholder="Email" data-rule="email" data-msg="Please enter a valid email"/>
                                                    { validationMessage[0] === "email" && (
                                                    <div className="validation">{ validationMessage[1] }</div>
                                                    )}  
                                                </div>
                                                <div className="col-12 col-md-6  form-group"><input className="form-control input-shadow" type="text" name="subject" id="subject" onBlur={(e)=>handleInputChange(e, 'subject')} placeholder="Subject" data-rule="maxlen:4" data-msg="Please enter at least 8 chars of subject"/>
                                                    { validationMessage[0] === "subject" && (
                                                    <div className="validation">{ validationMessage[1] }</div>
                                                    )}  
                                                </div>
                                                <div className="col-12 col-md-6  form-group"><input className="form-control input-shadow" type="text" name="phone" pattern="[0-9]*" inputMode="numeric" id="phone" onBlur={(e)=>handleInputChange(e, 'phone')} placeholder="Contact number" />
                                                    { validationMessage[0] === "phone" && (
                                                    <div className="validation">{ validationMessage[1] }</div>
                                                    )}  
                                                </div>
                                                <div className="col-12  form-group"><textarea className="form-control input-shadow" name="message" id="message" onBlur={(e)=>handleInputChange(e, 'message')}  placeholder="Your Messages" data-rule="required" data-msg="Message" rows="6"></textarea>
                                                    { validationMessage[0] === "message" && (
                                                    <div className="validation">{ validationMessage[1] }</div>
                                                    )}  
                                                </div>
                                                {validationMessage[0] === "error" && (
                                                    <div className="validation">{validationMessage[1]}</div>
                                                )}
                                                {validationMessage[0] === "success" && (
                                                    <div className="success">{validationMessage[1]}</div>
                                                )}
                                                <div className="col-12">
                                                    <ul className="actions form-buttons">
                                                        <li><input type="submit" id="submit-btn" onClick={handleContactSubmit} className="primary button line-btn" value="Send Message" /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-5 mobile-address-part">
                                    <dl className="contact address-part">
                                        <div className="d-flex justify-content-center" style={{"margin": "auto 20px"}}>
                                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                                            <h3 className="mt-0">Our Address</h3>
                                        </div>
                                        <address>
                                                Al Wasl Center | 1st Floor<br />
                                                Sheikh Zayed Road | Dubai<br />
                                                United Arab Emirates
                                        </address>
                                        <div className="d-flex justify-content-center">
                                            <i className="fa-solid fa-phone" style={{"margin": "auto 20px"}}></i>
                                            <h3>Call Us</h3>
                                        </div>
                                            {/* <a href="tel:+97148876763">+971 4 887 6763</a><br/> */}
                                            <a href="tel:+971551739652">+971 55 173 9652</a>
                                        <div className="d-flex justify-content-center">
                                            <i class="fa fa-envelope" style={{"margin": "auto 20px"}} aria-hidden="true"></i>
                                            <h3>Email Us</h3>
                                        </div>
                                            <a href="mailto:omar.barakat@infracom.me">orders | Funkyballoons</a>
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