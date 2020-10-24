import React from 'react';
import './General.css';
import './ProductPage.css';

export function ProductPage(props) {
    const itemImages = { "https://bit.ly/2IYFyjb": ["Hammer", 2100],
        "https://bit.ly/31Gwpm2": ["Box of nails", 1700],
        "https://bit.ly/2HtY16U": ["Lock", 1900],
        "https://bit.ly/3ojhUyh": ["Axe", 14000],
        "https://bit.ly/2J3whXd": ["Drill", 20000],
        "https://bit.ly/3km71ct": ["Measuring tape", 5540],
        "https://bit.ly/2Tka5tB": ["Pliers", 4200],
        "https://bit.ly/3op1zrC": ["Saw", 10000],
        "https://bit.ly/3juJmFs": ["Screwdriver", 2600],
        "https://bit.ly/2IWUZbz": ["Wrench", 3000]};

    let itemURL;
    let itemName;
    let itemPrice;

    for (let itemImagesKey in itemImages) {
        if (!itemImages[itemImagesKey][0].toLowerCase().localeCompare(props.match.params.name)) {
            itemURL = itemImagesKey;
            itemName = itemImages[itemImagesKey][0];
            itemPrice = itemImages[itemImagesKey][1];
        }
    }

    return (
        <div className="page-container">
            <div className="item-container">
                <img src={ itemURL } className="item-image"/>
                <p>{ itemName }</p>
                <p>{ itemPrice }</p>
            </div>
        </div>
    );
}