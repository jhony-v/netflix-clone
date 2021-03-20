import React from 'react'
import classNames from "classnames"
const BaseActionButton = ({children,onClick,full}) => {
    return (
        <button 
        className={classNames(
            "bg-red-600 rounded-lg px-10 py-3 text-white hover:bg-red-500 duration-150 border-none outline-none",
            full && 'w-full'
        )} 
        type="button"
        onClick={onClick}>
            {children}
        </button>
    )
}

export default BaseActionButton
