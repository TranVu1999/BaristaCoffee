import HomePage from './Home';
import AccountPage from './Account';
import SignUpPage from './SignUp';

const routes =  [
    {
        path: "/signup",
        exact: true,
        component: SignUpPage
    },
    {
        path: "/account/:accountContent",
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