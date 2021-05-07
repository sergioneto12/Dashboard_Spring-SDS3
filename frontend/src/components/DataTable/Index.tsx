import { useEffect, useState } from "react";
import { SalePage } from "types/sale";
import { baseURL } from "utils/requests";
import axios from "axios";
import { formatLocalDate } from "utils/format";

export default function Datatable() {

    const [page, setPage] = useState<SalePage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0
    });

    useEffect(() => {
        axios.get(`${baseURL}/sales?page=1&size=20&sort=date,desc`)
            .then(response => {
                setPage(response.data)
            })
    }, [])

    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {page.content?.map(item => (
                        <tr key={item.id}>
                        <td> {formatLocalDate(item.date, "dd/MM/yyyy")} </td>
                        <td> {item.seller.name} </td> 
                        <td> {item.visited} </td> 
                        <td> {item.deals} </td> 
                        <td> {item.amount.toFixed(2)} </td>  
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};