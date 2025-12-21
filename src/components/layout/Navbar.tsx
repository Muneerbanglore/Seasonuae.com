import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Globe } from 'lucide-react';
import clsx from 'clsx';
import ContactModal from '../common/ContactModal';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <nav className="bg-teal-700 text-white shadow-lg sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center gap-2">
                            <Globe className="h-8 w-8 text-teal-200" />
                            <span className="font-semibold font-raleway text-2xl tracking-tight">Seasonsuae.com</span>
                        </div>

                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        className={clsx(
                                            'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
                                            location.pathname === item.path
                                                ? 'bg-teal-800 text-white'
                                                : 'text-teal-100 hover:bg-teal-600 hover:text-white'
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="hidden md:flex items-center gap-4">
                            <a href="tel:+97145650900" className="flex items-center gap-2 text-sm text-teal-100 hover:text-white transition-colors">
                                <Phone className="h-4 w-4" />
                                <span>+971 4 565 0900</span>
                            </a>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-white text-teal-700 px-4 py-2 rounded-md font-bold hover:bg-teal-50 transition-colors"
                            >
                                Get Started
                            </button>
                        </div>

                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-teal-100 hover:text-white hover:bg-teal-600 focus:outline-none"
                            >
                                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {isOpen && (
                    <div className="md:hidden bg-teal-800">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={clsx(
                                        'block px-3 py-2 rounded-md text-base font-medium',
                                        location.pathname === item.path
                                            ? 'bg-teal-900 text-white'
                                            : 'text-teal-100 hover:bg-teal-700 hover:text-white'
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <button
                                onClick={() => {
                                    setIsModalOpen(true);
                                    setIsOpen(false);
                                }}
                                className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-teal-100 hover:bg-teal-700 hover:text-white"
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default Navbar;
