import React from 'react'
import styled from 'styled-components'
import MovieDescription from './components/MovieDescription'
import { VscClose } from "react-icons/vsc";
import PreviewVideo from './components/PreviewVideo';

const GradientWrapper = styled.div`
    position:absolute;
    left:0;
    top:0;
    height:100%;
    width:50%;
    z-index:10;
    background:linear-gradient(90deg,black 80%,transparent 100%);
`

const PreviewMovieDescriptiveWithVideo = ({
    title,
    description,
    createdDate,
    punctuation,
    moreDescriptions,
    children,
    video,
    onClose
}) => {
    return (
        <div className="relative bg-red">
            <div className="flex relative flex-col">
                <GradientWrapper />
                <div className="relative w-2/4">
                    <div className="z-20 relative p-10">
                        <MovieDescription
                            createdDate={createdDate}
                            punctuation={punctuation}
                            description={description}
                            moreDescriptions={moreDescriptions}
                            title={title} />
                    </div>
                </div>
                <div className="flex relative z-10">
                    {children}
                </div>
                <div className="object-cover absolute right-0 h-full w-3/5">
                    <PreviewVideo video={video} />
                </div>
                <div className="absolute right-0 top-0 m-2 text-white" role="button" onClick={onClose}>
                    <VscClose size={30} />
                </div>
            </div>
        </div>
    )
}

export default PreviewMovieDescriptiveWithVideo
