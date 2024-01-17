// import img1 from '../assets/images/decorations/cat-gold.png'
// import img2 from '../assets/images/decorations/cat-back.png'
// import img3 from "../assets/images/decorations/cat-baby.png"
// import img4 from "../assets/images/decorations/cat-love.png"

// import Centerpieces from "../assets/images/decorations/centerpiece.webp"
import Centerpieces from "../assets/images/decorations/Garland+replacement+photo-1920w.webp"
import Columns from "../assets/images/decorations/column.webp"
import Garland from "../assets/images/decorations/garland.webp"
import Ceiling from "../assets/images/decorations/celing walls.jpg"
// import Arches from "../assets/images/decorations/arches.jpeg"
import Arches from "../assets/images/decorations/centerpiece.webp"
import Sculptures from "../assets/images/decorations/scapt.webp"

import catImg1 from "../assets/images/balloons/bbc.png"
import catImg2 from "../assets/images/balloons/gwc.png"

import * as Yup from "yup";

import {v4 as uuidv4} from 'uuid'

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
        linkPath: "/collections/decorations/centerpieces",
        desc: "Decorate your table with gorgeous balloon centerpieces and let the eclectic style of your theme of choice have everyone talking about your party for years to come! "

    },
    {
        title: "Balloon Garlands",
        srcUrl: Garland,
        btnColor:"#06315B",
        bgColor:"#97BAD0",
        txtColor:"#FFF",
        linkPath: "/collections/decorations/garlands",
        desc: "With Balloon Garlands the possibilities are endless. Be it to embellish an empty wall, a table, an entrance, a staircase and even your ceilings. Finding ways to effectively create a new space for any type of festivities is something a touch of balloon garlands can accomplish."
    },
    {
        title: "Balloon Columns",
        srcUrl: Columns,
        btnColor:"#A1C7B8",
        bgColor:"#CEA4D2",
        txtColor:"#000",
        linkPath: "/collections/decorations/columns",
        desc: "Clustered on a free-standing pillar, balloon columns and can be simple, colorful stands or creative eye-catching combination pieces to both adorn and elevate your party space."
    },
    {
        title: "Balloon Ceiling & Walls",
        srcUrl: Ceiling,
        btnColor:"#EDCED4",
        bgColor:"#9EA9DF",
        txtColor:"#000",
        linkPath: "/collections/decorations/Ceiling-Walls",
        desc: "Make a huge statement and transform any space instantly with ceiling and wall decorations, frame out your walls and drape your ceilings with our beautiful balloons to add depth that can have your party space feel like a different dimension entirely."
    },
    {
        title: "Balloon Arches",
        srcUrl: Arches,
        btnColor:"#B3A2D3",
        bgColor:"#348CCA",
        txtColor:"#000",
        linkPath: "/collections/decorations/arches",
        desc: "Balloon arches are an easy way to enhance and create an inviting focal entrance for your events, special occasion or festivals. Available in various shapes and sizes you'll find that they can work splendidly both indoors and outdoors."
    },
    {
        title: "Balloon Sculptures",
        srcUrl: Sculptures,
        btnColor:"#92AB72",
        bgColor:"#F18E76",
        txtColor:"#000",
        linkPath: "/collections/decorations/sculptures",
        desc: "Balloon sculptures are design and art melding together to become one and create invigorating beautiful spaces for your celebration! Decorate your events with a beautiful balloon sculptures that can be made in any size, shape or take the form of any character of choice."
    }
]

