import React from 'react';

const Card = (props) => { //country aurais pu être mis à la place mais "props" est la bonne pratique

    const {country} = props; //destructuring == "const country = props.country;"
    
    const numberFormat = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "); //regex séparateur de milliers
    }

    return (
        <li className="card">
            <img src={country.flag} alt="flag" />
            <div className="data-container">
                <ul>
                    <li>{country.name}</li>
                    <li>{country.capital}</li>
                    <li>Pop. {numberFormat(country.population)}</li>
                </ul>
            </div>
        </li>
    );
};

export default Card;