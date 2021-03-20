import React from 'react'

const ListMovies = ({ title, data, render }) => {
    return (
        <div className="mb-10">
            <h2 className="text-white mb-5 px-5 text-base font-bold">{title}</h2>
            <div className="flex sm:grid sm:grid-cols-4 whitespace-nowrap overflow-y-auto">
                {data.map((e, i) => (
                    <div className="block px-2" key={i}>
                        {render(e)}
                    </div>
                ))}
            </div>
        </div>
    )
}

ListMovies.defaultProps = {
    data : []
}

export default ListMovies
