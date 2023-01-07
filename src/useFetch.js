// Creating a cleanup function to use when a component that uses this hook unmounts (otherwise, causes errors)
import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
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
                // aborting will stop the data but will still change state with the error, so if we don't want the error to run when fetch is aborted, we can write something like this below to stop the errors 
                if (err.name === 'AbortError') {
                    console.log('fetch aborted')
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            })
    
        // will pause the fetch if the component that uses useFetch is unmounted
        return () => abortCont.abort();
    }, [url])
    // ^I think I forgot to include url as a dependency before

    return { data, isPending, error }
}

export default useFetch;