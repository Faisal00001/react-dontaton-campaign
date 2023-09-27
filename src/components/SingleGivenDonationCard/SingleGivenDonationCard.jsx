import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
const SingleGivenDonation = ({ donation }) => {
    const navigate = useNavigate();
    const { id, Picture, Title, Category, Price, Category_bg, Text_button_bg, Card_bg } = donation;
    return (
        <div>
            <div style={{
                backgroundColor: Card_bg
            }} className="flex flex-row card card-compact shadow-xl">
                <figure className="w-[40%] rounded-l-md rounded-r-none"><img className="h-full" src={Picture} alt={Title} /></figure>
                <div className="card-body">
                    <p className="text-sm"><span className="py-1 px-2 rounded-md" style={
                        {
                            backgroundColor: Category_bg
                        }
                    }>{Category}</span></p>
                    <h2 className="card-title font-semibold">{Title}</h2>
                    <p style={{
                        color: Text_button_bg
                    }} className="text-base font-semibold">${Price}</p>
                    <div className="card-actions justify-start">
                        <button onClick={() => {
                            navigate(`/donationDetails/${id}`)
                        }} style={{
                            backgroundColor: Text_button_bg
                        }} className="px-4 py-1 mt-2 mb-2 text-white text-lg font-semibold rounded-md">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
SingleGivenDonation.propTypes = {
    donation: PropTypes.object.isRequired
}
export default SingleGivenDonation;