
import React, { useState, useEffect, useCallback } from 'react';
import type { Preferences, Restaurant } from './types';
import Header from './components/Header';
import PreferenceForm from './components/PreferenceForm';
import RecommendationCard from './components/RecommendationCard';
import LoadingSpinner from './components/LoadingSpinner';
import { getLunchRecommendations } from './services/geminiService';
import { LocationIcon, ErrorIcon } from './components/Icons';

const App: React.FC = () => {
  const [preferences, setPreferences] = useState<Preferences | null>(null);
  const [recommendations, setRecommendations] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [userLocation, setUserLocation] = useState<{ lat: number; lon: number } | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        setLocationError(null);
      },
      (err) => {
        setLocationError(`Error getting location: ${err.message}. Please enable location services.`);
        setError(null);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  }, []);

  const handleGetRecommendations = useCallback(async (prefs: Preferences) => {
    if (!userLocation) {
      setError("Could not get your location. Please enable location services and refresh the page.");
      return;
    }
    
    setIsLoading(true);
    setError(null);
    setRecommendations([]);
    setPreferences(prefs);

    try {
      const results = await getLunchRecommendations(prefs, userLocation);
      setRecommendations(results);
    } catch (e) {
      console.error(e);
      setError("Sorry, I couldn't find any recommendations. The AI might be busy, please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [userLocation]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-6 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 space-y-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Find Your Perfect Lunch in Georgetown</h2>
            <p className="text-gray-500 mt-2">Tell us what you're craving, and we'll handle the rest!</p>
          </div>
          
          {locationError && (
            <div className="flex items-center bg-red-100 text-red-700 p-4 rounded-lg">
              <ErrorIcon className="w-6 h-6 mr-3" />
              <p>{locationError}</p>
            </div>
          )}

          {!locationError && !userLocation && (
            <div className="flex items-center bg-blue-100 text-blue-700 p-4 rounded-lg">
              <LocationIcon className="w-6 h-6 mr-3 animate-pulse" />
              <p>Getting your current location to find nearby spots...</p>
            </div>
          )}

          {userLocation && <PreferenceForm onSubmit={handleGetRecommendations} isLoading={isLoading} />}
        </div>
        
        <div className="mt-8 md:mt-10">
          {isLoading && <LoadingSpinner />}
          
          {error && (
            <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-8">
                <ErrorIcon className="w-12 h-12 text-red-500 mb-4"/>
              <p className="text-red-600 font-semibold">{error}</p>
            </div>
          )}
          
          {!isLoading && recommendations.length > 0 && (
            <div className="space-y-6">
                 <h3 className="text-2xl font-bold text-gray-800">Your AI-Powered Recommendations</h3>
              {recommendations.map((resto, index) => (
                <RecommendationCard key={index} restaurant={resto} />
              ))}
            </div>
          )}

           {!isLoading && preferences && recommendations.length === 0 && !error && (
            <div className="text-center bg-white rounded-2xl shadow-lg p-8">
                <p className="text-gray-500">No recommendations found for your criteria. Try adjusting your preferences!</p>
            </div>
          )}
        </div>
      </main>
      <footer className="text-center p-4 text-gray-400 text-sm">
        <p>Powered by LunchEasy AI &copy; 2024</p>
      </footer>
    </div>
  );
};

export default App;
