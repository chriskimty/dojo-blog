import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            {/* use colon as such for route param */}
            <Route path="/blogs/:id" element={<BlogDetails />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;