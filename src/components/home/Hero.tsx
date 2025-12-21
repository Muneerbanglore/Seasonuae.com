import ContactForm from '../common/ContactForm'; // Assuming this path exists
import dubaiSkyline from "../../assets/dubai-skyline.png";

const Hero = () => {
    return (
        <section className="relative bg-teal-900 text-white py-20 lg:py-32 overflow-hidden font-sans">

            {/* Background Image with Rich Gradient Overlay */}
            <div className="absolute inset-0 z-0 opacity-20">
                <img
                    src={dubaiSkyline} // Ensure this image path is correct
                    alt="Dubai Skyline"
                    className="w-full h-full object-cover object-center"
                />
                {/* Gradient: Heavy on mobile for readability, fading to right on desktop */}
                <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-teal-950/95 via-teal-900/90 to-teal-800/60 mix-blend-multiply lg:mix-blend-normal"></div>
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                    {/* Left Column: Text Content */}
                    <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left space-y-6 lg:space-y-8 pt-10 lg:pt-0">

                        {/* Tag - Replaced 'Offer' with Generic Trust Tag */}
                        <div className="inline-flex items-center justify-center lg:justify-start">
                            <span className="bg-teal-800/80 backdrop-blur-sm border border-teal-600 px-4 py-1.5 rounded-full">
                                <p className="text-[10px] lg:text-xs font-bold text-teal-100 uppercase tracking-widest">
                                    Trusted Business Setup Consultants
                                </p>
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-raleway font-semibold text-white uppercase leading-tight tracking-tight drop-shadow-lg">
                            SET UP <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cfb586] to-[#f3e5b5]">YOUR</span><br />
                            BUSINESS IN UAE
                        </h1>

                        {/* Description */}
                        <p className="text-base sm:text-lg text-teal-100 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                            Start your journey today with the UAE's most efficient business consultants.
                            We handle the paperwork so you can focus on your success.
                            Straight to business in 24 hours.
                        </p>

                        {/* Trust Badges */}
                        <div className="pt-4 border-t border-teal-800/50 mt-4">
                            <p className="text-xs text-teal-400 uppercase tracking-wider mb-4 font-semibold">Recognized By</p>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-6 opacity-80">
                                <img src="https://cdn-icons-png.flaticon.com/512/6928/6928929.png" alt="Approved" className="h-8 lg:h-10 w-auto brightness-0 invert hover:scale-110 transition-transform duration-300" />
                                <img src="https://cdn-icons-png.flaticon.com/512/3176/3176294.png" alt="Certified" className="h-8 lg:h-10 w-auto brightness-0 invert hover:scale-110 transition-transform duration-300" />
                                <img src="https://cdn-icons-png.flaticon.com/512/6364/6364343.png" alt="Awarded" className="h-8 lg:h-10 w-auto brightness-0 invert hover:scale-110 transition-transform duration-300" />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form Area */}
                    <div className="lg:col-span-5 relative mt-8 lg:mt-0">
                        {/* Decorative Blur Effect behind form */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-teal-500/20 blur-3xl rounded-full pointer-events-none"></div>

                        {/* Form Container */}
                        <div className="bg-transparent backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/20 relative z-20 mx-auto max-w-md w-full">
                            <div className="mb-4 text-center lg:text-left">

                            </div>
                            <ContactForm />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;