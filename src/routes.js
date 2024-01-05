import App from './App';
import EmperorProfile from './EmperorProfile';
import EmperorForm from './EmperorForm';
import About from './About';

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
      }

];

export default routes;