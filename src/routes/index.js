import React from 'react'
import Checkout from "../components/checkout/Checkout";
import QuoteRental from "../components/contacts/QuoteRental";
import AnonymousLayout from "../layouts/AnonymousLayout"
import MainLayout from "../layouts/MainLayout"
import LayoutCart from "../pages/LayoutCart";
import LayoutCategories from "../pages/LayoutCategories";
import LayoutContact from "../pages/LayoutContact";
import LayoutHome from "../pages/LayoutHome"
import LayoutProducts from "../pages/LayoutProducts"
import NotFound from "../pages/NotFound";
import ProductDetailsPage from "../pages/ProductDetailsPage";
// import { renderRoutes } from "./generate-routes";
import { Routes, Route} from "react-router-dom";
import Products from '../components/products/Products';
import carouselData from "../data/carouselData.json"
import { decoItemsCollection } from '../utils/constants';
import ProductsWide from '../components/products/ProductsWide';
import DecorationDetails from '../components/product-detail/DecorationDetails';
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
                path: '/'
            },
            {
                name: 'contacts',
                title: 'Contact section',
                component: LayoutContact,
                path: 'balloons/contacts'
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
                name: 'checkout',
                title: 'Checkout',
                hasSiderLink: true,
                routes: [
                    {
                        name: 'Checkout-section',
                        title: 'Checkout section',
                        hasSiderLink: true,
                        component: Checkout,
                        path: 'balloons/Checkout'
                    }
                ]
            },
            {
                name: 'rentalContact',
                title: 'rentalContact',
                hasSiderLink: true,
                routes: [
                    {
                        name: 'rentalContact-section',
                        title: 'rentalContact section',
                        hasSiderLink: true,
                        component: QuoteRental,
                        path: '/party-rentals'
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

export const RoutesElement = () => {
    return (
        <Routes>
            <Route path="/" element={<LayoutHome />} />
            <Route path="balloons/contacts" element={<LayoutContact />} />
            <Route path="/category/:cat" element={<LayoutCategories />} />
            <Route path="/category" element={<LayoutCategories />} />
            <Route path="/redirect/collections/:prds" element={<LayoutProducts />} />
            <Route path="/collections/boquests" element={<Products />} />
            <Route path="/collections/inflatables" element={<Products />} />
            {/* Products will be other comp to select and add bouquet to cart */}
            <Route path="/collections/create-your-bouquet" element={<Products />} />

            
            <Route path="/balloons/details/:cat" element={<ProductDetailsPage />} />
            <Route path="/balloons/cart" element={<LayoutCart />} />
            <Route path="/balloons/Checkout" element={<Checkout />} />
            {/* <Route path="/collections/setups" element={<ProductsWide />} />
            <Route path="/collections/nadia-picks" element={<ProductsWide />} /> */}
            <Route path="/collections/decorations" element={<ProductsWide />} />
            <Route path="/decorations/details" element={<DecorationDetails />} />
            <Route path="/decorations" element={<QuoteRental slidesData={{imgs:carouselData.DecorationSlides,folder:'decorations/slides'}} decorationData={decoItemsCollection.MenuDecorationItems} />} />
            <Route path="/party-rentals" element={<QuoteRental slidesData={{imgs:carouselData.rentals,folder:'rentals/slides'}} decorationData={decoItemsCollection.rentalItems} />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    )
}

// export const Routes = renderRoutes(routes);
