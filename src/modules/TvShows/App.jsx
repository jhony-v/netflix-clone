import { tvWatchMoviesWithCategories } from 'data/tvWatchMovies'
import React from 'react'
import ListCardMovie from './components/ListCardMovie'
import ListMovies from './components/ListMovies'


const MyList = () => {
    return (
        <div className="mt-24">
            <div className="mb-10 px-10">
                <h1 className="text-white text-5xl font-bold mb-7">TV Shows</h1>
                <p className="text-white text-xl sm:w-10/12 md:w-1/2">These days, the small screen has some very big things to offer. From sitcoms to dramas to travel and talk shows, these are all the best programs on TV</p>
            </div>
            <div className="block my-20">
                {tvWatchMoviesWithCategories().map(({category,movies}, i) => (
                    <ListMovies key={i} title={category} data={movies} render={(currentMovie) => (
                        <ListCardMovie movie={currentMovie} />
                    )} />
                ))}
            </div>
        </div>
    )
}

export default MyList
