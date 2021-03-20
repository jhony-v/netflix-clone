import React from 'react'

const ListCardMovie = ({ movie : { image, name } }) => {
    return (
        <div className="flex flex-col flex-1">
            <img src={image} className="object-cover w-full block"  alt="" style={{height:"150px"}} />
            <span className="text-white mt-2 block text-center">{name}</span>
        </div>
    )
}

export default ListCardMovie
