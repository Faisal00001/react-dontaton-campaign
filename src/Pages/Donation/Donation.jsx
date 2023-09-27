import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../Utility/localStorage";
import SingleGivenDonation from "../../components/SingleGivenDonationCard/SingleGivenDonationCard";


const Donation = () => {

    const givenDonations = useLoaderData();
    const [totalDonations, setTotalDonations] = useState([]);
    const [dataLength, setDataLength] = useState(4)
    useEffect(() => {
        const allDonationsDoneId = getStoredDonation();
        if (givenDonations) {
            const donationContainer = givenDonations.filter(givenDonation => allDonationsDoneId.includes(givenDonation.id))
            setTotalDonations(donationContainer);
        }
    }, [givenDonations])
    return (
        <div>
            <div className="my-28">
                <div className="grid  md:grid-cols-2 gap-5 px-5 md:px-0">
                    {
                        totalDonations.slice(0, dataLength).map((donation, index) => <SingleGivenDonation donation={donation} key={index} ></SingleGivenDonation>)
                    }
                </div>
                <div className={`flex justify-center mt-14 ${dataLength === totalDonations.length || (totalDonations.length >= 0 && totalDonations.length < 4) ? 'hidden' : ''}`}>
                    <button onClick={() => setDataLength(totalDonations.length)} className="text-white px-7 py-2 font-semibold rounded-md" style={{
                        backgroundColor: '#009444'
                    }}>See All</button>
                </div>

            </div>

        </div>
    );
};

export default Donation;