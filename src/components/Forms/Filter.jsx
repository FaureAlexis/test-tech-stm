import React from "react";
import AutoComplete from "./AutoComplete";
import TypeTag from "../Core/TypeTag";
import { Button } from "@chakra-ui/react";

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
    const filterCards = () => {
        let filteredCards = cards;

        if (name !== "") {
        filteredCards = filteredCards.filter((card) =>
            card.name.includes(name)
        );
        }

        if (rarety !== "") {
        filteredCards = filteredCards.filter((card) => card.rarity === rarety);
        }

        if (types.length > 0) {
        filteredCards = filteredCards.filter((card) =>
            types.some((type) => card.types.includes(type))
        );
        }

        setCards(filteredCards);
    };

    const filterByName = (name) => {
        setName(name);
    };

    const filterByRarity = (rarity) => {
        setRarety(rarity);
    };

    const filterByType = (type) => {
        setTypes([...types, type]);
    };

    const removeType = (type) => {
        const filteredTypes = types.filter((t) => t !== type);
        setTypes(filteredTypes);
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
                <Button onClick={filterCards}>Apply Filters</Button>
            </div>
        </div>
    );
}

export default Filter;
