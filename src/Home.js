import { useState } from "react";

const Home = () => {
    // let name = 'mario';
    // useState allows us to make a reactive value and allows us to change value whenever we want
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);
    const handleClick = () => {
        setName('luigi')
        setAge(30);
    }
    
    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default Home;