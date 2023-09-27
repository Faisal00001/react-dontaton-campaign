import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";
import Banner from "../Banner/Banner";
import Navbar from "./NavBar/Navbar";
const Header = ({ handleSearch }) => {
    const location = useLocation();
    return (

        <div>
            {
                location.pathname === "/" ? '' : <Navbar></Navbar>

            }

            {
                location.pathname === "/" && <Banner handleSearch={handleSearch}></Banner>
            }
        </div>
    );
};
Header.propTypes = {
    handleSearch: PropTypes.func.isRequired
}
export default Header;