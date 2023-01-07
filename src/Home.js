import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                // console.log(res);
                // res.ok checks for situations where server has connection but no data returns (i.e. endpoint is faulty - so checks if res.ok is true or false)
                if (!res.ok) {
                    // if res.ok is not okay, it will throw error
                    throw Error('could not fetch the data for that resource')
                    // then it'll catch that error with the catch block below
                }
                return res.json()
            })
            .then((data) => {
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            // this error catches if the server is not connected
            .catch(err => {
                setIsPending(false);
                setError(err.message);
        })
    },[])
    
    return (
        <div className="home">
            {error && <div>{error}</div>}
            { isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        </div>
    );
}

export default Home;