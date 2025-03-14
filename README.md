# Globle Country Data

This repository contains country data used by the [Globle game](https://globle-game.com/game), with geographic coordinates and ISO codes. It's perfect for creating geography games, map visualizations, or any application that needs country location data.

## Features

- 🌎 Complete list of 195+ countries and territories
- 🔍 Includes ISO 3-letter country codes
- 📍 Geographic coordinates (latitude/longitude) for each country
- 🧰 TypeScript support with type definitions
- 🔄 Utility functions for finding and filtering countries

## Installation

```bash
npm install globle-country-data
```

Or with yarn:

```bash
yarn add globle-country-data
```

## Usage

### Basic Usage

```typescript
import { countries, findCountryByCode, findCountryByName } from 'globle-country-data';

// Get all countries
console.log(countries);

// Find a country by ISO code
const usa = findCountryByCode('USA');
console.log(usa); // { name: 'United States', code: 'USA', lat: 37.09024, lng: -95.712891 }

// Find a country by name
const japan = findCountryByName('Japan');
console.log(japan); // { name: 'Japan', code: 'JPN', lat: 36.204824, lng: 138.252924 }
```

### Search Countries

```typescript
import { searchCountries } from 'globle-country-data';

// Search for countries containing "island"
const islandCountries = searchCountries('island');
console.log(islandCountries);
// [
//   { name: 'Falkland Islands', ... },
//   { name: 'Marshall Islands', ... },
//   { name: 'Solomon Islands', ... },
//   ...
// ]
```

### Get All Country Names or Codes

```typescript
import { getAllCountryNames, getAllCountryCodes } from 'globle-country-data';

// Get all country names
const names = getAllCountryNames();
console.log(names); // ['Afghanistan', 'Albania', 'Algeria', ...]

// Get all country codes
const codes = getAllCountryCodes();
console.log(codes); // ['AFG', 'ALB', 'DZA', ...]
```

## Data Format

Each country object has the following structure:

```typescript
interface Country {
  name: string;   // Full country name
  code: string;   // ISO 3-letter country code
  lat: number;    // Latitude of country center
  lng: number;    // Longitude of country center
}
```

## Contributing

Contributions are welcome! If you notice missing or incorrect data, please open an issue or submit a pull request.

## License

MIT

## Acknowledgements

- Country data based on the [Globle game](https://globle-game.com/game)
- Created for educational and development purposes