
import './App.css';
import AppRoutes from '../routes.jsx';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <>
      <header>
        <Link to='/'>Home</Link>
        <nav>
          <ul>
            <li>
              <Link to='/products'>Products</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <AppRoutes />
    </>
  );
}

export default App;
