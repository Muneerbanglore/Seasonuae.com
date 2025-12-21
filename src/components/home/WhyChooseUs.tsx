import { ShieldCheck, ArrowRight } from 'lucide-react';
import modernOffice from '../../assets/images/modern-office.png';

const features = [
    {
        title: "Government Liaison",
        description: "Direct connection with government bodies for swift approvals."
    },
    {
        title: "Bank Assistance",
        description: "Strong relationships with top UAE banks for easy account opening."
    },
    {
        title: "Transparent Pricing",
        description: "No hidden fees. What you see is exactly what you pay."
    },
    {
        title: "Dedicated Support",
        description: "A personal consultant assigned to guide you 24/7."
    }
];

const WhyChooseUs = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Content */}
                    <div>
                        <span className="text-teal-600 font-semibold tracking-wider text-sm uppercase block mb-2">Why Choose Us</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 font-raleway leading-[1.15]">
                            We Simplify The <br />
                            <span className="text-teal-600">Complexities</span>
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-10">
                            Setting up a business involves navigating through various legal and administrative procedures.
                            Our team of experts handles everything from A to Z, ensuring a hassle-free experience for you.
                        </p>

                        <div className="space-y-6">
                            {features.map((item, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mt-1">
                                        <div className="w-2 h-2 rounded-full bg-teal-600"></div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                                        <p className="text-slate-600">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10">
                            <a href="#contact" className="inline-flex items-center text-teal-700 font-semibold hover:text-teal-800 transition-colors group">
                                Start Your Journey
                                <ArrowRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Visuals */}
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[600px] w-full">
                            <img
                                src={modernOffice}
                                alt="Season UAE Office"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent"></div>

                            {/* Floating Card */}
                            <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl text-white">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                                        <ShieldCheck className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg">100% Secure</p>
                                        <p className="text-teal-100 text-sm">Protected Process</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-teal-200/50 rounded-3xl"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
