import React, { useState } from 'react';
import { DietaryOption, Budget, Distance } from '../types';
import type { Preferences } from '../types';
import { DIETARY_OPTIONS, BUDGET_OPTIONS, DISTANCE_OPTIONS } from '../constants';
import { SearchIcon } from './Icons';

interface PreferenceFormProps {
  onSubmit: (preferences: Preferences) => void;
  isLoading: boolean;
}

const PreferenceForm: React.FC<PreferenceFormProps> = ({ onSubmit, isLoading }) => {
  const [diet, setDiet] = useState<DietaryOption>(DietaryOption.ANY);
  const [budget, setBudget] = useState<Budget>(Budget.ANY);
  const [distance, setDistance] = useState<Distance>(Distance.ANY);
  const [freeDelivery, setFreeDelivery] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ diet, budget, distance, freeDelivery });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label htmlFor="diet" className="block text-sm font-medium text-gray-700 mb-1">Dietary Need</label>
          <select
            id="diet"
            value={diet}
            onChange={(e) => setDiet(e.target.value as DietaryOption)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 transition duration-150 ease-in-out"
          >
            {DIETARY_OPTIONS.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Budget (per person)</label>
          <select
            id="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value as Budget)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 transition duration-150 ease-in-out"
          >
            {BUDGET_OPTIONS.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="distance" className="block text-sm font-medium text-gray-700 mb-1">Walking Distance</label>
          <select
            id="distance"
            value={distance}
            onChange={(e) => setDistance(e.target.value as Distance)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 transition duration-150 ease-in-out"
          >
            {DISTANCE_OPTIONS.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex items-center">
        <input
          id="free-delivery"
          name="free-delivery"
          type="checkbox"
          checked={freeDelivery}
          onChange={(e) => setFreeDelivery(e.target.checked)}
          className="h-4 w-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
        />
        <label htmlFor="free-delivery" className="ml-2 block text-sm text-gray-900">
          Show options with Free Delivery
        </label>
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex items-center justify-center bg-yellow-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Finding Lunch...
          </>
        ) : (
          <>
            <SearchIcon className="w-5 h-5 mr-2" />
            Find My Lunch!
          </>
        )}
      </button>
    </form>
  );
};

export default PreferenceForm;