export const dropdownItems = {
    "DECORATIONS": [
        {
            title:"centerpieces",
            path: "/collections/decorations/centerpieces",
            cName:'dropdown-link',
            briefText: "a wide range of styles for centerpieces",
            imgSrc: catImg1
        },{
            title:"arches",
            path: "/collections/decorations/arches",
            cName:'dropdown-link',
            briefText: "a wide range of styles for arches",
            imgSrc: catImg1
        },{
            title:"columns",
            path: "/collections/decorations/columns",
            cName:'dropdown-link',
            briefText: "a wide range of styles for columns",
            imgSrc: catImg2
        },{
            title:"letters & numbers",
            path: "/collections/decorations/shapes",
            cName:'dropdown-link',
            briefText: "a wide range of styles for Letters and Numbers",
            imgSrc: catImg2
        },{
            title:"Garlands",
            path: "/collections/decorations/garlands",
            cName:'dropdown-link',
            briefText: "a wide range of styles for Garlands",
            imgSrc: catImg2
        },{
            title:"Sculptures",
            path: "/collections/decorations/sculptures",
            cName:'dropdown-link',
            briefText: "a wide range of styles for Sculptures",
            imgSrc: catImg2
        }
    ],
    "OCCASIONS": [
        {
            title:"birthday",
            path: "/collections/occasions/birthday",
            cName:'dropdown-link',
            briefText: "a wide range of styles for occasions",
            imgSrc: catImg2
        },{
            title:"graduation",
            path: "/collections/occasions/graduation",
            cName:'dropdown-link',
            briefText: "a wide range of styles for occasions",
            imgSrc: catImg1
        },{
            title:"weddings",
            path: "/collections/occasions/wedding-anniversary",
            cName:'dropdown-link',
            briefText: "a wide range of styles for occasions",
            imgSrc: catImg2
        },{
            title:"valentine",
            path: "/collections/occasions/valentine",
            cName:'dropdown-link',
            briefText: "a wide range of styles for occasions",
            imgSrc: catImg1
        },{
            title:"congrats",
            path: "/collections/occasions/congratulations",
            cName:'dropdown-link',
            briefText: "a wide range of styles for occasions",
            imgSrc: catImg2
        },{
            title:"baby",
            path: "/collections/occasions/newborn",
            cName:'dropdown-link',
            briefText: "a wide range of styles for occasions",
            imgSrc: catImg1
        },{
            title:"anniversary",
            path: "/collections/occasions/wedding-anniversary",
            cName:'dropdown-link',
            briefText: "a wide range of styles for occasions",
            imgSrc: catImg2
        }
    ],
    "HOLIDAYS": [
        {
            title:"haloween",
            path: "/collections/holidays/haloween",
            cName:'dropdown-link',
            briefText: "a wide range of styles for holidays",
            imgSrc: catImg1
        },{
            title:"xmas",
            path: "/collections/holidays/xmas",
            cName:'dropdown-link',
            briefText: "a wide range of styles for holidays",
            imgSrc: catImg1
        },{
            title:"new year eve",
            path: "/collections/holidays/new-years-eve",
            cName:'dropdown-link',
            briefText: "a wide range of styles for holidays",
            imgSrc: catImg1
        },{
            title:"valentine",
            path: "/collections/holidays/valentine",
            cName:'dropdown-link',
            briefText: "a wide range of styles for holidays",
            imgSrc: catImg1
        },{
            title:"father's day",
            path: "/collections/holidays/fathers-day",
            cName:'dropdown-link',
            briefText: "a wide range of styles for holidays",
            imgSrc: catImg1
        },{
            title:"mother's day",
            path: "/collections/holidays/mothers-day",
            cName:'dropdown-link',
            briefText: "a wide range of styles for holidays",
            imgSrc: catImg1
        },{
            title:"easter",
            path: "/collections/holidays/easter",
            cName:'dropdown-link',
            briefText: "a wide range of styles for holidays",
            imgSrc: catImg1
        },{
            title:"NATIONAL & FLAG DAY",
            path: "/collections/holidays/national-flag-day",
            cName:'dropdown-link',
            briefText: "a wide range of styles for holidays",
            imgSrc: catImg1
        }
    ],
    "BOUQUETS": [
        {
            title:"birthday",
            path: "/collections/occasions/birthday",
            cName:'dropdown-link',
            briefText: "a wide range of styles for occasions",
            imgSrc: catImg2
        },{
            title:"graduation",
            path: "/collections/occasions/graduation",
            cName:'dropdown-link',
            briefText: "a wide range of styles for occasions",
            imgSrc: catImg1
        },{
            title:"weddings",
            path: "/collections/occasions/wedding-anniversary",
            cName:'dropdown-link',
            briefText: "a wide range of styles for occasions",
            imgSrc: catImg2
        },{
            title:"valentine",
            path: "/collections/occasions/valentine",
            cName:'dropdown-link',
            briefText: "a wide range of styles for occasions",
            imgSrc: catImg1
        },{
            title:"congrats",
            path: "/collections/occasions/congratulations",
            cName:'dropdown-link',
            briefText: "a wide range of styles for occasions",
            imgSrc: catImg2
        },{
            title:"baby",
            path: "/collections/occasions/newborn",
            cName:'dropdown-link',
            briefText: "a wide range of styles for occasions",
            imgSrc: catImg1
        },{
            title:"anniversary",
            path: "/collections/occasions/wedding-anniversary",
            cName:'dropdown-link',
            briefText: "a wide range of styles for occasions",
            imgSrc: catImg2
        },
        {
            title:"haloween",
            path: "/collections/holidays/haloween",
            cName:'dropdown-link',
            briefText: "a wide range of styles for holidays",
            imgSrc: catImg1
        },{
            title:"xmas",
            path: "/collections/holidays/xmas",
            cName:'dropdown-link',
            briefText: "a wide range of styles for holidays",
            imgSrc: catImg1
        },{
            title:"new year eve",
            path: "/collections/holidays/new-years-eve",
            cName:'dropdown-link',
            briefText: "a wide range of styles for holidays",
            imgSrc: catImg1
        },{
            title:"valentine",
            path: "/collections/holidays/valentine",
            cName:'dropdown-link',
            briefText: "a wide range of styles for holidays",
            imgSrc: catImg1
        },{
            title:"father's day",
            path: "/collections/holidays/fathers-day",
            cName:'dropdown-link',
            briefText: "a wide range of styles for holidays",
            imgSrc: catImg1
        },{
            title:"mother's day",
            path: "/collections/holidays/mothers-day",
            cName:'dropdown-link',
            briefText: "a wide range of styles for holidays",
            imgSrc: catImg1
        },{
            title:"easter",
            path: "/collections/holidays/easter",
            cName:'dropdown-link',
            briefText: "a wide range of styles for holidays",
            imgSrc: catImg1
        },{
            title:"NATIONAL & FLAG DAY",
            path: "/collections/holidays/national-flag-day",
            cName:'dropdown-link',
            briefText: "a wide range of styles for holidays",
            imgSrc: catImg1
        }
    ],
}
export const toastOption = {
    position: "bottom-left"
}

