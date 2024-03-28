import { createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import Patterns from './scss/views/Patterns.tsx'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/patterns',
        element: <Patterns />
    }
])