import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div>
            <h2>Home page</h2>
            <Link to='/'>Home</Link>
            <Link to='/loging'>Loging</Link>
        </div>
    );
};

export default Home;