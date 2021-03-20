import React from 'react'
import { BsChevronCompactDown } from 'react-icons/bs';
import { IoMdAddCircleOutline } from 'react-icons/io';
import styled from 'styled-components';
import StarsCalification from '../StarsCalification';

const CardDescriptiveWrapper = styled.div`
    opacity:0;
    transition:opacity .5s;
`;

const CardWrapper = styled.div`
    @media (min-width:640px) {
        height:${props => props.h};
    }
    transition:transform .3s;
    :hover {
        transform:scale(1.1);
        z-index:10;
        ${CardDescriptiveWrapper} {
            opacity:1;
        }
    }
`;

const PopularMovieDescriptiveCard = ({
    onClick,
    onAdd,
    h,
    movie : {
        image,
        title,
        description,
        createdDate,
        punctuation,
        movieId,
    }
}) => {
    return (
        <CardWrapper className="relative flex items-end overflow-hidden select-none mb-3 h-auto" h={h}>
            <img src={image} alt={title} className="absolute w-full h-full left-0 top-0 object-cover" />
            <div className="absolute w-full h-full bg-gradient-to-tr from-black" />
            <CardDescriptiveWrapper className="pl-2 pr-2 relative w-full">
                <span className="block text-white font-bold font-sans text-xl">{title}</span>
                <div className="flex items-center">
                    <div className="mr-1">
                        <StarsCalification totalStars={punctuation} />
                    </div>
                    <div className="text-white text-sm">
                        {createdDate}
                    </div>
                </div>
                <div className="flex items-end justify-between">
                    <span className="text-white text-sm w-full mr-4">{description}</span>
                    <div className="text-white ml-auto flex-none" role="button" tabIndex="0" onClick={onAdd} onKeyDown={onAdd}>
                        <IoMdAddCircleOutline size={30} />
                    </div>
                </div>
                <div className="flex justify-center">
                    <span className="text-red-600" role="button" tabIndex="0" onClick={onClick} onKeyDown={onClick}>
                        <BsChevronCompactDown size={40} />
                    </span>
                </div>
            </CardDescriptiveWrapper>
        </CardWrapper>
    )
}

PopularMovieDescriptiveCard.defaultProps = {
    movie : {
        image : "",
        title : "",
        description : "",
        createdDate : "",
        punctuation : 0,
        movieId : 0,
    }
}

export default PopularMovieDescriptiveCard
