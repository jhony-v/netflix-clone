import React, { useEffect } from 'react'
import { onFetchMovies, useListMoviesStore } from 'store/listMoviesStore'
import { onSelectMovieToPreview } from 'store/currentMoviePreviewStore'
import GridHorizontal from 'components/Common/GridHorizontal';
import PopularMovieDescriptiveCard from 'components/Common/PopularMovieDescriptiveCard';

const PreviewListMovies = () => {
    const { data } = useListMoviesStore();
    useEffect(() => {
        onFetchMovies();
    }, [])
    return (
        <div className="mt-10">
            {data.map(({ category, items }, index) => {
                return (
                    <div className="flex flex-col" key={index}>
                        <div className="text-white font-bold text-2xl p-5">{category}</div>
                        <GridHorizontal className="px-7 sm:px-0 grid-cols-none sm:grid-cols-3 lg:grid-cols-5">
                            {items.map(item => (
                                <PopularMovieDescriptiveCard
                                    key={item.movieId}
                                    movie={item}
                                    onClick={() => onSelectMovieToPreview(item)}
                                    h="190px"
                                />
                            ))}
                        </GridHorizontal>
                    </div>
                )
            })}
        </div>
    )
}

export default PreviewListMovies
