import React from 'react'
import faker from "faker"
import PreviewMovieDescriptiveWithVideo from "components/Common/PreviewMovieDescriptiveWithVideo"
import ItemOptionOfMovie from "components/Common/ItemOptionOfMovie"
import { onClearCurrentMovieToPreview, useCurrentMoviePreviewStore } from 'store/currentMoviePreviewStore'

const PreviewCurrentMovie = () => {
    const { data : { isPreview , movie } } = useCurrentMoviePreviewStore();
    if(isPreview) {
        return (
            <PreviewMovieDescriptiveWithVideo
            onClose={onClearCurrentMovieToPreview}
            punctuation={movie.punctuation}
            createdDate={movie.createdDate}
            description={movie.description}
            title={movie.title}
            video="https://player.vimeo.com/external/448480646.sd.mp4?s=cf9243058cc6d110489c3715cb6aab60a4afdd7d&profile_id=164"
            moreDescriptions={[
                {
                    key: "Principal actor",
                    value: "Tony stark",
                },
                {
                    key: "Second actor",
                    value: "Mark harris",
                },
                {
                    key: "Category",
                    value: movie.category,
                },
            ]}
            image={faker.image.people()}
        >
            <ul className="flex justify-center items-center w-full whitespace-nowrap overflow-x-auto sm:whitespace-normal">
                <ItemOptionOfMovie selected className="mr-3 ml-3">Preview</ItemOptionOfMovie>
                <ItemOptionOfMovie className="mr-3 ml-3">Episodes</ItemOptionOfMovie>
                <ItemOptionOfMovie className="mr-3 ml-3">Trailers or more</ItemOptionOfMovie>
                <ItemOptionOfMovie className="mr-3 ml-3">More like this</ItemOptionOfMovie>
                <ItemOptionOfMovie className="mr-3 ml-3">Details</ItemOptionOfMovie>
            </ul>
        </PreviewMovieDescriptiveWithVideo>
        )
    }
    return null;
  
}

export default PreviewCurrentMovie
