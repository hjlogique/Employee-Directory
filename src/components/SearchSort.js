
//::::::::::::::: SearchSort.js ::::::::::::::::

import React from "react";

function SearchSort({ onSearch, searchQuery, handleSortNames, handleSortDepts }) {
    return (
        <div className="md:flex justify-between my-6">
            <div className="md:mb-0 mb-4">
                <button onClick={handleSortNames} className="bg-blue-800 focus:outline-none shadow font-bold text-gray-300 rounded px-8 py-1 mr-4 hover:bg-blue-700 hover:text-white" id="nameBtn">Sort Names</button>
                <button onClick={handleSortDepts} className="bg-blue-800 focus:outline-none shadow font-bold text-gray-300 rounded px-8 py-1 hover:bg-blue-700 hover:text-white" id="deptBtn">Sort Depts</button>
            </div>
            <form>
                <input value={searchQuery}
                    onChange={onSearch}
                    className="shadow pl-5 rounded w-full py-1"
                    id="searchField"
                    type="text"
                    placeholder="search by first name" />
            </form>
        </div>
    )
}

export default SearchSort;