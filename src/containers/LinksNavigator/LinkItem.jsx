import React from 'react'
import { Link } from 'gatsby'

const LinkItem = ({ href, children }) => {
    return (
        <li className="flex mr-4 ml-4">
            <Link to={href} activeClassName="text-white" className="text-gray-400">
                {children}
            </Link>
        </li>
    )
}

export default LinkItem
