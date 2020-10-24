import React from 'react';
import './General.css';
import './ProductsPage.css';

export function ProductsPage() {
    let items = [];

    const itemImages = { "https://bit.ly/2IYFyjb": "Hammer",
                        "https://bit.ly/31Gwpm2": "Box of nails",
                        "https://bit.ly/2HtY16U": "Lock" };

    for (let itemImagesKey in itemImages) {
        let image = React.createElement("img", { src: itemImagesKey, className: "item-image" });
        let a = React.createElement("a", {}, itemImages[itemImagesKey]);
        let div = React.createElement("div", { className: "item-container" }, [image, a]);

        items.push(div);
    }

    const itemsDiv = React.createElement("div", { className: "items-container" }, items);

    return React.createElement("div", { className: "page-container" }, itemsDiv);
}