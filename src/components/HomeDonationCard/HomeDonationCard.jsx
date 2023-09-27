
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
const HomeDonationCard = ({ donationCard }) => {
    const { id, Picture, Title, Category, Card_bg, Category_bg, Text_button_bg } = donationCard || {}
    return (
        <div>
            <Link to={`donationDetails/${id}`}>
                <div className={`card card-compact shadow-xl`} style={
                    {
                        backgroundColor: Card_bg
                    }
                }>
                    <figure><img className="w-full h-[200px]" src={Picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className="text-sm font-medium"> <span className="py-1 px-1 rounded-md" style={{
                            color: Text_button_bg,
                            backgroundColor: Category_bg
                        }}>{Category}</span></p>
                        <h2 className="card-title font-semibold" style={{
                            color: Text_button_bg
                        }}>{Title}</h2>
                    </div>
                </div>
            </Link>

        </div>
    );
};
HomeDonationCard.propTypes = {
    donationCard: PropTypes.object.isRequired
}

export default HomeDonationCard;