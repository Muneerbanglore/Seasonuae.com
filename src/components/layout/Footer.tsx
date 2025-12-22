import { Globe, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Globe className="h-6 w-6 text-teal-500" />
                            <span className="font-bold text-xl text-white">Season UAE</span>
                        </div>
                        <p className="text-sm">
                            Your trusted partner for business setup in the UAE. We simplify the process so you can focus on your success.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-teal-500" />
                                <span>Business Center, Dubai, UAE</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span>Land line</span>
                                <Phone className="h-4 w-4 text-teal-500" />
                                <span>+971 45650900</span>
                            </li>
                             <li className="flex items-center gap-2">
                                <span>Whatsapp</span>
                                <Phone className="h-4 w-4 text-teal-500" />
                                <span>+971 567652943</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-teal-500" />
                                <span>Admin@seasonuae.com</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/" className="hover:text-teal-400">Home</a></li>
                            <li><a href="/services" className="hover:text-teal-400">Services</a></li>
                            <li><a href="/contact" className="hover:text-teal-400">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-800 text-center text-xs">
                    <p>&copy; {new Date().getFullYear()} Season UAE. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
