import React from "react";

const rarities = [
    { value: "Common", color: "#2e2e2e", foreground: "#ffffff" },
    { value: "Uncommon", color: "#ababab", foreground: "#ffffff" },
    { value: "Rare", color: "#ffca00", foreground: "#000" },
    { value: "Mythic Rare", color: "#ff8600", foreground: "#ffffff" },
    { value: "Special", color: "#fd6ee1", foreground: "#ffffff" },
    { value: "Basic Land", color: "#000000", foreground: "#ffffff" },
];

function Rarity({
    rarity
}) {
    return (
            <div className="flex justify-center items-center px-2 py-1 rounded-full" style={
                { backgroundColor: rarities.find(r => r.value.toLowerCase() === rarity.toLowerCase()).color, 
                    color: rarities.find(r => r.value.toLowerCase() === rarity.toLowerCase()).foreground }
                }>
                {rarity}
            </div>
    );
}

export {rarities};
export default Rarity;
