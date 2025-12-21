import { useState } from 'react';
import { Send, Mail } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        businessNature: '',
        setupTime: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    // Returns the raw string with newlines
    const getMessageBody = () => {
        return `New Business Inquiry\n\n` +
            `Name: ${formData.firstName} ${formData.lastName}\n` +
            `Email: ${formData.email}\n` +
            `Mobile: ${formData.mobile}\n` +
            `Business Nature: ${formData.businessNature}\n` +
            `Setup Time: ${formData.setupTime}\n` +
            `-------------------------\n` +
            `Sent from Season UAE Website`;
    };

    const handleWhatsAppSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // WhatsApp prefers manual encoding for some characters or just encodeURIComponent
        // Adding asterisks for bolding which works in WhatsApp
        let waBody = `*New Business Inquiry*\n\n` +
            `*Name:* ${formData.firstName} ${formData.lastName}\n` +
            `*Email:* ${formData.email}\n` +
            `*Mobile:* ${formData.mobile}\n` +
            `*Business Nature:* ${formData.businessNature}\n` +
            `*Setup Time:* ${formData.setupTime}\n` +
            `-------------------------\n` +
            `Sent from Season UAE Website`;

        const encodedMessage = encodeURIComponent(waBody);
        const whatsappUrl = `https://wa.me/971567652943?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
        setIsSubmitting(false);
    };

    const handleEmailSubmit = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent accidental form submission if button is weird

        const subject = encodeURIComponent("New Business Inquiry");
        const body = encodeURIComponent(getMessageBody());
        const mailtoUrl = `mailto:Admin@seasonsuae.com?subject=${subject}&body=${body}`;

        window.location.href = mailtoUrl;
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-bold mb-6 text-slate-800 uppercase tracking-wide">Get Started Now</h3>
            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold text-slate-600 mb-1 uppercase">First Name*</label>
                        <input
                            type="text"
                            required
                            className="w-full border border-slate-300 rounded p-2 text-sm focus:outline-none focus:border-teal-500"
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-600 mb-1 uppercase">Last Name*</label>
                        <input
                            type="text"
                            required
                            className="w-full border border-slate-300 rounded p-2 text-sm focus:outline-none focus:border-teal-500"
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1 uppercase">Email*</label>
                    <input
                        type="email"
                        required
                        className="w-full border border-slate-300 rounded p-2 text-sm focus:outline-none focus:border-teal-500"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1 uppercase">Mobile Number*</label>
                    <div className="flex">
                        <select className="border border-r-0 border-slate-300 rounded-l p-2 text-sm bg-slate-50">
                            <option>+971</option>
                        </select>
                        <input
                            type="tel"
                            required
                            placeholder="50 123 4567"
                            className="w-full border border-slate-300 rounded-r p-2 text-sm focus:outline-none focus:border-teal-500"
                            value={formData.mobile}
                            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1 uppercase">What is the nature of your business?*</label>
                    <input
                        type="text"
                        required
                        className="w-full border border-slate-300 rounded p-2 text-sm focus:outline-none focus:border-teal-500"
                        value={formData.businessNature}
                        onChange={(e) => setFormData({ ...formData, businessNature: e.target.value })}
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1 uppercase">How quickly would you like to set up?*</label>
                    <select
                        className="w-full border border-slate-300 rounded p-2 text-sm focus:outline-none focus:border-teal-500 text-slate-600"
                        value={formData.setupTime}
                        onChange={(e) => setFormData({ ...formData, setupTime: e.target.value })}
                    >
                        <option value="">Please select</option>
                        <option value="Immediately">Immediately</option>
                        <option value="1 Month">Within 1 Month</option>
                        <option value="3 Months">Within 3 Months</option>
                    </select>
                </div>

                <div className="flex items-start gap-2 pt-2">
                    <input type="checkbox" required className="mt-1" />
                    <p className="text-xs text-slate-500">By ticking the box, you consent to Season UAE to send you emails about its news updates, running offers and promotional material.</p>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-slate-800 text-white font-bold py-3 rounded hover:bg-teal-600 transition-colors uppercase tracking-widest text-sm flex items-center justify-center gap-2 group"
                >
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Submit via WhatsApp
                </button>

                <div className="text-center pt-2">
                    <button
                        type="button"
                        onClick={handleEmailSubmit}
                        className="text-xs text-slate-500 hover:text-teal-600 flex items-center justify-center gap-1 mx-auto transition-colors"
                    >
                        <Mail className="w-3 h-3" />
                        Prefer to send an Email?
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
