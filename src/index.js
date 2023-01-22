import './css/styles.css';
import Notiflix from 'notiflix';
const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;
const input = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

function fetchCountries(name) {
  return fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response => {
      if (!response.ok) {
        countryList.innerHTML = '';
        countryInfo.innerHTML = '';
        return Notiflix.Notify.failure(
          'Oops, there is no country with that name'
        );
      }
      return response.json();
    })
    .catch(error => {
      // Error handling
      console.log('Error', error);
    });
}

const onInput = e => {
  let countryName = e.target.value.trim();
  if (!countryName) {
    return;
  }
  fetchCountries(countryName)
    .then(r => {
      if (r.length > 10) {
        countryList.innerHTML = '';
        countryInfo.innerHTML = '';
        return Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }
      if (r.length === 1) {
        countryList.innerHTML = '';
        return (countryInfo.innerHTML = countryCard(r));
      }
      countryInfo.innerHTML = '';
      return (countryList.innerHTML = countriesFound(r));
    })
    .catch(error => {
      console.log('Error', error);
    });

  function countryCard(country) {
    return country
      .map(
        ({ name, flags, capital, population, languages }) =>
          `<div class = "country-item"><img src="${flags.svg}" alt="${
            name.official
          }" width='60' height='40'>
        <h2 class="country-text">${name.official}</h2></div>
        <p><span class="country-text-bold">Capital:</span> ${capital}</p>
        <p><span class="country-text-bold">Population:</span> ${population}</p>
        <p><span class="country-text-bold">Languages:</span> ${Object.values(
          languages
        )} </p>
        `
      )
      .join();
  }

  function countriesFound(country) {
    return country
      .map(
        ({ name, flags }) =>
          `<li class = "country-item"><img src="${flags.svg}" alt="${name.official}" width='60' height='40'>
        <p class="country-text">${name.official}</p></li>`
      )
      .join('');
  }
};

input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));
