import React, { useContext } from "react";
import { SearchAndPagContext } from "../../context/SearchAndPaginationContext";

function SearchCoins() {
    const { handleSearch } = useContext(SearchAndPagContext);
    return (
        <div className="w-[85%] py-5">
            <input
                type="text"
                className="w-full p-4 bg-transparent border-primary border-[1px] text-lg rounded-md"
                placeholder="Search For a Crypto Currency"
                onChange={handleSearch}
            />
        </div>
    );
}

export default SearchCoins;
