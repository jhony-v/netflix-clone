import React from 'react'

const StarsCalification = ({totalStars}) => {
    return (
        <div className="inline-flex">
            {[...Array(totalStars)].map((_,index) => (
                <span key={index} className="mr-1 text-red-600 text-lg">&#9733;</span>
            ))}
        </div>
    )
}

export default StarsCalification
