import React, { useState, createContext } from "react";

export const SearchAndPagContext = createContext();

function SearchAndPagProvider({ children }) {
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);

    const handleSearch = (e) => {
        setSearch(e.target.value);
        setPage(1);
    };

    const handlePage = (_, value) => {
        setPage(value);
    };
    return (
        <SearchAndPagContext.Provider
            value={{
                search,
                setSearch,
                page,
                setPage,
                handleSearch,
                handlePage,
            }}
        >
            {children}
        </SearchAndPagContext.Provider>
    );
}

export default SearchAndPagProvider;
