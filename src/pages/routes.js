import HomePage from './Home';
import AccountPage from './Account';
import AboutPage from './About';
import BookingPage from './Booking';
import ContactPage from './Contact';
import NotFoundPage from './NotFound';

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
        path: "/contact",
        exact: true,
        component: ContactPage
    },
    {
        path: "/not-found",
        exact: true,
        component: NotFoundPage
    },
    {
        path: "/",
        exact: true,
        component: HomePage
    }
    
]

export default routes;