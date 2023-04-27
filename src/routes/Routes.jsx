import React from 'react'
import App from '../App';
import { useSelector } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Login } from '../components/Login'

export const Routes = () => {
    const { token } = useSelector((state) => state.auth)

    const router = createBrowserRouter([
        {
            path: "/",
            element: token ? <App /> : <Login />,
        },
    ])
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}
