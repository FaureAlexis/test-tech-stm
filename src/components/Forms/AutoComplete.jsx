import React, {useState} from "react";
import {
    Input,
    FormControl
} from "@chakra-ui/react";
import Rarity from "../Core/Rarity";

function AutoComplete({
    placeholder,
    value,
    setValue,
    options,
    type,
    ...props
}) {
    const [isInputFocused, setIsInputFocused] = useState(false);

    const handleInputFocus = () => {
        setIsInputFocused(true);
    };

    const handleInputBlur = () => {
        setTimeout(() => {
            setIsInputFocused(false);
        }, 100);
    };

    return (
        <FormControl>
            <Input
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                {...props}
            />
            {isInputFocused && (
                <div className="absolute w-full bg-white z-10">
                {type !== "type" ? options
                    .filter((o) => o.toLowerCase().indexOf(value.toLowerCase()) > -1)
                    .slice(0, 10)
                    .map((o) => (
                    <div
                        className="cursor-pointer hover:bg-gray-100 m-1"
                        onClick={() => setValue(o)}
                        key={o}
                    >
                        {type === "rarety" ? <Rarity rarity={o} />
                         : o}
                    </div>
                )) : options
                    .map((o) => (
                    <div
                        className="cursor-pointer hover:bg-gray-100 m-1"
                        onClick={() => setValue(o)}
                        key={o}
                    >
                        {o}
                    </div>
                    ))}
                </div>
            )}
        </FormControl>
    );
}

export default AutoComplete;
