import Card from "../Core/Card";
import React from "react";

function CardContainer({ cards, cardsName, setCardsName, onOpen, setSelectedCard }) {
    return (
        <div className="flex flex-wrap justify-center items-center w-full h-full">
            {cards.length ? cards.map((card, index) => {
                let isPresent = false;
                cardsName.includes(card.name) ? isPresent = true : setCardsName([...cardsName, card.name]);
                return (
                    <Card
                            name={card.name}
                            imageUrl={card.imageUrl}
                            text={card.text}
                            rarity={card.rarity}
                            types={card.types}
                            key={index}
                            isPresent={isPresent} 
                            onOpen={onOpen}
                            setSelectedCard={setSelectedCard}
                            />);
            }) : <p>No cards found</p>}
        </div>
    );
}

export default CardContainer;
