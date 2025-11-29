
import './App.css';
import AppRoutes from '../routes.jsx';
import { Link } from 'react-router-dom';

const App = () => {

  

  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <ul>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <AppRoutes />
      <footer>
        <p>© 2024 My Company</p>
      </footer>
    </>
  );
};
export default App;
