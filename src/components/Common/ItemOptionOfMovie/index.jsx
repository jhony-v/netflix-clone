import React from 'react'
import styled from 'styled-components'
import cn from 'classnames';

const Border = styled.div`
    height:5px;
    width:100%;
    background-color:${props => props.selected && "red"};
`

const ItemOptionOfMovie = ({ selected, onClick, children, className }) => {
    const optionClassname = cn("flex flex-col", className);
    return (
        <div className={optionClassname} role="button" onClick={onClick} onKeyUp={onClick} tabIndex="0">
            <span className="text-gray-100 mb-2 font-bold uppercase text-sm">{children}</span>
            <Border selected={selected} />
        </div>
    )
}

export default ItemOptionOfMovie
