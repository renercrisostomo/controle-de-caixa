import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Graph = ({ graphData }) => {

    const lista = [graphData];

    const corReceita = '#5932EA';
    const corDespesa = '#EA3232';

    const CustomXAxisTick = ({x, y, payload}) => (
        <text x={x} y={y + 10} fill="#666" textAnchor="middle" fontSize={14}>
            {payload.value}
        </text>
    );

    const CustomBarLabel = ({x, y, width, value, fill}) => (
        <text x={x + width / 2} y={y - 6} fill={fill} fontWeight={700} fontFamily="Poppins" fontSize={14} textAnchor="middle">
            R$: {value.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            })}
        </text>
    );

    return (
        <span id="graph" className="section">
            <h2 style={{ marginBottom: '29px' }}>Receitas e despesas</h2>
            <div>
                <BarChart width={516} height={240} barGap={17} data={lista}>
                    <CartesianGrid stroke="#e0e0e0" strokeDasharray="1.19" />
                    <XAxis dataKey="name" tick={<CustomXAxisTick />} tickLine={false} axisLine={false} />
                    <YAxis tick={{fontSize: 14, fontWeight: 400, fill: '#bcbcbc'}} tickLine={false} axisLine={false} bias={20} />
                    <Tooltip />
                    <Bar barSize={121} dataKey="receita" fill={corReceita} radius={[8, 8, 8, 8]} label={<CustomBarLabel fill={corReceita} />} />
                    <Bar barSize={121} dataKey="despesa" fill={corDespesa} radius={[8, 8, 8, 8]} label={<CustomBarLabel fill={corDespesa} />} />
                </BarChart>
            </div>
        </span>
    );
};

export default Graph;
