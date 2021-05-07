import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import { baseURL } from 'utils/requests';

type ChartData = {
    series: number[],
    labels: string[]
};

export default function DonutChart() {

    const [ chartData, setChartData ] = useState<ChartData>({ labels: [], series: [] })

    useEffect(() => {
        axios.get(`${baseURL}/sales/amount-by-seller`)
        .then(response => {
            const data = response.data as SaleSum[];
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(x => x.sum);

            setChartData({ labels: myLabels, series: mySeries });
        });
    }, []);

    //Forma errada de declaração, sem os hooks, pois os dados não são atualizados.
    /* let chartData : ChartData = { labels: [], series: [] };

    axios.get(`${baseURL}/sales/amount-by-seller`)
        .then(response => {
            const data = response.data as SaleSum[];
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(x => x.sum);

            chartData = { labels: myLabels, series: mySeries };
        }); */
    
    const options = {
        legend: {
            show: true
        }
    }
    
    return (
        <Chart
            options={{ ...options, labels: chartData.labels }}
            series={chartData.series}
            type="donut"
            height="240"
        >
        </Chart>
    )
}