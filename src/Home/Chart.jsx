
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const Chart = ({ pokemon }) => {
    const data = [
        {
            subject: 'HP',
            A: pokemon?.stats[0].base_stat,
        },
        {
            subject: 'Attack',
            A: pokemon?.stats[1].base_stat,
        },
        {
            subject: 'Defense',
            A: pokemon?.stats[2].base_stat,

        },
        {
            subject: 'Special-attack',
            A: pokemon?.stats[3].base_stat,

        },
        {
            subject: 'Special-defense',
            A: pokemon?.stats[4].base_stat,

        },
        {
            subject: 'Speed',
            A: pokemon?.stats[5].base_stat,

        },
    ];

    return (
        <ResponsiveContainer width="50%" height="50%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis domain={[0, 150]} /> {/* Establecer el rango de 0 a 150 */}
                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.5} />
            </RadarChart>
        </ResponsiveContainer>
    );
};

export default Chart;
