import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import All_Issues from "../Components/All_Issues";
import PrivateRoute from "./PrivateRoute";
import AddIssue from "../Components/AddIssue";
import MyIssues from "../Components/MyIssues";
import MyContribution from "../Components/MyContribution";
import IssueDetails from "../Components/IssueDetails";
import UpdateIssue from "../Pages/UpdateIssue";
import CatIssues from "../Components/CatIssues";
import Error from "../Components/Error";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/issues',
                element: <All_Issues />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/add-issue',
                element: (
                    <PrivateRoute>
                        <AddIssue />
                    </PrivateRoute>)
            },
            {
                path: '/my-issues',
                element: (
                    <PrivateRoute>
                        <MyIssues />
                    </PrivateRoute>)
            },
            {
                path: '/my-contribution',
                element: (
                    <PrivateRoute>
                        <MyContribution />
                    </PrivateRoute>)
            },
            {
                path: '/issues/:id',
                element: (
                    <PrivateRoute>
                        <IssueDetails />
                    </PrivateRoute>),
                loader: ({ params }) => fetch(`https://clean-sphere-server.vercel.app/issues/${params.id}`)
            },
            {
                path: '/my-issues/update/:id',
                element: (
                    <PrivateRoute>
                        <UpdateIssue />
                    </PrivateRoute>)
            },
            {
                path: '/category/:name',
                element: (
                    <PrivateRoute>
                        <CatIssues />
                    </PrivateRoute>)
            }
        ]
    },
    {
        path: '*',
        element: <Error />
    }
])