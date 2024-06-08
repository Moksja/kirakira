import React from 'react';
import '../styles/ObjectCard.css';
import { celestialObjectsList } from '../datas/objectList';

//couleur en fonction du type d'objet
function getBackgroundColor(type) {
    switch (type) {
        case 'Système stellaire':
            return '#141e13'; 
        case 'Planète':
            return '#071714';  
        case 'Trou Noir':
            return '#190f18'; 
        case 'Nébuleuse':
            return '#230b16'; 
        case 'Galaxie':
            return '#0a141b'; 
        default:
            return '#FFFFFF';  
    }
}

//création cartes
function ObjectCard() {
    return (
        <div className='cardsGrid'>
            {celestialObjectsList.map((element, index) => (
                <div className='card' key={index}>
                    <div className='cardOpacity' style={{ backgroundColor: getBackgroundColor(element.type) }}></div>
                    <div className='cardContent'>
                        <div className='cardHeader'>
                            <h4 className='cardName'>{element.name}</h4>
                            <h4 className='cardPrice'>{element.price} €</h4>
                        </div>
                        <img className='cardImg' src={element.src} alt={element.name + ' image'}></img>
                        <div className='cardFooter'>
                            <p className='cardBestseller'>{element.bestseller ? 'Bestseller' : ''}</p>
                            <p className='cardFavourite'></p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ObjectCard;