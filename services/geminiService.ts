import { GoogleGenAI, Type } from "@google/genai";
import type { Preferences, Restaurant } from '../types';

const getGeminiService = () => {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

const responseSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      name: {
        type: Type.STRING,
        description: 'The name of the restaurant.',
      },
      cuisine: {
        type: Type.STRING,
        description: 'The type of cuisine served (e.g., Malaysian, Indian, Chinese, Western).',
      },
      priceRange: {
        type: Type.STRING,
        description: 'An estimated price range, e.g., "RM10-20".',
      },
      walkingTime: {
        type: Type.STRING,
        description: 'Estimated walking time from the user, e.g., "5-minute walk".',
      },
      reason: {
        type: Type.STRING,
        description: 'A brief, friendly explanation of why this restaurant is recommended based on the user\'s preferences.',
      },
      googleMapsUrl: {
        type: Type.STRING,
        description: 'A valid Google Maps URL for the restaurant location.'
      },
      photoUrl: {
        type: Type.STRING,
        description: "A direct, publicly accessible URL to a high-quality, real photo of the restaurant's exterior or ambiance."
      },
      grabFoodUrl: {
        type: Type.STRING,
        description: 'A valid GrabFood URL to order from the restaurant, if available. Otherwise, an empty string.'
      },
      foodPandaUrl: {
        type: Type.STRING,
        description: 'A valid FoodPanda URL to order from the restaurant, if available. Otherwise, an empty string.'
      }
    },
    required: ["name", "cuisine", "priceRange", "walkingTime", "reason", "googleMapsUrl", "photoUrl", "grabFoodUrl", "foodPandaUrl"],
  },
};

export const getLunchRecommendations = async (
  preferences: Preferences,
  location: { lat: number; lon: number }
): Promise<Restaurant[]> => {
    const ai = getGeminiService();

    const deliveryPreference = preferences.freeDelivery 
        ? "- The user wants restaurants that offer free delivery, likely through GrabFood or FoodPanda."
        : "";

    const prompt = `
    Find 3 diverse lunch recommendations in Georgetown, Penang, Malaysia, based on the following criteria:
    - User's current location: Latitude ${location.lat}, Longitude ${location.lon}
    - Dietary preference: ${preferences.diet}
    - Budget: ${preferences.budget}
    - Maximum walking distance/time: ${preferences.distance}
    ${deliveryPreference}

    For each recommendation, provide the following:
    1. A brief, friendly 'reason' explaining why it's a good match.
    2. Make sure the restaurant is open for lunch.
    3. Find and include a direct, publicly accessible URL to a REAL, high-quality photo of the restaurant (exterior, interior, or ambiance).
    4. If possible, find and include links for ordering on GrabFood and FoodPanda.
    `;
    
    try {
        const textResponse = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                systemInstruction: "You are an AI assistant helping users find lunch restaurants in Georgetown, Penang, Malaysia. Your goal is to provide 3 excellent, diverse recommendations. ALWAYS return the response in the specified JSON format, including a real photo URL and URLs for delivery services if available.",
                responseMimeType: "application/json",
                responseSchema: responseSchema,
                temperature: 0.8,
            }
        });

        const jsonText = textResponse.text.trim();
        const textResults = JSON.parse(jsonText);
        
        if (!Array.isArray(textResults)) {
             console.error("Parsed response is not an array:", textResults);
            return [];
        }
        
        return textResults as Restaurant[];

    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw new Error("Failed to fetch recommendations from AI.");
    }
};