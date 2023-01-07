// A component is just a function that returns a JSX template, and it's exported at the bottom of the file

const Navbar = () => {

  return (
    <nav className="navbar">
        <h1>The Dojo Blog</h1>
        <div className="links">
            <a href="/">Home</a>
        <a href="/create">New Blog</a>
        </div>
    </nav>
  );
}

export default Navbar;