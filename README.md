# cryptoapplication

```
# Cryptocurrency Dashboard Application

This project is a cryptocurrency dashboard application built using React.js. It allows users to view trending cryptocurrencies, save their favorite coins, and explore detailed information about each cryptocurrency.

## Features

1. **Trending Cryptocurrencies:**
   - Fetches trending cryptocurrency data from the CoinGecko API.
   - Users can view a list of trending cryptocurrencies on the dashboard.

2. **Saving Favorite Coins:**
   - Users can save their favorite cryptocurrencies to their local storage.
   - Saved coins persist across sessions.

3. **Detailed Cryptocurrency Information:**
   - Users can click on a cryptocurrency to view detailed information about it, including price, market cap, volume, and price changes over different time periods (1 hour, 24 hours, 7 days).

## Project Structure

The project consists of the following main components:

1. **Components:**
   - **Filters:** Component for filtering cryptocurrencies based on user preferences.
   - **TableComponent:** Component for displaying cryptocurrency data in a tabular format.
   - **Logo:** Component for displaying the application logo.
   - **Navigation:** Component for navigation links between different pages.
   - **TrendingCoin:** Component for displaying individual trending cryptocurrency items.

2. **Contexts:**
   - **CryptoContext:** Context for managing global cryptocurrency data, including currency and sorting preferences.
   - **StorageContext:** Context for managing saved cryptocurrency data.
   - **TrendingContext:** Context for managing trending cryptocurrency data.

3. **Pages:**
   - **Home:** Main landing page of the application, including navigation and logo.
   - **Crypto:** Page for displaying trending cryptocurrencies and detailed information.
   - **Saved:** Page for displaying saved cryptocurrencies.
   - **Trending:** Page for displaying trending cryptocurrencies.

## Setup

To run the application locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd cryptocurrency-dashboard`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to view the application.

## Dependencies

The project relies on the following dependencies:

- React: A JavaScript library for building user interfaces.
- React Router DOM: Provides routing and navigation functionalities for React applications.
- Tailwind CSS: A utility-first CSS framework for styling the application.
- Autoprefixer: PostCSS plugin to parse CSS and add vendor prefixes to CSS rules.

## Usage

- The application provides an intuitive interface for users to explore trending and saved cryptocurrencies.
- Users can navigate between different pages using the navigation links.
- Trending cryptocurrencies are displayed on the Trending page.
- Users can save their favorite cryptocurrencies on the Saved page.
- Detailed information about each cryptocurrency can be viewed by clicking on its respective link.

## Contributing

Contributions to the project are welcome! If you have any ideas, suggestions, or bug fixes, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

Special thanks to the CoinGecko API for providing real-time cryptocurrency data and to the React community for creating powerful libraries and tools.
```
