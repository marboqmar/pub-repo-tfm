import { createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import Landing from "./Landing.tsx";
import ItemsByCategory from "./ItemsByCategory.tsx";
import Favourites from './Favourites.tsx'
import Cart from './Cart.tsx';
import ProductDetails from "./ProductDetails.tsx";
import Patterns from './scss/views/Patterns.tsx';
import Payment from "./Payment.tsx";
import MyAccount from "./MyAccount.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Landing />
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
                path: '/pago',
                element: <Payment/>
            },
            {
                path: 'mi-cuenta',
                element: <MyAccount />
            }
        ]
    },
    {
        path: '/patterns',
        element: <Patterns />
    }
])