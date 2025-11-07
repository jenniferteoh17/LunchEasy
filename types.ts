export enum DietaryOption {
  ANY = "Any",
  HALAL = "Halal",
  VEGETARIAN = "Vegetarian",
  LOW_CARB = "Low Carb",
  NO_SPICY = "Not Spicy",
}

export enum Budget {
  ANY = "Any",
  CHEAP = "RM10-15",
  MODERATE = "RM15-25",
  EXPENSIVE = "RM25+",
}

export enum Distance {
  ANY = "Any",
  CLOSE = "Under 5 mins",
  NEAR = "5-10 mins",
  FAR = "10-15 mins",
}

export interface Preferences {
  diet: DietaryOption;
  budget: Budget;
  distance: Distance;
  freeDelivery: boolean;
}

export interface Restaurant {
  name: string;
  cuisine: string;
  priceRange: string;
  walkingTime: string;
  reason: string;
  googleMapsUrl: string;
  photoUrl: string;
  grabFoodUrl?: string;
  foodPandaUrl?: string;
}