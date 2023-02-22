const countryForm = document.getElementById("countryForm")
const countrySelector = document.getElementById("countrySelector");

const countryApiUrl = "https://restcountries.com/v3.1/all"
const countries = [];

window.onload = async function() {
    const fetchedCountries = (await fetch(countryApiUrl).then(data => data.json()));
    countries.push(...fetchedCountries)
    countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
    initializeSelector();
}

function initializeSelector() {
    for (const country of countries) {
        const optionElement = document.createElement("option");
        optionElement.value = country.name.common;
        optionElement.innerHTML = country.name.common;
        countrySelector.appendChild(optionElement);
    }
}

function onSelectedCountry(event) {
    console.log(event.target.value);
}
countrySelector.addEventListener('change', onSelectedCountry);
