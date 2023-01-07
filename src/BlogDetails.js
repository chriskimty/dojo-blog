// Route parameters - this will show this component for whatever comes after /blogs/XXX 
import { useParams } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();

    return (
        <div className="blog-details">
            <h2>Blog Details - {id}</h2>
        </div>
    )
}

export default BlogDetails;