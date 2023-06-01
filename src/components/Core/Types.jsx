import React from "react";
import { Badge } from "@chakra-ui/react";

function Types({
    types
}) {
    return (
        <Badge>
            <div className="flex h-full flex-col items-center justify-center p-2">
                {types}
            </div>
        </Badge>
    );
}

export default Types;
