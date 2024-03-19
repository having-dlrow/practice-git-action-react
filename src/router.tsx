import { Navigate, createBrowserRouter } from 'react-router-dom'
import { App } from './App'
import NoticePage from './pages/noticePage/NoticePage'
import BoardPage from './pages/boardPage/BoardPage'
import RegisterPage from './pages/registerPage/RegisterPage'
import LoginPage from './pages/loginPage/LoginPage'
import InspectPage from './pages/inspectPage/InspectPage'
import ReportPage from './pages/reportPage/ReportPage'
import MainPage from './pages/mainPage/MainPage'
import AdminPage from './pages/adminPage/adminPage'
import AdminMemberPage from './pages/adminMemberPage/adminMemberPage'
import AdminMailPage from './pages/adminMailPage/adminMailPage'
import AdminBoardPage from './pages/adminBoardPage/adminBoardPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: 'notices',
        element: <NoticePage />,
      },
      {
        path: 'board',
        element: <BoardPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'inspect',
        element: <InspectPage />,
      },
      {
        path: 'report',
        element: <ReportPage />,
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminPage />,
    children: [
      {
        path: '',
        element: <Navigate to="member" replace />,
      },
      {
        path: 'member',
        element: <AdminMemberPage />,
      },
      {
        path: 'mail',
        element: <AdminMailPage />,
      },
      {
        path: 'board',
        element: <AdminBoardPage />,
      },
    ],
  },
])
