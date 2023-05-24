import React from 'react'
import App from '../App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Login } from '../components/Login'
import { STRING_ROUTES } from '../../config/Routes';
import { RoutesPrivate } from './RoutesPrivate';
import { Clients } from '../pages/client/Clients'
import { Products } from '../pages/products/Products'
import { Product, loader } from '../pages/products/Product';
import { SaveOrUpdateProduct } from '../pages/products/SaveOrUpdateProduct';

export const Routes = () => {


    const router = createBrowserRouter([
        {
            path: STRING_ROUTES.HOME,
            element: <RoutesPrivate><App /></RoutesPrivate>,
        },
        {
            path: STRING_ROUTES.CLIENTS,
            element: <RoutesPrivate><Clients /></RoutesPrivate>
        },
        {
            path: STRING_ROUTES.PRODUCTS,
            element: <RoutesPrivate><Products /></RoutesPrivate>
        },
        {
            path: STRING_ROUTES.PRODUCT,
            element: <RoutesPrivate><Product /></RoutesPrivate>,
            //  loader: loader
        },
        {
            path: STRING_ROUTES.PRODUCT_NEW,
            element: <RoutesPrivate><SaveOrUpdateProduct /></RoutesPrivate>,
            //  loader: loader
        },
        {
            path: STRING_ROUTES.PRODUCT_EDIT,
            element: <RoutesPrivate><SaveOrUpdateProduct /></RoutesPrivate>,
            //  loader: loader
        },
        {
            path: STRING_ROUTES.LOGIN,
            element: <Login />
        },

        {
            path: "*",
            element: <RoutesPrivate><App /></RoutesPrivate>
        }

    ])
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}
