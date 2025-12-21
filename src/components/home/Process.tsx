
import { MessageSquare, FileText, CheckCircle2, Rocket } from 'lucide-react';

const steps = [
    {
        icon: MessageSquare,
        title: "Consultation",
        desc: "We discuss your business activities and recommend the best jurisdiction plan."
    },
    {
        icon: FileText,
        title: "Documentation",
        desc: "We help you prepare all necessary documents and application forms."
    },
    {
        icon: CheckCircle2,
        title: "Approvals",
        desc: "We submit your application and handle all government liaisons for you."
    },
    {
        icon: Rocket,
        title: "Launch",
        desc: "Receive your license and start operating your business in the UAE."
    }
];

const Process = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Line connecting steps (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-12"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-20">
                    <span className="text-teal-600 font-semibold tracking-wider text-sm uppercase block mb-2">How It Works</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 font-raleway">
                        Simple 4-Step <span className="text-teal-600">Process</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative bg-white lg:bg-transparent p-6 rounded-2xl border border-slate-100 lg:border-none shadow-sm lg:shadow-none text-center group">
                            <div className="w-20 h-20 mx-auto bg-white rounded-full border-4 border-slate-50 shadow-sm flex items-center justify-center mb-6 relative z-10 group-hover:border-teal-500 transition-colors duration-300">
                                <step.icon className="w-8 h-8 text-teal-600" />
                                <div className="absolute top-0 right-0 -mr-2 -mt-2 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-sm">
                                    {index + 1}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
