import { useEffect, useState } from "react";
import axios from "axios";
import { FaGoogle, FaPen, FaStar, FaQuoteLeft, FaMapMarkerAlt } from "react-icons/fa";

interface Review {
  user?: {
    name?: string;
    thumbnail?: string;
  };
  title?: string;
  username?: string;
  avatar?: string;
  rating: number;
  snippet?: string;
  link?: string;
  date?: string;
}

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  
  // --- KEYS ---
  const API_KEY = "c7462639f0dcb58d62016974fa815668eaa59d0390de9ff38e91667ec539133f"; 
  const DATA_ID = "0x3e5f5ddbcdd9a01d:0xdfd3d38ff99ec4c1"; 
  const BUTTON_ID = "ChIJHaDZzdtdXz4RwcSe-Y_T098"; 

  useEffect(() => {
    async function fetchReviews() {
      try {
        // 1. Target URL (SerpApi)
        const targetUrl = `https://serpapi.com/search.json?engine=google_maps_reviews&data_id=${DATA_ID}&api_key=${API_KEY}&hl=en&sort_by=newestFirst`;
        
        // 2. PROXY SWITCH: Using 'corsproxy.io' instead of 'allorigins'
        // This is often more reliable for live domains.
        const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(targetUrl)}`;
        
        const response = await axios.get(proxyUrl);
        const apiData = response.data;

        if (apiData.reviews) {
          setReviews(apiData.reviews);
        } else if (apiData.place_results?.user_reviews?.most_relevant) {
          setReviews(apiData.place_results.user_reviews.most_relevant);
        }
      } catch (error) {
        console.error("Error loading reviews:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchReviews();
  }, []);

  return (
    // 1. COMPONENT BACKGROUND: Dark Teal
    <div className="bg-teal-900 py-16 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="text-center md:text-left">
            {/* Header Text: White */}
            <h2 className="text-4xl font-extrabold text-white mb-3 tracking-tight">
              What Our Clients Say
            </h2>
            
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="bg-white px-3 py-1 rounded-full shadow-sm flex items-center gap-2">
                <FaGoogle className="text-teal-900" />
                <span className="font-bold text-teal-900">5.0</span>
              </div>
              <div className="flex text-yellow-400 text-lg">
                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
              </div>
              <span className="text-teal-100 font-medium text-sm">
                Based on {reviews.length || "Google"} Reviews
              </span>
            </div>
          </div>
          
          {/* BUTTON: Navy Background */}
          <a 
            href={`https://search.google.com/local/writereview?placeid=${BUTTON_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-blue-950 hover:bg-blue-900 text-white font-semibold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 border border-blue-800"
          >
            <FaPen className="text-sm group-hover:rotate-12 transition-transform" />
            <span>Write a Review</span>
          </a>
        </div>

        {/* --- REVIEWS GRID --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {!loading ? (
            reviews.map((review, i) => {
              const name = review.user?.name || review.title || review.username || "Valued Client";
              const image = review.user?.thumbnail || review.avatar;

              return (
                // 2. CARD BACKGROUND: White
                <div key={i} className="bg-white p-6 rounded-2xl shadow-xl border border-teal-800/20 flex flex-col h-full hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                  
                  {/* User Profile */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-teal-50 border-2 border-teal-100 flex items-center justify-center overflow-hidden shrink-0">
                      {image ? (
                        <img src={image} alt={name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-teal-700 font-bold text-lg">
                          {name.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div>
                      {/* Name: Dark */}
                      <h4 className="font-bold text-gray-900 text-sm leading-tight line-clamp-1">
                        {name}
                      </h4>
                      {/* Date: Gray */}
                      <span className="text-xs text-gray-500 block mt-0.5">
                        {review.date || "Recently"}
                      </span>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex text-yellow-400 text-xs mb-3">
                    {[...Array(5)].map((_, index) => (
                      <FaStar key={index} className={index < review.rating ? "text-yellow-400" : "text-gray-200"} />
                    ))}
                  </div>

                  {/* Text: Dark Gray */}
                  <div className="relative flex-grow">
                    <FaQuoteLeft className="text-teal-100 absolute -top-1 -left-1 text-2xl -z-10" />
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-4 relative z-0">
                      {review.snippet || "No comment provided."}
                    </p>
                  </div>
                  
                  {/* Link: Teal */}
                  {review.link && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <a href={review.link} target="_blank" className="text-teal-700 text-xs font-semibold hover:text-teal-900 flex items-center gap-1 transition-colors">
                        <FaMapMarkerAlt className="text-[10px]" /> Read on Google
                      </a>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            // --- LOADING SKELETON ---
            [1, 2, 3, 4].map((n) => (
              <div key={n} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-teal-800 h-64 animate-pulse">
                <div className="flex gap-4 mb-4">
                  <div className="w-12 h-12 bg-teal-800 rounded-full"></div>
                  <div className="space-y-2 w-1/2">
                    <div className="h-4 bg-teal-800 rounded w-full"></div>
                    <div className="h-3 bg-teal-800 rounded w-2/3"></div>
                  </div>
                </div>
                <div className="space-y-2 mt-6">
                  <div className="h-3 bg-teal-800 rounded w-full"></div>
                  <div className="h-3 bg-teal-800 rounded w-full"></div>
                  <div className="h-3 bg-teal-800 rounded w-3/4"></div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}