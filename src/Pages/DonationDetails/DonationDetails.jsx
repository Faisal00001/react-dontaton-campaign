import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';
import { saveItemToLocalStorage } from "../../Utility/localStorage";

const DonationDetails = () => {
    const { id } = useParams()
    const idInt = parseInt(id)
    const donationCards = useLoaderData();
    const [selectedCardForDetails, setSelectedCardForDetails] = useState({});
    useEffect(() => {
        const donationCard = donationCards?.find(donationCards => donationCards.id === idInt)
        if (donationCard) {
            setSelectedCardForDetails(donationCard)
        }
        else {
            return;
        }

    }, [donationCards, idInt])
    const { Picture, Price, Text_button_bg, description, Title } = selectedCardForDetails;
    const handleDonation = (id) => {
        const exits = saveItemToLocalStorage(id);
        if (exits) {
            swal("You've already made a donation for this.Thank for your donation!", "You can check other available donation!", "error");
        }
        else {
            swal("Good job!", "You have successfully donated money!", "success");
        }

    }
    return (
        <>
            <div className="mt-20 mb-20 px-3">
                <div className="relative">
                    <img className="w-full h-[500px] rounded-md " src={Picture} alt="" />

                    <div className="absolute bottom-0 inset-x-0 h-24 bg-black bg-opacity-50">

                        <button onClick={() => handleDonation(idInt)} className="absolute rounded-md bottom-5 left-10 py-3 px-5 text-white font-semibold" style={
                            {
                                backgroundColor: Text_button_bg
                            }
                        }>Donate ${Price}</button>
                    </div>
                </div>
                <div className="mt-10 space-y-2">
                    <h3 className="text-4xl font-bold">{Title}</h3>
                    <p style={{
                        color: '#0b0b0bb3'
                    }}>{description}</p>
                </div>


            </div>

        </>
    );
};

export default DonationDetails;