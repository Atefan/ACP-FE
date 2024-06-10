import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import 'chart.js/auto';
import { behaviours, steps, polarChartColors } from "../constant";

const PolarChart = ({ scores, width, height }) => {
    const data = {
        labels: behaviours,
        datasets: [
            {
                data: [
                    scores.takesAction,
                    scores.takesResponsibility,
                    scores.goodCommunication,
                    scores.businessImpact,
                    scores.mastery,
                ],
                backgroundColor: polarChartColors,
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        aspectRatio: 1,
        scales: {
            r: {
                min: 0,
                max: Object.keys(steps).length,
                ticks: {
                    precision: 0,
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
                //position: 'bottom'
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const labelIndex = context.dataIndex;
                        let label;
                        const score = data.datasets[0].data[labelIndex];
                        switch (score) {
                            case 1:
                                label = steps[0];
                                break;
                            case 2:
                                label = steps[1];
                                break;
                            case 3:
                                label = steps[2];
                                break;
                            case 4:
                                label = steps[3];
                                break;
                            case 5:
                                label = steps[4];
                                break;
                            case 6:
                                label = steps[5];
                                break;
                            default:
                                label = '';
                        }
                        label = label + ' - ' + score;
                        return label;
                    },
                },
            },
        },
    };

    return (
        <div style={{ width: width, height: height }}>
            <PolarArea data={data} options={options} />
        </div>
    );
};

export default PolarChart;