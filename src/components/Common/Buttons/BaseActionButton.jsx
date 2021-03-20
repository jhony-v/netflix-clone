import React from 'react'

const BaseActionButton = ({children,onClick}) => {
    return (
        <button 
        className="bg-red-500 rounded-lg px-10 py-3 text-white hover:bg-red-600 duration-150 border-none outline-none" 
        onClick={onClick}>
            {children}
        </button>
    )
}

export default BaseActionButton
