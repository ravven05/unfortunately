import React from 'react'
import { Routes, Route } from "react-router-dom"
import PremiumPage from './pages/PremiumPage'
import FavoritePage from "./pages/FavoritePage"


const MainRoutes = () => {
    const SPOTIFY_ROUTES = [
        {
          link: '/favorite',
          element: <FavoritePage />,
          id: 1
        },
        {
          link: "/premium",
          element: <PremiumPage />,
          id: 2
        }
    ]
  return (
    <Routes>
        {SPOTIFY_ROUTES.map(item => (
        <Route path={item.link} element={item.element} key={item.id} />
        ))}
    </Routes>
  )
}

export default MainRoutes