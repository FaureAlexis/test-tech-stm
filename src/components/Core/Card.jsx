import React from "react";
import { 
    Card as ChakraCard,
    CardBody,
    CardHeader,
    CardFooter,
} from "@chakra-ui/card";

function Card({ 
    name,
    imageUrl,
    description,
    rarity,
}) {
    console.log(imageUrl);
    return (
        <ChakraCard>
            <CardHeader>
                {name}
            </CardHeader>
            <CardBody>
                {description}
            </CardBody>
            <CardFooter>
                {rarity}
            </CardFooter>
        </ChakraCard>
    );
}

export default Card;
