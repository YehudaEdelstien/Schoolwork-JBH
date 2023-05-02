import React, { useState, useEffect } from 'react';

function CountriesList() {
    const [allCountries, setAllCountries] = useState([])
    const [countryList, setCountryList] = useState([])
    const [searchWord, setSearchWord] = useState("")

    useEffect(() => {
        const getCountryList = async () => {
            try {
                const countryData = await fetch("https://restcountries.com/v3.1/all").then(res => res.json())
                const countryNames = countryData.map((country => country.name.common)).sort();
                setAllCountries(countryNames)
            } catch (err) {
                setAllCountries(["Could not get countries, refresh the page to try again"]);
                console.error(err)
            }
        }
        getCountryList();
    }, [])

    useEffect(() => {
        const filteredCountryList = allCountries.filter(cntry => cntry.toLowerCase().includes(searchWord.toLowerCase()))
        setCountryList(filteredCountryList);
    }, [allCountries, searchWord])

    const updateSearchTerm = ({ target }) => {
        setSearchWord(target.value);
    }

    return (
        <>
            <SearchInput value={searchWord} onChange={updateSearchTerm} />
            <List list={countryList}></List>
        </>
    );
}

export default CountriesList;

function SearchInput({ value, onChange }) {
    return (
        <input value={value} onChange={onChange} />
    )
}

function List({ list }) {
    return (
        <ul>
            {list.map((item => <li key={item}>{item}</li>))}
        </ul>
    )
}