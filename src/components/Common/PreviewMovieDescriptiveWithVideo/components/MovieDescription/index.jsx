import StarsCalification from 'components/Common/StarsCalification';
import React, { memo } from 'react'
import { IoMdAddCircleOutline } from 'react-icons/io';

const MovieDescription = ({
    title,
    punctuation,
    createdDate,
    description,
    moreDescriptions
}) => {
    return (
        <div className="flex flex-col">
            <span className="block text-white font-bold font-sans text-3xl">{title}</span>
            <div className="flex items-center">
                <div className="mr-1">
                    <StarsCalification totalStars={punctuation} />
                </div>
                <div className="text-gray-400 text-sm">
                    {createdDate}
                </div>
            </div>
            <span className="text-gray-400 text-base w-full mt-4 mb-4">{description}</span>
            <div className="flex">
                <ul className="p-0">
                    {moreDescriptions.map(({ key, value }, index) => (
                        <li className="block" key={index}>
                            <span className="text-gray-400 mr-2">{key}</span>
                            <span className="text-white">{value}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-3 flex items-center">
                <span className="text-white">
                    <IoMdAddCircleOutline size={40} />
                </span>
                <span className="ml-2 text-white font-bold">
                    My list
                </span>
            </div>
        </div>
    )
}

MovieDescription.defaultProps = {
    moreDescriptions : []
}

export default memo(MovieDescription);
