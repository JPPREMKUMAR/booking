
import TermsOfServices from "../pages/TermsOfServices"




const PrivacyPolicy = () => {

    return (

        <div>


            <div className="px-5 py-5 w-full text-gray-50 mx-2 shadow-xl rounded-md">
                <h1 className="text-3xl text-center font-bold text-[#FFD700]">🛡️ Privacy Policy – RKN Airport Taxi</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 my-3">

                    <div className="p-5">


                        <h1 className="text-xl font-bold  my-1 text-[#007BFF]">🛡️ Privacy Policy</h1>

                        <p className="text-md font-semibold text-gray-700 my-1">
                            At RKN Airport Taxi, we value your trust and respect your privacy.
                            This Privacy Policy explains how we collect, use, and protect your personal information when you use our website, booking form, or related services.
                        </p>

                    </div>


                    <div className="p-5">
                        <h1 className="text-xl font-bold  my-1 text-[#007BFF]">📋 Information We Collect</h1>
                        <p className="text-md font-semibold text-gray-700 my-1">
                            We collect only the information necessary to provide our cab services effectively: <br />

                            Name <br />

                            Contact Number<br />

                            Email Address<br />

                            Pickup and Drop Locations<br />
                            Date and Time of Booking<br />

                            This data helps us confirm bookings, send notifications, and ensure smooth communication between you and our team.<br />

                        </p>
                    </div>


                    <div className="p-5">
                        <h1 className="text-xl font-bold  my-1 text-[#007BFF]">💬 Communication</h1>
                        <p className="text-md font-semibold text-gray-700 my-1">
                            By booking with us, you agree to receive booking confirmations, updates, and important notifications via SMS, Email, or WhatsApp.<br />
                            You can opt out anytime by contacting us directly.
                        </p>
                    </div>

                    <div className="p-5">
                        <h1 className="text-xl font-bold  my-1 text-[#007BFF]">🔒 How We Use Your Information</h1>
                        <p className="text-md font-semibold text-gray-700 my-1">

                            We use your information strictly for service-related purposes: <br />

                            To confirm and manage cab bookings <br />

                            To send booking confirmations via SMS and Email <br />

                            To share ride details with drivers securely <br />

                            To provide customer support and updates <br />

                            To improve our website and service quality <br />

                            We do not sell, rent, or share your personal information with any third parties for marketing purposes.


                        </p>
                    </div>


                    <div className="p-5">
                        <h1 className="text-xl font-bold  my-1 text-[#007BFF]">🗑️ Data Retention</h1>
                        <p className="text-md font-semibold text-gray-700 my-1">
                            Your booking and contact details are securely stored only as long as needed to complete your ride and for record purposes as per applicable law.

                        </p>
                    </div>

                    <div className="p-5">
                        <h1 className="text-xl font-bold  my-1 text-[#007BFF]">📞 Contact Us</h1>
                        <p className="text-md font-semibold text-gray-700 my-1">
                            If you have any questions about this Privacy Policy or how we handle your data, contact us at: <br />
                            <a>Email : sample@gamil.com</a> <br />
                            Number : <a href={`tel:+916303845985`} className=" hover:text-[#007BFF]" >6303845985</a>


                        </p>
                    </div>

                </div>




            </div >

            <TermsOfServices />

        </div>
    )
}


export default PrivacyPolicy