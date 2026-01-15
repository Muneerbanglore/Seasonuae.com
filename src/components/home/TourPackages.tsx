import React from 'react';
import desertSafariImg from '../../assets/tours/dubai-desert-safari.png';
import abuDhabiImg from '../../assets/tours/abu-dhabi-city-tour.png';
import dhowCruiseImg from '../../assets/tours/dubai-marina-dhow-cruise.png';
import burjKhalifaImg from '../../assets/tours/burj-khalifa-view.png';
import modernDubaiImg from '../../assets/tours/modern-dubai-city.png';
import musandamImg from '../../assets/tours/musandam-dibba-cruise.png';

const TourPackages = () => {
  const packages = [
    {
      id: 1,
      title: "Dubai Desert Safari",
      description: "Experience the thrill of dune bashing, camel riding, and a traditional BBQ dinner under the stars.",
      image: desertSafariImg,
      featured: true,
      includes: ["Dune Bashing", "BBQ Dinner", "Camel Ride", "Hotel Pickup"]
    },
    {
      id: 2,
      title: "Abu Dhabi City Tour",
      description: "Explore the capital of UAE, visit the Grand Mosque, and Louvre Museum.",
      image: abuDhabiImg,
      featured: true,
      includes: ["Grand Mosque", "Ferrari World Stop", "Heritage Village", "Guide"]
    },
    {
      id: 3,
      title: "Dubai Marina Dhow Cruise",
      description: "Enjoy a relaxing evening cruise with dinner while admiring the illuminated skyline of Dubai Marina.",
      image: dhowCruiseImg,
      featured: true,
      includes: ["Buffet Dinner", "Live Entertainment", "2 Hr Cruise", "Welcome Drinks"]
    },
    {
      id: 4,
      title: "Burj Khalifa At The Top",
      description: "Visit the world's tallest building and witness breathtaking panoramic views of Dubai.",
      image: burjKhalifaImg,
      featured: false,
      includes: ["Level 124 & 125", "High-speed Elevator", "Wi-Fi", "Telescopes"]
    },
    {
      id: 5,
      title: "Modern Dubai City Tour",
      description: "See the Palm Jumeirah, Atlantis, Burj Al Arab, and Dubai Marina in this comprehensive tour.",
      image: modernDubaiImg,
      featured: true,
      includes: ["Dubai Marina", "Palm Jumeirah", "Burj Al Arab Photo", "Mono Rail"]
    },
    {
      id: 6,
      title: "Musandam Dibba Cruise",
      description: "Escape the city for a day of cruising, swimming, and snorkeling in the beautiful fjords of Oman.",
      image: musandamImg,
      featured: false,
      includes: ["Buffet Lunch", "Snorkeling Gear", "Banana Boat Ride", "Transport"]
    }

  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading">
            Popular Tour Packages
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the best experiences UAE has to offer. From desert adventures to city sightseeing, we have it all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer border border-gray-100 flex flex-col">
              <div className="relative h-64 overflow-hidden shrink-0">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />

                {pkg.featured && (
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide">
                    Featured
                  </div>
                )}

              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">
                  {pkg.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {pkg.description}
                </p>

                <div className="mt-auto">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Included Services</h4>
                  <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                    {pkg.includes.map((item, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-teal-500 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourPackages;
