import { Clock, Headset, Receipt, ShieldCheck } from 'lucide-react';

const features = [
    { 
        icon: Headset,
        label: "24/7 Support", 
        subtext: "Always here to help" 
    },
    { 
        icon: Clock,
        label: "Express Setup", 
        subtext: "Get licensed fast" 
    },
    { 
        icon: Receipt,
        label: "Best Pricing", 
        subtext: "No hidden costs" 
    },
    { 
        icon: ShieldCheck,
        label: "Secure Process", 
        subtext: "100% Compliant" 
    },
];

const Stats = () => {
    return (
        <section className="bg-teal-950 py-12 relative overflow-hidden border-y border-teal-800/30">
             {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-800 via-transparent to-transparent opacity-50"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-teal-800/30">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-2 group cursor-default">
                            <div className="mb-3 p-3 bg-teal-900/50 rounded-full group-hover:bg-teal-800/50 transition-colors duration-300">
                                <feature.icon className="w-6 h-6 text-teal-400 group-hover:text-teal-200 transition-colors" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1 font-raleway tracking-wide">
                                {feature.label}
                            </h3>
                            <p className="text-teal-300/70 text-xs uppercase tracking-wider font-medium">
                                {feature.subtext}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
