import { Link } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <div className="app">
            <div className="links">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </div>
    );
}

export default App;
