/**
 * Represents a country with geographic coordinates and ISO code
 */
export interface Country {
  /** The full name of the country */
  name: string;
  /** The ISO 3-letter country code */
  code: string;
  /** Latitude of the country's approximate center */
  lat: number;
  /** Longitude of the country's approximate center */
  lng: number;
}