
import { DietaryOption, Budget, Distance } from './types';

export const DIETARY_OPTIONS = [
  DietaryOption.ANY,
  DietaryOption.HALAL,
  DietaryOption.VEGETARIAN,
  DietaryOption.LOW_CARB,
  DietaryOption.NO_SPICY,
];

export const BUDGET_OPTIONS = [
  Budget.ANY,
  Budget.CHEAP,
  Budget.MODERATE,
  Budget.EXPENSIVE,
];

export const DISTANCE_OPTIONS = [
  Distance.ANY,
  Distance.CLOSE,
  Distance.NEAR,
  Distance.FAR,
];
