import HomeDonationCards from "../../components/HomeDonationCards/HomeDonationCards";

import { useLoaderData } from "react-router-dom";
const Home = () => {
    const homeDonationCards = useLoaderData();
    return (
        <div>
            <HomeDonationCards homeDonationCards={homeDonationCards}></HomeDonationCards>
        </div>
    );
};

export default Home;