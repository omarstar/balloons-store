import catImg1 from "../assets/images/balloons/bbc.png"
import catImg2 from "../assets/images/balloons/gwc.png"

import * as Yup from "yup";

import {v4 as uuidv4} from 'uuid'
import { homePageLibrary, imagesLibrary } from "./images"

//the list of menu items for bouquets category //missing
export const bouquetsList = ['haloween','national-flag-day','xmas','new-years-eve','valentine','athers-day','mothers-day','easter','birthday']
//the list of menu items for the decorations category
export const decorationList = ['centerpieces','arches','columns','shapes','garlands','sculptures','Ceiling-Walls','setups']


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
        path: "/",
        cName:'menu-item'
    },
    {
        id: 92,
        title:"About Us",
        path: "/#aboutus",
        cName:'menu-item'
    },
    // {
    //     id: 93,
    //     title:"Customer Service",
    //     path: "#contactus",
    //     cName:'menu-item'
    // },
    {
        id: 94,
        title:"Contact Us",
        path: "/#contactus",
        cName:'menu-item'
    },
]

export const rentalItems = [
    {
        title: "Inflatable Jumping Bouncy",
        srcUrl: imagesLibrary.ribouncy,
        btnColor:"#0078bd",
        bgColor:"rgb(195, 227, 101, 0.3)",
        txtColor:"#fff",
        linkPath: "/balloons/contacts",
        desc: "Bouncy rental desc"

    },
    {
        title: "Popcorn Station Machine",
        srcUrl: imagesLibrary.ricorn,
        btnColor:"#fe0b2b",
        bgColor:"rgb(248, 230, 105, 0.4)",
        txtColor:"#fff",
        linkPath: "/balloons/contacts",
        desc: "Popcorn station rental desc"

    },
    {
        title: "Cotton Candy Station Machine",
        srcUrl: imagesLibrary.ricandy,
        btnColor:"#ec9da8",
        bgColor:"rgb(204, 211, 157, 0.4)",
        txtColor:"#000",
        linkPath: "/balloons/contacts",
        desc: "Cotton candy rental desc"

    },
    {
        title: "Beauty Bar",
        srcUrl: imagesLibrary.ribeauty,
        btnColor:"#752f2d",
        bgColor:"rgb(254, 179, 175, 0.3)",
        txtColor:"#fff",
        linkPath: "/balloons/contacts",
        desc: "Beauty Bar rental desc"

    },
    {
        title: "Bubble Machine",
        srcUrl: imagesLibrary.ribubble,
        btnColor:"#f7f7f7",
        bgColor:"rgb(144, 143, 151, 0.4)",
        txtColor:"#000",
        linkPath: "/balloons/contacts",
        desc: "Bubble Machine rental desc"

    },
]

export const decorationItems = [
    {
        title: "Balloon Centerpieces",
        srcUrl: homePageLibrary.hmCenterpieces,
        btnColor:"#aaa683",
        bgColor:"#dadac2",
        // bgColor:"#F0C7D5",
        txtColor:"#fff",
        linkPath: "/collections/centerpieces",
        desc: "Decorate your table with gorgeous balloon centerpieces and let the eclectic style of your theme of choice have everyone talking about your party for years to come! "

    },
    {
        title: "Balloon Garlands",
        srcUrl: homePageLibrary.hmGarlands,
        btnColor:"#be7475",
        bgColor:"#e5dfd1",
        txtColor:"#FFF",
        linkPath: "/collections/garlands",
        desc: "With Balloon Garlands the possibilities are endless. Be it to embellish an empty wall, a table, an entrance, a staircase and even your ceilings. Finding ways to effectively create a new space for any type of festivities is something a touch of balloon garlands can accomplish."
    },
    {
        title: "Balloon Columns",
        srcUrl: homePageLibrary.hmColumns,
        btnColor:"#af6f6d",
        bgColor:"#f1e2df",
        txtColor:"#fff",
        linkPath: "/collections/columns",
        desc: "Clustered on a free-standing pillar, balloon columns and can be simple, colorful stands or creative eye-catching combination pieces to both adorn and elevate your party space."
    },
    {
        title: "Balloon Arches",
        srcUrl: homePageLibrary.hmArches,
        btnColor:"#c7b591",
        bgColor:"#aaceda",
        // bgColor:"#64d5fd",
        txtColor:"#000",
        linkPath: "/collections/arches",
        desc: "Balloon arches are an easy way to enhance and create an inviting focal entrance for your events, special occasion or festivals. Available in various shapes and sizes you'll find that they can work splendidly both indoors and outdoors."
    },
    {
        title: "Balloon Sculptures",
        srcUrl: homePageLibrary.hmSculptures,
        btnColor:"#7e416f",
        bgColor:"rgb(251, 222, 226, 0.3)",
        txtColor:"#fff",
        linkPath: "/collections/sculptures",
        desc: "Balloon sculptures are design and art melding together to become one and create invigorating beautiful spaces for your celebration! Decorate your events with a beautiful balloon sculptures that can be made in any size, shape or take the form of any character of choice."
    }
]

export const dropdownItems = {
    "DECORATIONS": [
        {
            title:"centerpieces",
            path: "/collections/centerpieces",
            cName:'dropdown-link',
            briefText: "a wide range of styles for centerpieces",
            imgSrc: catImg1
        },{
            title:"arches",
            path: "/collections/arches",
            cName:'dropdown-link',
            briefText: "a wide range of styles for arches",
            imgSrc: catImg1
        },{
            title:"columns",
            path: "/collections/columns",
            cName:'dropdown-link',
            briefText: "a wide range of styles for columns",
            imgSrc: catImg2
        },{
            title:"letters & numbers",
            path: "/collections/shapes",
            cName:'dropdown-link',
            briefText: "a wide range of styles for Letters and Numbers",
            imgSrc: catImg2
        },{
            title:"Garlands",
            path: "/collections/garlands",
            cName:'dropdown-link',
            briefText: "a wide range of styles for Garlands",
            imgSrc: catImg2
        },{
            title:"Sculptures",
            path: "/collections/sculptures",
            cName:'dropdown-link',
            briefText: "a wide range of styles for Sculptures",
            imgSrc: catImg2
        },{
            title:"setups",
            path: "/collections/setups",
            cName:'dropdown-link',
            briefText: "a wide range of styles for full setups",
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
    ordernote: "Please choose the required number while placing the order. Cold air, hot air, high humidity, changing barometric pressure, high altitudes, and moving air from fans and vents will reduce balloon float times. The float times posted on our site are the maximum to be expected. Changing conditions mean that on some occasions balloons may float for only one day and on other occasions the same balloons may float for many days. We guarantee that your balloons will be delivered in perfect condition, but float times will vary. There are no guarantees for float time if balloons are displayed outdoors.",
    supervision: "Children under 8 years can choke or suffocate on uninflated or broken balloons. Keep uninflated balloons from children and discard broken balloons at once.",
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