import HomePage from './Home';
import AccountPage from './Account';
import AboutPage from './About';
import BookingPage from './Booking';
import ContactPage from './Contact';
import NotFoundPage from './NotFound';
import WhatWeOfferPage from './WhatWeOffer';
import ShopPage from './Shop';

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
        path: "/what-we-offer",
        exact: true,
        component: WhatWeOfferPage
    },
    {
        path: "/shop",
        exact: true,
        component: ShopPage
    },
    {
        path: "/",
        exact: true,
        component: HomePage
    }
    
]

export default routes;