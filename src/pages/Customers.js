import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Customers() {
    const [customers, setCustomers] = useState();
    useEffect(() => {
        console.log('Fetching...');
        fetch('http://localhost:8000/api/customers/')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setCustomers(data.customers);
        });
    }, []);
    return (
        <>
            <h1>Here are our customers:</h1>
            {customers 
                ? customers.map((customer) => {
                    return (
                        <p>
                            <Link to={"customers/" + customer.id}>{customer.name}</Link>;
                        </p>
                    );
            }) 
            : null }
        </>
    ) 
}