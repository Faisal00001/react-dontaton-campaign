import { createContext, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
export const SearchContext = createContext('');
const Root = () => {
    const location = useLocation();
    const [searchText, setSearchText] = useState('')
    const handleSearch = () => {
        const inputElement = document.getElementById('search')
        const inputElementValue = inputElement.value
        setSearchText(inputElementValue)
    }
    return (
        <div>
            <div className={location.pathname === '/' ? '' : 'max-w-6xl mx-auto'}>
                <Header handleSearch={handleSearch}></Header>
            </div>
            <SearchContext.Provider value={searchText}>
                <div className="max-w-6xl mx-auto">
                    <Outlet></Outlet>
                </div>
            </SearchContext.Provider>


        </div>
    );
};

export default Root;