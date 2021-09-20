import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, capital, region, area, flag, population, languages, alpha3Code } = props.country;
    const cardStyle = {
        color: 'limegreen',
        backgroundColor: 'white',
        boxShadow: 'rgba(0, 0, 0, 0.2) 2px 4px 8px',
        margin: '10px',
        borderRadius: '5px',
        padding: '10px',
        cursor: 'pointer',
        caretColor: 'transparent'
    }
    return (
        <div style={cardStyle}>
            <h2 style={{ margin: '10px 0' }}>{name.slice(0, 20)}</h2>
            <img src={flag} className="img-fluid" alt={name + 'image'} />
            <h3 style={{ margin: '10px 0' }}>Capital: {capital}</h3>
            <h3>Region: {region}</h3>
            <h3>Area: {area + ' km'}<sup>2</sup></h3>
            <h3>Population: {population}</h3>
            <h3>Language:{' '}
                {
                    languages.length > 1 ? languages.slice(0, 3).map(lang => lang.name + ', ') : languages.map(lang => lang.name)
                }
            </h3>
            <h3>Alpha-3-Code: {alpha3Code}</h3>
        </div>
    );
};

export default Country;