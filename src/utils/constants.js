import img1 from '../assets/images/decorations/cat-gold.png'
import img2 from '../assets/images/decorations/cat-back.png'
import img3 from "../assets/images/decorations/cat-baby.png"
import img4 from "../assets/images/decorations/cat-love.png"


export const MenuItems = [
    {
        id: 10,
        title:"Bulk Balloons",
        path: "/",
        cName:'menu-item dropdown-link'
    },
    {
        id: 11,
        title:"Decorating",
        path: "/",
        cName:'menu-item dropdown-link',
        hasMegaMenu: true
    },
    {
        id: 12,
        title:"Bouquets",
        path: "/",
        cName:'menu-item dropdown-link',
        hasMegaMenu: true
    },
    {
        id: 13,
        title:"Create your own Bouquet",
        path: "/",
        cName:'menu-item dropdown-link'
    },
    // {
    //     id: 14,
    //     title:"holidays",
    //     path: "/",
    //     cName:'menu-item dropdown-link'
    // },
    {
        id: 15,
        title:"Party rentals",
        path: "/",
        cName:'menu-item dropdown-link'
    }
]
export const menuSmallItems = [
    {
        id: 91,
        title:"Home",
        path: "/home",
        cName:'menu-item'
    },
    {
        id: 92,
        title:"About Us",
        path: "/home#aboutus",
        cName:'menu-item'
    },
    {
        id: 93,
        title:"Customer Service",
        path: "/home#customerservice",
        cName:'menu-item'
    },
    // {
    //     id: 94,
    //     title:"Contact Us",
    //     path: "/home#contactus",
    //     cName:'menu-item'
    // },
]
export const decorationItems = [
    {
        title: "img1",
        srcUrl: img1,
        btnColor:"#DB7F2C",
        bgColor:"#CABBAC",
        txtColor:"#fff"
    },
    {
        title: "img2",
        srcUrl: img2,
        btnColor:"#A8D8DF",
        bgColor:"#FBC965",
        txtColor:"#000"
    },
    {
        title: "img3",
        srcUrl: img3,
        btnColor:"#004B9A",
        bgColor:"#CA4B78",
        txtColor:"#fff"
    },
    {
        title: "img4",
        srcUrl: img4,
        btnColor:"#AC230F",
        bgColor:"#B9AF6C",
        txtColor:"#000"
    }
]

export const dropdownItems = {
    "Decorations": [
        {
            title:"centerpieces",
            path: "/",
            cName:'dropdown-link'
        },{
            title:"arches",
            path: "/",
            cName:'dropdown-link'
        },{
            title:"columns",
            path: "/",
            cName:'dropdown-link'
        },{
            title:"letters & numbers",
            path: "/",
            cName:'dropdown-link'
        }
    ],
    "Bouquets": [
        {
            title:"birthday",
            path: "/",
            cName:'dropdown-link'
        },{
            title:"graduation",
            path: "/",
            cName:'dropdown-link'
        },{
            title:"weddings",
            path: "/",
            cName:'dropdown-link'
        },{
            title:"valentine",
            path: "/",
            cName:'dropdown-link'
        },{
            title:"congrats",
            path: "/",
            cName:'dropdown-link'
        },{
            title:"baby",
            path: "/",
            cName:'dropdown-link'
        },{
            title:"anniversary",
            path: "/",
            cName:'dropdown-link'
        }
    ],
    "holidays": [
        {
            title:"haloween",
            path: "/",
            cName:'dropdown-link'
        },{
            title:"xmas",
            path: "/",
            cName:'dropdown-link'
        },{
            title:"new year eve",
            path: "/",
            cName:'dropdown-link'
        },{
            title:"valentine",
            path: "/",
            cName:'dropdown-link'
        },{
            title:"father's day",
            path: "/",
            cName:'dropdown-link'
        },{
            title:"mother's day",
            path: "/",
            cName:'dropdown-link'
        },{
            title:"easter",
            path: "/",
            cName:'dropdown-link'
        }
    ],
}
