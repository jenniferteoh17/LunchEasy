import React from 'react';
import type { Restaurant } from '../types';
import { MapPinIcon, PriceTagIcon, ClockIcon, SparklesIcon, GrabFoodIcon, FoodPandaIcon } from './Icons';

interface RecommendationCardProps {
  restaurant: Restaurant;
}

const ImagePlaceholder: React.FC = () => (
  <div className="w-full h-48 bg-gray-200"></div>
);

const RecommendationCard: React.FC<RecommendationCardProps> = ({ restaurant }) => {
  const { name, cuisine, priceRange, walkingTime, reason, googleMapsUrl, photoUrl, grabFoodUrl, foodPandaUrl } = restaurant;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 ease-out flex flex-col">
      {photoUrl ? (
        <img src={photoUrl} alt={`A photo of ${name} restaurant`} className="w-full h-48 object-cover" />
      ) : (
        <ImagePlaceholder />
      )}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start">
            <div>
                <p className="text-xs font-semibold text-yellow-600 uppercase tracking-wider">{cuisine}</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">{name}</h3>
            </div>
            <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
                View on Map
                <MapPinIcon className="w-4 h-4 ml-1" />
            </a>
        </div>

        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-gray-600">
            <div className="flex items-center">
                <PriceTagIcon className="w-5 h-5 mr-2 text-gray-400" />
                <span>{priceRange}</span>
            </div>
            <div className="flex items-center">
                <ClockIcon className="w-5 h-5 mr-2 text-gray-400" />
                <span>{walkingTime}</span>
            </div>
        </div>
        
        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-start">
                <SparklesIcon className="w-6 h-6 mr-3 text-yellow-500 flex-shrink-0 mt-0.5" />
                <div>
                    <h4 className="text-sm font-bold text-yellow-800">Why you'll like it:</h4>
                    <p className="text-yellow-900 text-sm mt-1">{reason}</p>
                </div>
            </div>
        </div>
         <div className="mt-auto pt-6">
            <div className="flex flex-col sm:flex-row gap-3">
                {grabFoodUrl && (
                    <a
                        href={grabFoodUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#00b14f] hover:bg-green-700 transition-colors"
                    >
                        <GrabFoodIcon className="w-5 h-5 mr-2" />
                        Order on GrabFood
                    </a>
                )}
                {foodPandaUrl && (
                     <a
                        href={foodPandaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#d70f64] hover:bg-pink-800 transition-colors"
                    >
                        <FoodPandaIcon className="w-5 h-5 mr-2" />
                        Order on FoodPanda
                    </a>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationCard;