import React from "react";
import AutoComplete from "./AutoComplete";
import TypeTag from "../Core/TypeTag";

const raretyList = [
    "Common",
    "Uncommon",
    "Rare",
    "Mythic Rare",
    "Special",
    "Basic Land",
];

const typeList = [
    "Artifact",
    "Creature",
    "Enchantment",
    "Instant",
    "Land",
    "Planeswalker",
    "Sorcery",
];

function Filter({
    name,
    setName,
    nameList,
    setRarety,
    rarety,
    setTypes,
    types,
    setCards,
    cards,
}) {
    const filterByName = (name) => {
        setName(name);
        if (name === "") return setCards(cards);
        const filteredCards = cards.filter((card) => card.name.includes(name));
        setCards(filteredCards);
    };

    const filterByRarity = (rarity) => {
        setRarety(rarity);
        if (rarity === "") return setCards(cards);
        const filteredCards = cards.filter((card) => card.rarity === rarity);
        setCards(filteredCards);
    };

    const filterByType = (type) => {
        if (type === "") return setCards(cards);
        types.push(type);
        const filteredCards = cards.filter((card) => {
            return card.types.some((cardType) => types.includes(cardType));
        });
        setCards(filteredCards);
    };

    const removeType = (type) => {
        const filteredTypes = types.filter((t) => t !== type);
        setTypes(filteredTypes);
        if (filteredTypes.length === 0) return setCards(cards);
        const filteredCards = cards.filter((card) => {
            return card.types.some((cardType) => filteredTypes.includes(cardType));
        });
        setCards(filteredCards);
    };

    return (
        <div className="mx-4 mt-5 w-4/5">
            <h1 className="text-2xl">Filter</h1>
            <div className="flex justify-between items-center">
                <div>
                    <label htmlFor="name">Filter by Name</label>
                    <AutoComplete
                        placeholder="Filter by name"
                        value={name}
                        setValue={filterByName}
                        options={nameList}
                    />
                </div>
                <div>
                    <label htmlFor="rarity">Filter by Rarity</label>
                    <AutoComplete
                        placeholder="Filter by rarity"
                        value={rarety}
                        setValue={filterByRarity}
                        options={raretyList}
                        type="rarety"
                    />
                </div>
                <div className="w-1/5">
                    <label htmlFor="type">Filter by Type</label>
                    <div className="flex flex-wrap w-full">
                        {types.map((type, index) => (
                            <TypeTag type={type} key={index} removeType={removeType} />
                        ))}
                    </div>
                    <AutoComplete
                        placeholder="Filter by type"
                        value=""
                        setValue={filterByType}
                        options={typeList.filter((type) => !types.includes(type))}
                        type="type"
                    />
                </div>
            </div>
        </div>
    );
}

export default Filter;
