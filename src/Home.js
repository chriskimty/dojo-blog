import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    // useFetch custom hook here
    // destructuring of the info from useFetch
    // note data: blogs allow us to call it a different name within this component
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    // ^all we have to do is call the custom hook and pass the argument which was the url
    return (
        <div className="home">
            {error && <div>{error}</div>}
            { isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        </div>
    );
}

export default Home;