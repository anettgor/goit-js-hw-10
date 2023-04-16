# Country Search App

This is a user-friendly React application that allows users to search for
countries and get detailed information about them.

## Features

- A search input box that lets users search for countries easily.
- Sends a request to an API to fetch information about the matching countries.
- Displays a message if there are too many matching countries, prompting the
  user to refine their search.
- Displays a list of countries with their flags if there are multiple matching
  countries.
- Displays detailed information about a country if only one matching country is
  found, including its flag, capital city, population, and official languages.
- Supports multiple search terms with a debounced search, with a 300ms delay
  before the search is performed after the user stops typing.
- Imports debounce function from Lodash library and Notify function from
  Notiflix library for improved performance and user experience.

## Getting Started

- clone the repository and run _npm install_ to install the required
  dependencies.
- run _npm run start_ to start the app on your local machine.

## Dependencies

This app uses the following dependencies:

- React
- Axios
- Lodash
- Notiflix

## Credits

This app uses **Rest Countries API**
