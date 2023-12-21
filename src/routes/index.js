import AnonymousLayout from "../layouts/AnonymousLayout"
import MainLayout from "../layouts/MainLayout"
import LayoutCart from "../pages/LayoutCart";
import LayoutCategories from "../pages/LayoutCategories";
import LayoutHome from "../pages/LayoutHome"
import LayoutProducts from "../pages/LayoutProducts"
import NotFound from "../pages/NotFound";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import { renderRoutes } from "./generate-routes";
/* isPublic used if page is public or require login */
/* hasSiderLink to check to render on menu or not */
export const routes = [
    {
        layout: AnonymousLayout,
        routes: [
            {
                name: 'login',
                title: 'Login page',
                component: LayoutProducts,
                path: '/login',
                // isPublic: true
            }
        ]
        
    },
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
                name: 'category',
                title: 'Category',
                routes: [
                    {
                        name: 'list-categories',
                        title: 'list of categories',
                        component: LayoutCategories,
                        path: '/category/:cat'
                    },
                    {
                        name: 'list-categories',
                        title: 'list of categories',
                        component: LayoutCategories,
                        path: '/category'
                    }
                ]
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
                        path: '/collections/decorations/:prds'
                    },
                    {
                        name: 'list-balloons',
                        title: 'list of Balloons',
                        hasSiderLink: true,
                        component: LayoutProducts,
                        path: '/collections/occasions/:prds'
                    },
                    {
                        name: 'list-balloons',
                        title: 'list of Balloons',
                        hasSiderLink: true,
                        component: LayoutProducts,
                        path: '/collections/holidays/:prds'
                    },
                    {
                        name: 'list-balloons',
                        title: 'list of Balloons',
                        hasSiderLink: true,
                        component: LayoutProducts,
                        path: '/collections'
                    }
                ]
            },
            {
                name: 'details',
                title: 'details',
                hasSiderLink: true,
                routes: [
                    {
                        name: 'list-details',
                        title: 'list of details',
                        hasSiderLink: true,
                        component: ProductDetailsPage,
                        path: 'balloons/details/:cat'
                    }
                ]
            },
            {
                name: 'cart',
                title: 'Cart',
                hasSiderLink: true,
                routes: [
                    {
                        name: 'cart-section',
                        title: 'cart section',
                        hasSiderLink: true,
                        component: LayoutCart,
                        path: 'balloons/cart'
                    }
                ]
            },
            {
                name: 'init',
                title: 'Start page',
                component: NotFound,
                path: '/*'
            },

        ]

    }
]

export const Routes = renderRoutes(routes);