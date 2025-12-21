import { CheckCircle2 } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: "Business Setup",
            description: "We handle the A-Z of setting up your business in the UAE. From license application to office space registration.",
            features: ["Free Zone Setup", "License Processing", "Office Space Solutions", "Visa Assistance"]
        },
        {
            title: "Mainland Business Opening",
            description: "Expand your reach with a Mainland license. We guide you through DED regulations and sponsorship requirements.",
            features: ["DED Registration", "Local Sponsorship", "100% Ownership (where applicable)", "Trade License"]
        },
        {
            title: "Business Services",
            description: "Ongoing support ensuring your business runs smoothly after setup.",
            features: ["PRO Services", "Bank Account Opening", "VAT Registration", "Legal Translation"]
        }
    ];

    return (
        <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Premium Services</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Tailored solutions for entrepreneurs and corporations looking to establish a presence in the UAE.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-slate-50 rounded-xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all">
                            <h3 className="text-2xl font-bold text-teal-700 mb-4">{service.title}</h3>
                            <p className="text-slate-600 mb-8 leading-relaxed">{service.description}</p>

                            <ul className="space-y-3">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-slate-700">
                                        <CheckCircle2 className="h-5 w-5 text-teal-500 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
