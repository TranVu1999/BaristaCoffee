import HomePage from './Home';
import AccountPage from './Account';
import SignUpPage from './SignUp';
import MallPage from './Mall';

const routes =  [
    {
        path: "/signup",
        exact: true,
        component: SignUpPage
    },
    {
        path: "/mall",
        exact: true,
        component: MallPage
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