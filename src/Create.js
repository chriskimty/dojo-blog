import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // create blog object which will save the data
        const blog = { title, body, author }
        // console.log(blog);
        setIsPending(true);
    // Then we need to make a POST request
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added')
            setIsPending(false);
        })
        setTitle('');
        setBody('');
        setAuthor('mario');
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <label>Blog body:</label>
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {/* {!isPending && <button>Add Blog</button>}
                { isPending && <button disabled>Adding blog...</button>} */}
                {/* cleaner way is to use ternary */}
                {!isPending
                    ? <button>Add Blog</button>
                    : <button disabled>Adding blog...</button>}
            </form>
        </div>
    )
}

export default Create;