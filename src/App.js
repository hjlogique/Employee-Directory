
//::::::::::::::: App.js ::::::::::::::::

import React, { useState } from 'react';
import employeesData from "./data/employees.json";
import EmployeesList from "./components/EmployeesList";
import SearchSort from "./components/SearchSort";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {

    const [data, setEmployeesData] = useState(employeesData);
    const [sorted, setSortedData] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    function handleSearchQuery(event) {
        setSearchQuery(event.target.value)
    }

    // Sort first names in ascending/descending order 
    function handleSortNames() {

        if (!sorted) {
            setEmployeesData(data.sort((a, b) => (a.name > b.name) ? 1 : -1));
            setSortedData(true);
        } else {
            setEmployeesData(data.sort((a, b) => (a.name > b.name) ? -1 : 1));
            setSortedData(false);
        }
    }

    // Sort departments in ascending/descending order
    function handleSortDepts() {
        if (!sorted) {
            setEmployeesData(data.sort((a, b) => (a.department > b.department) ? 1 : -1));
            setSortedData(true);
        } else {
            setEmployeesData(data.sort((a, b) => (a.department > b.department) ? -1 : 1));
            setSortedData(false);
        }
    }

    // Search: Filter first name(s) starting with the entered string in the Search field
    // handleSearchQuery and searchQuery are passed down to the child SearchSort component through props 
    // EmployeesList is updated with the filteredList data through the data prop
    const filteredList = data.filter(employee => employee.name.toLowerCase().startsWith(searchQuery.toLowerCase()));
    return (
        <div>
            <Header />
            <Main>
                <SearchSort
                    handleSortNames={handleSortNames}
                    handleSortDepts={handleSortDepts}
                    onSearch={handleSearchQuery}
                    searchQuery={searchQuery} />
                <EmployeesList data={filteredList} />
                <Footer />
            </Main>
        </div>
    )
}

export default App;
