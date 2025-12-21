
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
    return (
        <section className="py-24 bg-teal-900 relative isolate overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.teal.100),white)] opacity-20" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-teal-600/10 ring-1 ring-teal-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center opacity-5"></div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-raleway">
                        Ready to Start Your Business?
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-teal-100">
                        Get in touch with our experts today for a free consultation. We'll handle the complexities so you can focus on growth.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="/contact"
                            className="group rounded-full bg-white px-8 py-4 text-base font-semibold text-teal-900 shadow-sm hover:bg-teal-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300 flex items-center gap-2"
                        >
                            Get Free Consultation
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="/services" className="text-base font-semibold leading-6 text-white hover:text-teal-200 transition-colors">
                            View Services <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
