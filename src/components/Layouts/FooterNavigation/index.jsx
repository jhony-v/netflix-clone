import React from 'react'

const dataLinks = [
    {
        text : "FAQHelp",
        link : "#"
    },
    {
        text : "Center Account Media",
        link : "#"
    },
    {
        text : "Center Investor",
        link : "#"
    },
    {
        text : "Relations Jobs",
        link : "#"
    },
    {
        text : "Gift Cards",
        link : "#"
    },
    {
        text : "Buy Gif Cards",
        link : "#"
    },
    {
        text : "Ways to Watch",
        link : "#"
    },
    {
        text : "Terms of Use",
        link : "#"
    },
    {
        text : "Privacy",
        link : "#"
    },
    {
        text : "Corporate Information",
        link : "#"
    },
    {
        text : "Contact Us",
        link : "#"
    },    
    {
        text : "Speed test",
        link : "#"
    },
    {
        text : "Legal Notices",
        link : "#"
    },
    {
        text : "Netflix original",
        link : "#"
    },
]

const FooterNavigation = () => {
    return (
        <footer className="px-20 mt-5">
            <p className="mb-5">
                <a href="#" className="text-gray-400">Questions? Contact us.</a>
            </p>
            <ul className="flex flex-wrap">
                {dataLinks.map((item,key) => (
                    <li className="py-2 sm:py-4 block" style={{width:"250px"}} key={key}>
                        <a className="text-gray-400 text-sm" href={item.link}>{item.text}</a>
                    </li>
                ))}
            </ul>   
        </footer>
    )
}

export default FooterNavigation
