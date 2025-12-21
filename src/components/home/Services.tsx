import { FileText, Building, CreditCard, Users, Landmark, FileCheck, ArrowRight } from 'lucide-react';

const services = [
    {
        title: "Mainland Formation",
        desc: "Direct access to local and international markets with 100% ownership options.",
        icon: Building,
        image: "/images/business-tower.png"
    },
    {
        title: "Free Zone Setup",
        desc: "Enjoy 100% foreign ownership, tax exemptions, and simplified setup procedures.",
        icon: Landmark,
        image: "/images/modern-office.png"
    },
    {
        title: "Visa Services",
        desc: "Seamless visa processing for investors, employees, and family sponsorship.",
        icon: Users,
        image: "/images/visa-consultation.png"
    },
    {
        title: "Bank Account",
        desc: "Expert assistance in opening corporate and personal bank accounts.",
        icon: CreditCard,
        image: "/images/banking-finance.png"
    },
    {
        title: "PRO Services",
        desc: "Efficient handling of government documents, clearances, and approvals.",
        icon: FileCheck,
        image: "/images/business-tower.png"
    },
    {
        title: "Legal Translation",
        desc: "Accurate and certified translation services for all official documents.",
        icon: FileText,
        image: "/images/visa-consultation.png"
    }
];

const Services = () => {
    return (
        <section className="py-24 bg-white" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="md:max-w-2xl">
                        <span className="text-teal-600 font-semibold tracking-wider text-sm uppercase block mb-2">Our Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-raleway leading-tight">
                            World-Class <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">Business Solutions</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="group relative h-[400px] w-full overflow-hidden rounded-2xl cursor-pointer">
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/90 via-teal-900/40 to-transparent transition-opacity duration-300 group-hover:from-teal-950/95" />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
                                            <service.icon className="w-6 h-6 text-teal-300" />
                                        </div>
                                        <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100">
                                            <ArrowRight className="w-5 h-5 text-white" />
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-3 font-raleway">
                                        {service.title}
                                    </h3>

                                    <p className="text-teal-100/80 text-base leading-relaxed line-clamp-2 group-hover:line-clamp-none group-hover:opacity-100 transition-opacity duration-500">
                                        {service.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
