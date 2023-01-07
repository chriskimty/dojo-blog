// Custom Hook - must start with 'use' - making functions reusable! 

import { useState, useEffect } from "react";

// instead of hardcoding the url in the fetch request, pass it as an argument as such so that whatever component uses this hook can reuse it
const useFetch = (url) => {
    // we changed the name from blogs to data because again, we don't want to hard-code it for diff uses if other components use it
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('could not fetch the data for that resource')
                }
                return res.json()
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
        })
    }, [])
    
    // this return allows the data to be accessed in the components that use the custom hook. 
    // technically, can also be passed in as an array, but objects is better because then order doesn't matter
    return { data, isPending, error }
}

export default useFetch;