import axios from "axios"


const fastSMS = async () => {

    const API_KEY = process.env.FAST2SMS_API_KEY;
    const TEST_NUMBER = process.env.TEST_NUMBER;

    const messsage = "Test SMS from RKN taxi Airport";

    try {

        const response = await axios.post("https://www.fast2sms.com/dev/bulkV2", {
            route: "v3",
            sender_id: "TXTIND",
            messsage,
            language: "english",
            numbers: process.env.TEST_NUMBER
        }, { headers: { authorization: process.env.FASTSMS_API_KEY } })

        console.log("SMS Sent Successfully.")
        console.log(response)


    } catch (e) {
        console.log("Error Sending Message.");
        console.log(e);
    }


}




export default fastSMS