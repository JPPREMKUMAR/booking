import { Helmet } from "react-helmet";

const HelmetSeo = () => {
    return (
        <>
            <Helmet>
                <title>Cab Booking in Bengaluru | Airport Taxi | Outstation Rides</title>
                <meta
                    name="description"
                    content="Book cabs in Bengaluru for airport pickup, drop, and outstation rides. Affordable, safe, and 24x7 cab booking service in Bengaluru."
                />
                <meta
                    name="keywords"
                    content="cab booking bengaluru, taxi service bangalore, airport taxi bengaluru, local cab bengaluru, outstation taxi bengaluru, bengaluru cab service, ride booking, book cab online bengaluru, cab for airport, taxi for outstation"
                />
                <meta name="author" content="Cab Booking Team" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="English" />
                <meta name="geo.region" content="IN-KA" />
                <meta name="geo.placename" content="Bengaluru" />
                <meta name="geo.position" content="12.9716;77.5946" />
                <meta name="ICBM" content="12.9716, 77.5946" />

                {/* ✅ Updated Local Business Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        name: "Cab Booking Bengaluru",
                        image: "https://booking-one-sage.vercel.app/logo.png",
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "MG Road, Shivaji Nagar",
                            addressLocality: "Bengaluru",
                            addressRegion: "Karnataka",
                            postalCode: "560001",
                            addressCountry: "IN",
                        },
                        url: "https://booking-one-sage.vercel.app/",
                        telephone: "+91XXXXXXXXXX",
                        priceRange: "₹₹",
                    })}
                </script>
            </Helmet>

        </>
    );
}

export default HelmetSeo;
