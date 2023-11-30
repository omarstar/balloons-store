import img1 from '../assets/images/decorations/cat-gold.png'
import img2 from '../assets/images/decorations/cat-back.png'
import img3 from "../assets/images/decorations/cat-baby.png"
import img4 from "../assets/images/decorations/cat-love.png"

// import Centerpieces from "../assets/images/decorations/centerpiece.webp"
import Centerpieces from "../assets/images/decorations/Garland+replacement+photo-1920w.webp"
import Columns from "../assets/images/decorations/column.webp"
import Garland from "../assets/images/decorations/garland.webp"
import Ceiling from "../assets/images/decorations/celing walls.jpg"
// import Arches from "../assets/images/decorations/arches.jpeg"
import Arches from "../assets/images/decorations/centerpiece.webp"
import Sculptures from "../assets/images/decorations/scapt.webp"


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
        title: "Balloon Centerpieces",
        srcUrl: Centerpieces,
        btnColor:"#943740",
        bgColor:"#F0C7D5",
        txtColor:"#fff",
        desc: "Decorate your table with gorgeous balloon centerpieces and let the eclectic style of your theme of choice have everyone talking about your party for years to come! "

    },
    {
        title: "Balloon Garland",
        srcUrl: Garland,
        btnColor:"#06315B",
        bgColor:"#97BAD0",
        txtColor:"#FFF",
        desc: "With Balloon Garlands the possibilities are endless. Be it to embellish an empty wall, a table, an entrance, a staircase and even your ceilings. Finding ways to effectively create a new space for any type of festivities is something a touch of balloon garlands can accomplish."
    },
    {
        title: "Columns",
        srcUrl: Columns,
        btnColor:"#A1C7B8",
        bgColor:"#CEA4D2",
        txtColor:"#000",
        desc: "Clustered on a free-standing pillar, balloon columns and can be simple, colorful stands or creative eye-catching combination pieces to both adorn and elevate your party space."
    },
    {
        title: "Balloon Ceiling & Walls",
        srcUrl: Ceiling,
        btnColor:"#EDCED4",
        bgColor:"#9EA9DF",
        txtColor:"#000",
        desc: "Make a huge statement and transform any space instantly with ceiling and wall decorations, frame out your walls and drape your ceilings with our beautiful balloons to add depth that can have your party space feel like a different dimension entirely."
    },
    {
        title: "Balloon Arches",
        srcUrl: Arches,
        btnColor:"#B3A2D3",
        bgColor:"#348CCA",
        txtColor:"#000",
        desc: "Balloon arches are an easy way to enhance and create an inviting focal entrance for your events, special occasion or festivals. Available in various shapes and sizes you'll find that they can work splendidly both indoors and outdoors."
    },
    {
        title: "Balloon Sculptures",
        srcUrl: Sculptures,
        btnColor:"#92AB72",
        bgColor:"#F18E76",
        txtColor:"#000",
        desc: "Balloon sculptures are design and art melding together to become one and create invigorating beautiful spaces for your celebration! Decorate your events with a beautiful balloon sculptures that can be made in any size, shape or take the form of any character of choice."
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
export const toastOption = {
    position: "bottom-left"
}