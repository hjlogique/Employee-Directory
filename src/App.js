
//::::::::::::::: App.js ::::::::::::::::

import React, { useState } from 'react';
import employees from "./data/employees.json";
import EmployeesList from "./components/EmployeesList";
import SearchSort from "./components/SearchSort";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {

    // Use State Hook to declare new state variables 
    // and manage SearchSort function component

    const [employeesData, setEmployeesData] = useState(employees);
    const [sortedData, setSortedData] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    function handleSearchQuery(event) {
        setSearchQuery(event.target.value)
    }

    // Sort first names in ascending/descending order 
    function handleSortNames() {

        if (!sortedData) {
            setEmployeesData(employeesData.sort((a, b) => (a.name > b.name) ? 1 : -1));
            setSortedData(true);
        } else {
            setEmployeesData(employeesData.sort((a, b) => (a.name > b.name) ? -1 : 1));
            setSortedData(false);
        }
    }

    // Sort departments in ascending/descending order
    function handleSortDepts() {
        if (!sortedData) {
            setEmployeesData(employeesData.sort((a, b) => (a.department > b.department) ? 1 : -1));
            setSortedData(true);
        } else {
            setEmployeesData(employeesData.sort((a, b) => (a.department > b.department) ? -1 : 1));
            setSortedData(false);
        }
    }

    // Search: Filter first name(s) starting with the entered string in the Search field
    // handleSearchQuery and searchQuery are passed down to the child SearchSort component through props 
    // EmployeesList is updated with the filteredList data through the employeesData prop
    const filteredList = employeesData.filter(employee => employee.name.toLowerCase().startsWith(searchQuery.toLowerCase()));
    // If the searched query does not exist, display a message
    let message;
    (filteredList.length === 0) ? message = "No Employee found!" : message = "";
    return (
        <div>
            <Header />
            <Main>
                <SearchSort
                    handleSortNames={handleSortNames}
                    handleSortDepts={handleSortDepts}
                    onSearch={handleSearchQuery}
                    searchQuery={searchQuery} />
                <EmployeesList employeesData={filteredList} />
                <p className="message">{message}</p>
                <Footer />
            </Main>
        </div>
    )
}

export default App;
