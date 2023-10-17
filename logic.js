// console.log("Logic")

const SidebarData = [
    {
        title: "About Us",
        path: "/about-us",
        subNav: [
            {
                title: "Our Aim",
                path: "/about-us/aim",
            },
            {
                title: "Our Vision",
                path: "/about-us/vision",
            },
        ],
    },
    {
        title: "Services",
        path: "/services",
        subNav: [
            {
                title: "Service 1",
                path: "/services/services1",
            },
            {
                title: "Service 2",
                path: "/services/services2",
            },
            {
                title: "Service 3",
                path: "/services/services3",
            },
        ],
    },
    {
        title: "Contact",
        path: "/contact",
    },
    {
        title: "Events",
        path: "/events",
        subNav: [
            {
                title: "Event 1",
                path: "/events/events1",
            },
            {
                title: "Event 2",
                path: "/events/events2",
            },
        ],
    },
    {
        title: "Support",
        path: "/support",
    },
];

function subMenu(sidebarData) {
    const menu = sidebarData.map((item, index) => {
        console.log(item.title)
        if (item["subNav"] && item["subNav"] !== undefined) {
            item["subNav"].map((item, index) => {
                console.log(item.title)
            })
        }
    })
    return menu;
}
subMenu(SidebarData)


// OUTPUT 
// About Us
// Our Aim
// Our Vision
// Services
// Service 1
// Service 2
// Service 3
// Contact
// Events
// Event 1
// Event 2
// Support
