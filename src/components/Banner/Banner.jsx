
import PropTypes from 'prop-types';
import Navbar from '../Header/Navbar/Navbar';
import './Banner.css';
const Banner = ({ handleSearch }) => {
    return (
        <div>
            <div className="hero h-[500px] banner " >

                <div className="hero-overlay bg-opacity-5">
                    <div className='max-w-6xl mx-auto'>
                        <Navbar></Navbar>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-5xl mt-20">
                                <h3 className="mb-5 text-2xl md:text-4xl text-black font-bold">I Grow By Helping People In Need</h3>
                                <div>
                                    <input id='search' className='input py-3 pl-3 w-[50%] border rounded-t-lg rounded-b-lg rounded-r-none outline-none text-black' type="text" placeholder='Search here by category....' />
                                    <button onClick={handleSearch} className="py-3 w-[20%] text-white bg-[#FF444A] font-semibold border rounded-t-lg rounded-b-lg rounded-l-none">Search</button>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div >
    );
};
Banner.propTypes = {
    handleSearch: PropTypes.func.isRequired
}
export default Banner;