export const staticInfo = {
    supervision: "ADULT SUPERVISION REQUIRED: Children under 8 years can choke or suffocate on uninflated or broken balloons. Keep uninflated balloons from children and discard broken balloons at once.",
    delivery: "The image of the products is showed only for characteristic purpose; We make sure to deliver 100% as per the image shown. The delivered product may vary in design or shape according to the accessibility.; After the products are prepared for delivery, we cannot redirect to any change of delivery address.; If the addressee is not available, the products will be delivered at the delivery place.; Our majority of orders are delivered on time and the right place.",
    care: "As per the image, the balloons will be delivered as blow-up.; To avoid the damages, kindly take care of your balloons from sharpened edges, or corners.; Keep separate the deflated balloons from the children and discard the broken balloons.; Enjoy the event with our quality balloons."
}

// fomik schema
export const QuoteSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address format")
        .required("Email is required"),
    name: Yup.string()
        .min(3, "Your name must be 3 characters at minimum")
        .required("Name is required"),
    phone: Yup.string()
        .min(3, "Your name must be 3 characters at minimum")
        .required("Name is required"),
});

export const CheckoutSchema = "";

export const locations = [
    {
    _id: `location-${uuidv4}`,
    area:"Jumeirah",
    deliveryCharge: 200,
    conditions: ""
    },
    {
    _id: `location-${uuidv4}`,
    area: "Marina",
    deliveryCharge: 200,
    conditions: ""
    },
    {
    _id: `location-${uuidv4}`,
    area: "Bur Dubai",
    deliveryCharge: 200,
    conditions: ""
    },
    {
    _id: `location-${uuidv4}`,
    area: "Business bay",
    deliveryCharge: 200,
    conditions: ""
    },
    {
    _id: `location-${uuidv4}`,
    area: "Deira",
    deliveryCharge: 200,
    conditions: ""
    },
    {
    _id: `location-${uuidv4}`,
    area: "Dubai Hills",
    deliveryCharge: 200,
    conditions: ""
    }
]
// not used yet
export const timeSlots = [
    {
    ts_id: 1,
    shift: "morning",
    value: "9am - 1pm",
    deliveryCharge: 70
    },
    {
        ts_id: 2,
        shift: "evening",
        value: "2pm - 9pm",
        deliveryCharge: 85
    }
]

//just notes
const checkoutPayload = {
cartItems: [{
    "_id":99,
    "image":"",
    "title":"12 Assorted color Balloon Bouquet with weight",
    "description":"default desc xs m 855",
    "availableSizes": ["XS","M"],
    "price": 0,
    "inCart": false,
    "quantity": 0,
    "buttonOption": "",
    "moreOptions": [{
        note: "",
        digit: 1,
        thisone: ""
    }],
    "cartQuantity": 0
}],
cartTotalQuantity: 0,
cartTotalAmount: 0,
personalinfo: {
    name: "",
    email: "",
    phone: "",
},
eventData: {
    date: "",
    decortime: "",
    starttime: "",
    endtime: "",
    locationEvent: "",
    messagenote: ""
},
addressDetails: {
    locationEvent: "",
    address: "",
    isDelivery: false
}
}