import HomePage from './Home';
import AccountPage from './Account';
import AboutPage from './About';

const routes =  [
    {
        path: "/my-account",
        exact: true,
        component: AccountPage
    },
    {
        path: "/about",
        exact: true,
        component: AboutPage
    },
    {
        path: "/",
        exact: true,
        component: HomePage
    }
    
]

export default routes;