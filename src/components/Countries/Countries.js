import React from 'react';
import { useState, useEffect } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);
    return (
        <div>
            <a style={{ textDecoration: 'none', color: 'inherit' }} href="/"><h1 style={{ paddingTop: '20px' }}>Travelling Around The World</h1></a>
            <h3>Number of Countries: {countries.length}</h3>
            <div className="grid">
                {
                    countries.map(country => console.log(country))
                }
                {
                    countries.map(country => <Country
                        country={country}
                        key={country.alpha3Code}
                    />)
                }
            </div>
        </div>
    );
};

export default Countries;