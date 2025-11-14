import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const sendWhatsAppMessage = async (message) => {
    try {
        const url = `https://graph.facebook.com/v17.0/${process.env.PHONE_NUMBER_ID}/messages`;


        const data = {
            messaging_product: "whatsapp",
            to: "916303845985",
            type: "text",
            text: { body: message },
        };

        const res = await axios.post(url, data, {
            headers: {
                Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
                "Content-Type": "application/json"
            }

        });

        console.log("WhatsApp sent:", res.data);
    } catch (error) {
        console.error("WhatsApp Error:", error.response?.data || error.message);
    }
};
