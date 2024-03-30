import { createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import Patterns from './scss/views/Patterns.tsx'
import ItemsByCategory from "./ItemsByCategory.tsx";
import Favourites from './Favourites.tsx'
import Cart from './Cart.tsx'
import ProductDetails from "./ProductDetails.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/categoria',
        element: <ItemsByCategory />
    },
    {
        path: '/favoritos',
        element: <Favourites />
    },
    {
        path: '/cesta',
        element: <Cart />
    },
    {
        path: '/detalles-producto',
        element: <ProductDetails />
    },
    {
        path: '/patterns',
        element: <Patterns />
    }
])