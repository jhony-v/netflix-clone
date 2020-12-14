import React from 'react'
import cn from 'classnames'

const GridHorizontal = ({ children, className }) => {
    const classNames = cn("grid", className);
    return (
        <div className={classNames}>
            {children}
        </div>
    )
}

export default GridHorizontal
