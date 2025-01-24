import { RecoilRoot } from 'recoil';
import './App.css'
import Shop from './Shop';
import NavBar from './NavBar';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from './Homepage';
import Category from './Category';
function App() {
  const routes= [{
    path: '/',
    element: <NavBar />,
    hydrateFallbackElement: <p>Loading...</p>,
    children:[
      {
        path: '/home',
        element: <Homepage />,
      },
      {
        path: '/category/:name',
        element: <Category/>,
      },
      {
        path: '/home/shop/:id',
        element: <Shop />,
      }
    ]
  }];
  const router = createBrowserRouter(routes,{
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  })

  return (
    <RecoilRoot>
      {/* <div className="navbar"><NavBar /></div>
      <div className="App"><Shop id={3}/></div>
      <div className="App"><Shop id={4}/></div> */}
<RouterProvider router={router} />
    </RecoilRoot>
  )
}

export default App
