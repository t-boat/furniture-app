import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import LandingPage from './pages/landing';
import About from './pages/about';
import Collection from './pages/collection';
import ContactUs from './pages/contactUs';
import RootLayout from './layouts/rootLayout';


export default function App() {

  const myRouter = createBrowserRouter([

    {
      path: "/",
      element: <RootLayout />,
      children: [
        
        {
          index: true,
          element: <LandingPage/>,
        },
    
        {
          path: "about-us",
          element: <About/>,
        },
    
        {
          path: "collection",
          element: <Collection/>,
        },
    
        {
          path: "contact-us",
          element: <ContactUs/>,
        }

      ]
    }
  ]);



  return (
    <RouterProvider router={myRouter} />
  );

}

