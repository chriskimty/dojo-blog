import './App.css';

const App = () => {
  // Numbers, strings, arrays can be displayed dynamically (they're all converted to strings)
  const title = 'Welcome to the new blog'
  const likes = 50;
  // Cannot output booleans or objects
  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked {likes} times</p>
        
        <p> {10}</p>
        <p> {'hello cats'}</p>
        <p> {[1, 2, 3, 4, 5]}</p>
        <p>{ Math.random() * 10 }</p>
     </div>
    </div>
  );
}

export default App;