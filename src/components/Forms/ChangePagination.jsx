import React from "react";
import { Button, Input } from "@chakra-ui/react";

function ChangePagination({
    pagination,
    setPagination,
    pageSize,
    setPageSize,
}) {
    return (
        <div className="flex justify-between items-center mx-4 w-4/5">
            <Button
                onClick={() => setPagination(pagination - 1 )}
                disabled={pagination === 1}
            >
                Previous page
            </Button>
            <p>Current page: {pagination}</p>
            <div className="flex flex-col">
                <label htmlFor="pageSize" className="text-sm">Page size</label>
                <Input w="auto" type="number" value={pageSize} onChange={(e) => setPageSize(e.target.value)} />
            </div>
            <Button
                onClick={() => setPagination(pagination + 1)}
            >
                Next page
            </Button>
        </div>
    );
}

export default ChangePagination;
