import { Helmet } from "react-helmet";

const HelmetSeo = () => {
    return (
        <>
            <Helmet>
                {/* Basic SEO */}
                <title>Book Cabs in Bengaluru | Airport Pickup & Drop Service</title>
                <meta
                    name="description"
                    content="Book affordable cabs in Bengaluru for airport pickup and drop. Fast, reliable, and safe cab booking services near you."
                />
                <meta
                    name="keywords"
                    content="cab booking Bengaluru, airport taxi Bengaluru, pickup and drop cab, taxi near me, Bengaluru airport cab, book cab online Bengaluru"
                />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Cab Booking in Bengaluru - Fast Airport Rides" />
                <meta
                    property="og:description"
                    content="Instant cab booking for Bengaluru Airport. Hassle-free pickups and drops with live tracking and verified drivers."
                />
                <meta property="og:url" content="https://yourfrontenddomain.com" />
                <meta property="og:image" content="https://yourfrontenddomain.com/preview.jpg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Cab Booking in Bengaluru | Safe Airport Transfers" />
                <meta
                    name="twitter:description"
                    content="Bengaluru’s reliable cab booking app for airport pickups and drops. Easy booking, fixed fares, verified drivers."
                />
                <meta name="twitter:image" content="https://yourfrontenddomain.com/preview.jpg" />

                {/* Schema.org Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Bengaluru Cab Booking Service",
                        "image": "https://yourfrontenddomain.com/logo.png",
                        "url": "https://yourfrontenddomain.com",
                        "telephone": "+91-9876543210",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Airport Road",
                            "addressLocality": "Bengaluru",
                            "addressRegion": "Karnataka",
                            "postalCode": "560017",
                            "addressCountry": "IN"
                        },
                        "openingHours": "Mo-Su 00:00-23:59",
                        "priceRange": "₹₹",
                        "servesCuisine": "Cab Service",
                        "sameAs": [
                            "https://www.facebook.com/yourpage",
                            "https://www.instagram.com/yourpage",
                            "https://www.twitter.com/yourpage"
                        ]
                    })}
                </script>
            </Helmet>
        </>
    );
}

export default HelmetSeo;
