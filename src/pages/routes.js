import HomePage from './Home';
import AccountPage from './Account';

const routes =  [
        {
        path: "/my-account",
        exact: true,
        component: AccountPage
    },
    {
        path: "/",
        exact: true,
        component: HomePage
    }
]

export default routes;