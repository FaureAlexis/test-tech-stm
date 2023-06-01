import React from "react";
import {
    Tag,
    TagLabel,
    TagCloseButton,
} from "@chakra-ui/react";

function TypeTag({ type, removeType }) {
    return (
        <Tag
            size="md"
            variant="solid"
            colorScheme="teal"
            borderRadius="full"
            key={type}
            m={1}
        >
            <TagLabel>{type}</TagLabel>
            <TagCloseButton onClick={() => removeType(type)} />
        </Tag>
    );
}

export default TypeTag;
