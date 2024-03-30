import { createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import Patterns from './scss/views/Patterns.tsx'
import Favourites from './Favourites.tsx'
import Cart from './Cart.tsx'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
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
        path: '/patterns',
        element: <Patterns />
    }
])