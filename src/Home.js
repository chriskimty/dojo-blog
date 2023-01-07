const Home = () => {

    // we get 'e' as the first parameter which gives us access to different things
    const handleClick = (e) => {
        console.log('hello', e)
    }

    // for this one, if we want to see 'e', pass it into the anon func
    const handleClickAgain = (name, e) => {
        console.log('hello' + name, e.target)
    }
    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            {/* if you want to pass in an argument, pass anon func first like so */}
            <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button>
        </div>
    );
}

export default Home;