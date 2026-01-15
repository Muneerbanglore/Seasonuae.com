import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import TourPackages from '../components/home/TourPackages';
import Services from '../components/home/Services';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Process from '../components/home/Process';
import CallToAction from '../components/home/CallToAction';
import GoogleReviews from '../components/common/GoogleReviews';

const Home = () => {
    return (
        <div className="font-sans antialiased">
            <Hero />
            <GoogleReviews />

            {/* Trust and Social Proof - Immediate impact after Hero */}
            <Stats />

            {/* Popular Packages */}
            <TourPackages />

            {/* Core Services - What we actually do */}
            <Services />

            {/* Value Proposition - Why us over others */}
            <WhyChooseUs />

            {/* How it works - Reducing friction/uncertainty */}
            <Process />

            {/* Final Push */}
            <CallToAction />
        </div>
    );
};

export default Home;
