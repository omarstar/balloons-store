import axios from "axios";
const APPURL = process.env.REACT_APP_API_URL??"";
const PORT = process.env.REACT_APP_PORT??'84';
const apiUrls = {
    sendEmailContact:  APPURL + PORT + `/send-email`,
}
// contact, qoute, checkout

export const sendEmailContact = async(htmlTemplate, emailTo) => {

    const sendemailData = {
        "text": htmlTemplate,
        "email": emailTo,
    }
    console.log('coming data to backend', sendemailData)

    try {
        const response = await axios.post(apiUrls['sendEmailContact'], sendemailData)
        console.log('rs: validate ', response.data)
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; 
    }
}