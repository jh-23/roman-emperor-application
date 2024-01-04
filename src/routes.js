import App from './App';
import EmperorProfile from './EmperorProfile';
import EmperorForm from './EmperorForm';
import About from './About';

const routes = [
    {
        path: "/",
        element: <App />
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
        path: "/emperorform",
        element: <EmperorForm />
      }
];

export default routes;