import { X, Phone, MapPin, MessageCircle, Calendar, Clock } from 'lucide-react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300"
                onClick={onClose}
            ></div>

            {/* Modal Content - Refined Layout */}
            <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300 flex flex-col md:flex-row">

                {/* Left Side: Contact Info & Action */}
                <div className="p-8 w-full md:w-1/2 flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-center mb-6 md:hidden">
                            <h2 className="text-xl font-bold text-slate-900 font-raleway">Contact Us</h2>
                            <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="mb-6">
                            <h2 className="hidden md:block text-2xl font-bold text-slate-800 font-raleway mb-2">Get in Touch</h2>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Our consultants are available for immediate assistance. Secure your business setup slot today.
                            </p>
                        </div>

                        <div className="space-y-3">
                            {/* Call Option */}
                            <a href="tel:+97145650900" className="flex items-center gap-4 p-4 border border-slate-100 rounded-lg hover:border-teal-500 hover:bg-teal-50/50 transition-all group">
                                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Call Office</p>
                                    <p className="font-bold text-slate-800">+971 4 565 0900</p>
                                </div>
                            </a>

                            {/* WhatsApp Option */}
                            <a href="https://wa.me/971567652943" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 border border-slate-100 rounded-lg hover:border-teal-500 hover:bg-teal-50/50 transition-all group">
                                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                                    <MessageCircle className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">WhatsApp</p>
                                    <p className="font-bold text-slate-800">+971 56 765 2943</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="flex items-center gap-2 text-amber-600 bg-amber-50 px-3 py-2 rounded-md mb-4 text-xs font-medium border border-amber-100">
                            <Clock className="w-3 h-3" />
                            <span>High demand: Slots filling fast today.</span>
                        </div>
                        <a
                            href="/contact"
                            onClick={onClose}
                            className="flex items-center justify-center w-full bg-slate-900 text-white font-bold py-3.5 rounded-lg hover:bg-teal-600 transition-colors gap-2 text-sm uppercase tracking-wide shadow-lg shadow-teal-900/10"
                        >
                            <Calendar className="w-4 h-4" />
                            Book Consultation Now
                        </a>
                    </div>
                </div>

                {/* Right Side: Map & Visual (Desktop Only structure mainly, but responsive) */}
                <div className="w-full md:w-1/2 bg-slate-50 relative h-64 md:h-auto border-t md:border-t-0 md:border-l border-slate-100">
                    <button
                        onClick={onClose}
                        className="hidden md:flex absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-slate-500 hover:text-red-500 rounded-full p-2 transition-colors shadow-sm"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231268.0336208535!2d55.127815!3d25.07628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1650000000000!5m2!1sen!2sae"
                        className="absolute inset-0 w-full h-full"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Dubai Location"
                    ></iframe>

                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur px-4 py-3 rounded-xl shadow-lg border border-white/50 max-w-[200px]">
                        <div className="flex items-center gap-2 mb-1">
                            <MapPin className="w-4 h-4 text-teal-600" />
                            <span className="font-bold text-slate-800 text-sm">Main Office</span>
                        </div>
                        <p className="text-xs text-slate-500">Dubai, United Arab Emirates</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactModal;
