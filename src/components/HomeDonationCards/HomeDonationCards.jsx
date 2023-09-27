import { useContext } from "react";
import HomeDonationCard from "../HomeDonationCard/HomeDonationCard";

import PropTypes from 'prop-types';
import { SearchContext } from "../Root/Root";
const HomeDonationCards = ({ homeDonationCards }) => {
    let searchValue = useContext(SearchContext);
    searchValue = searchValue.toLowerCase()
    console.log(homeDonationCards)
    if ((searchValue === 'health') || (searchValue === 'education')
        || (searchValue === 'clothing') || (searchValue === 'food')) {
        homeDonationCards = homeDonationCards.filter(homeDonationCard => homeDonationCard.Category.toLowerCase() === searchValue)
    }
    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 my-28 px-5 md:px-0">
                {
                    homeDonationCards?.map((donationCard, index) => <HomeDonationCard donationCard={donationCard} key={index}></HomeDonationCard>)
                }
            </div>

        </div>
    );
};
HomeDonationCards.propTypes = {
    homeDonationCards: PropTypes.array.isRequired
}
export default HomeDonationCards;