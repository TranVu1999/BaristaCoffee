import HomePage from './Home';
import AccountPage from './Account';
import AboutPage from './About';
import BookingPage from './Booking';

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
        path: "/booking",
        exact: true,
        component: BookingPage
    },
    {
        path: "/",
        exact: true,
        component: HomePage
    }
    
]

export default routes;