import Card from "../Core/Card";
import React from "react";

function CardContainer({ cards }) {
    return (
        <div className="flex flex-wrap justify-center items-center w-full h-full">
            {cards.map((card, index) => (
                <Card
                    name={card.name}
                    imageUrl={card.imageUrl}
                    description={card.description}
                    rarity={card.rarity}
                    key={index}
                />
            ))}
        </div>
    );
}

export default CardContainer;
