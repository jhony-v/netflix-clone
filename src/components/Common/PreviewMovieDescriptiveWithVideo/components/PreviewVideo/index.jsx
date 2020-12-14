import React, { useEffect, useState, useRef } from 'react'
import { IoIosPlay } from "react-icons/io"
import styled from 'styled-components'

const PlayerButton = styled.div`
    position:absolute;
    left:60%;
    top:50%;
    transform:translate(-60%,-50%);
    color:white;
`

const PreviewVideo = ({ video }) => {
    const refVideo = useRef();
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        if (playing) {
            refVideo.current.play();
        }
        else {
            refVideo.current.pause();
        }
    }, [playing]);

    return (
        <div className="bg-black h-full w-full relative flex">
            <video src={video} className="object-cover w-full h-full" ref={refVideo} onClick={() => setPlaying(false)} />
            {!playing && (
                <PlayerButton onClick={() => setPlaying(true)} >
                    <IoIosPlay size={80} />
                </PlayerButton>
            )}
        </div>
    )
}

export default PreviewVideo
