import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Cell, Pie, PieChart } from 'recharts';
import { getStoredDonation } from '../../Utility/localStorage';

const DonationStatistics = () => {
    const [data, setData] = useState([])
    let allGivenDonations = useLoaderData();
    allGivenDonations = allGivenDonations.length;
    let allSelectedDonations = getStoredDonation();
    allSelectedDonations = allSelectedDonations.length
    useEffect(() => {
        let percentageOfAllSelectedDonations = (allSelectedDonations / allGivenDonations) * 100;
        percentageOfAllSelectedDonations = parseFloat(percentageOfAllSelectedDonations)
        let percentageOfAllGivenDonations = 100 - percentageOfAllSelectedDonations;
        const data = [
            { name: 'Group A', value: percentageOfAllGivenDonations },
            { name: 'Group B', value: percentageOfAllSelectedDonations }
        ];
        setData(data)
    }, [allGivenDonations, allSelectedDonations])


    const COLORS = ['#FF444A', '#00C49F'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(1)}%`}
            </text>
        );
    };
    return (
        <div>
            <div className='mb-28'>
                <div className='flex justify-center mt-9 px-4'>
                    <PieChart width={370} height={370}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={90}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </div>
                <div className='-mt-5 flex flex-col md:flex-row justify-center gap-10'>
                    <div className='flex gap-2 items-center justify-center md:justify-normal'>
                        <p>Your Donation</p>
                        <div style={{
                            backgroundColor: '#00C49F',
                            borderRadius: '2px'
                        }} className='w-24 h-3'>

                        </div>
                    </div>
                    <div className='flex gap-2 items-center justify-center md:justify-normal'>
                        <p>Total Donation</p>
                        <div style={{
                            backgroundColor: '#FF444A',
                            borderRadius: '2px'
                        }} className='w-24 h-3'>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default DonationStatistics;