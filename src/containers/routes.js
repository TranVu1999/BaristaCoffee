import HomePage from './Home';
import SignUpPage from './SignUp';

const routes =  [
    {
        path: "/signup",
        exact: true,
        component: SignUpPage
    },
    {
        path: "/",
        exact: true,
        component: HomePage
    }
    
]

export default routes;