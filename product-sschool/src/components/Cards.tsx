import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import {Button} from "@chakra-ui/react";

const Cards = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://instrutor-api.onrender.com/instructor');
            setData(response.data);
            setLoading(false);
        } catch (error) {
            setError('Error fetching data. Please try again later.');
            setLoading(false);
        }
    };



    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>{error}</div>
            ) : (
                <div className="inner-cards">
                    {data.map((item: any, index: number) => (
                        <div key={index}  className="card-items">
                            <img src={item.image} alt="" />
                            <div className="inner-cards-sub-items">
                                <h4>{item.name}</h4>
                                <h6>{item.designation}</h6>
                                <img src={item.logo} alt="" className="card-logo"/>
                                
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default Cards;