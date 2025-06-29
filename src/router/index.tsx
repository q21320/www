import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@/layout';
import { lazy, Suspense } from 'react';
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <Layout />
            </Suspense>
        ),
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Home />,
                index: true
            },
            {
                path: 'about',
                element: <About />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
]);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}