import { useState } from "react";

function usePagination() {
    const [page, setPage] = useState(1);

    const handleChange = (_, value) => {
        setPage(value);
    };

    return { page, handleChange };
}

export default usePagination;
