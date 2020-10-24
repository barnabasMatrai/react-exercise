import React from 'react';
import './General.css';
import './ProductsPage.css';

export function ProductsPage() {
    let items = [];

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

    for (let itemImagesKey in itemImages) {
        let image = React.createElement("img", { src: itemImagesKey, className: "item-image" });
        let a = React.createElement("a", {}, itemImages[itemImagesKey][0]);
        let p = React.createElement("p", {}, itemImages[itemImagesKey][1]);
        let div = React.createElement("div", { className: "item-container" }, [image, a, p]);

        items.push(div);
    }

    const itemsDiv = React.createElement("div", { className: "items-container" }, items);

    return React.createElement("div", { className: "page-container" }, itemsDiv);
}