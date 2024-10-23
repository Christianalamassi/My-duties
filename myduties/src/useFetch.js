import React from 'react';
import { useEffect, useState } from 'react';


const useFetch = (url) => {
    const [data, setData] = useState([]); // Initialize as `null` to indicate loading state
    const [error, setError] = useState(null); // Error state

    useEffect(() => {
        setTimeout(() => {
            // Fetch the data from the JSON file in the public folder
            fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json(); // Parse JSON data
                })
                .then((data) => {
                    setData(data.duties); // Set the 'users' array to `data`
                })
                .catch((error) => {
                    console.error('Error, can not find the data', error);
                    setError(error.message); // Set error message
                }, 1000);
        }, [url]); // Empty dependency array ensures this effect runs only once
    })

    // Display an error message if fetch fails
    if (error) {
        return <div>Unexpacted Error: {error}</div>;
    }

    // Display a loading state if data is still `null`
    if (data === null) {
        return <div>Loading....</div>;
    }
    return { data, error };
}

export default useFetch