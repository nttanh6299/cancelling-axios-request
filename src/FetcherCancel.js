import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetcherCancel = ({ url }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        let source = axios.CancelToken.source();

        const loadData = async () => {
            try {
                const res = await axios.get(url, {
                    cancelToken: source.token
                });
                console.log('got response');
                setData(res.data);
            } catch (err) {
                if (axios.isCancel(err)) {
                    console.log('caught cancel');
                } else {
                    throw err;
                }
            }
        };

        loadData();

        return () => {
            console.log('unmouting');
            source.cancel();
        };
    }, [url]);

    if (!data) return (<div>Loading data from {url}</div>);
    return (<div>{JSON.stringify(data)}</div>);
}

export default FetcherCancel;