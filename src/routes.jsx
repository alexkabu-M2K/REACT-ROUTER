
import { Routes, Route } from 'react-router-dom';

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/about' element={<About />} />                
            </Routes>
        </>
    );
}
export default AppRoutes;