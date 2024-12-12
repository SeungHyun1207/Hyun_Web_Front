import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.tsx'

const router = createBrowserRouter( // Router 생성
  createRoutesFromElements(
    <Route
      path='*'
      element={
        <App />
      }
    />
  )
)


createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
