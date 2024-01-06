import App from './App';
import EmperorProfile from './EmperorProfile';
import EmperorForm from './EmperorForm';
import About from './About';
import Resources from './Resources';

const routes = [
    {
        path: "/",
        element: <App />,
        children: [      
            {
                path: "/emperorform",
                element: <EmperorForm />
            }
        ]
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/emperorprofile/:id",
        element: <EmperorProfile />
      },
      {
        path: "/resources",
        element: <Resources />
      }
];

export default routes;