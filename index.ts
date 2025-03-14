export { Country } from './types';
export { countries } from './countriesList';

/**
 * Find a country by its ISO code
 * @param code The ISO 3-letter country code
 * @returns The country object or undefined if not found
 */
export function findCountryByCode(code: string) {
  const upperCode = code.toUpperCase();
  return countries.find(country => country.code === upperCode);
}

/**
 * Find a country by its name
 * @param name The country name
 * @returns The country object or undefined if not found
 */
export function findCountryByName(name: string) {
  const lowerName = name.toLowerCase();
  return countries.find(country => country.name.toLowerCase() === lowerName);
}

/**
 * Find countries that match a search query
 * @param query The search query
 * @returns Array of matching countries
 */
export function searchCountries(query: string) {
  const lowerQuery = query.toLowerCase();
  return countries.filter(country => 
    country.name.toLowerCase().includes(lowerQuery) || 
    country.code.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Get all country names
 * @returns Array of country names
 */
export function getAllCountryNames() {
  return countries.map(country => country.name);
}

/**
 * Get all country codes
 * @returns Array of country codes
 */
export function getAllCountryCodes() {
  return countries.map(country => country.code);
}