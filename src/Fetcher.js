import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Fetcher = ({ url }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        let mounted = true;

        const loadData = async () => {
            const res = await axios.get(url);
            if(mounted) {
                setData(res.data);
            }
        };

        loadData();

        return () => {
            mounted = false;
        };
    }, [url]);

    if(!data) return (<div>Loading data from {url}</div>);
    return (<div>{JSON.stringify(data)}</div>);
}
 
export default Fetcher;