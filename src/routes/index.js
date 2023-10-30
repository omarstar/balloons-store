// import AnonymousLayout from "../layouts/AnonymousLayout"
import MainLayout from "../layouts/MainLayout"
import LayoutHome from "../pages/LayoutHome"
import LayoutProducts from "../pages/LayoutProducts"
import NotFound from "../pages/NotFound";
import { renderRoutes } from "./generate-routes";
/* isPublic used if page is public or require login */
/* hasSiderLink to check to render on menu or not */
export const routes = [
    // {
    //     layout: AnonymousLayout,
    //     routes: [
    //         {
    //             name: 'login',
    //             title: 'Login page',
    //             component: Login,
    //             path: '/login',
    //             isPublic: true
    //         }
    //     ]
        
    // },
    {
        layout: MainLayout,
        routes: [
            {
                name: 'home',
                title: 'Home page',
                component: LayoutHome,
                path: '/home'
            },
            {
                name: 'init',
                title: 'Start page',
                component: NotFound,
                path: '/'
            },
            {
                name: 'balloons',
                title: 'Balloons',
                hasSiderLink: true,
                routes: [
                    {
                        name: 'list-balloons',
                        title: 'list of Balloons',
                        hasSiderLink: true,
                        component: LayoutProducts,
                        path: '/balloons'
                    }
                ]
            },

        ]

    }
]

export const Routes = renderRoutes(routes);