import ContactForm from '../components/common/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-slate-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-900">Contact Us</h1>
                    <p className="mt-4 text-slate-600">Get in touch with our business setup experts today.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="p-8 lg:p-12 bg-teal-700 text-white">
                        <h2 className="text-2xl font-bold mb-8">Contact Information</h2>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-teal-600 p-3 rounded-lg">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                                    <p className="text-teal-100">123 Business Bay,<br />Sheikh Zayed Road,<br />Dubai, UAE</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-teal-600 p-3 rounded-lg">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Phone Number</h3>
                                    <p className="text-teal-100">+971 7 204 1111</p>
                                    <p className="text-teal-100 text-sm mt-1">Mon-Fri from 9am to 6pm</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-teal-600 p-3 rounded-lg">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Email Address</h3>
                                    <p className="text-teal-100">info@seasonuae.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-12 border-t border-teal-600">
                            <div className="flex items-center gap-2">
                                <Clock className="h-5 w-5" />
                                <span className="font-medium">Fast Response Promised</span>
                            </div>
                            <p className="mt-2 text-sm text-teal-200">We aim to respond to all inquiries within 24 hours.</p>
                        </div>
                    </div>

                    <div className="p-8 lg:p-12">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
