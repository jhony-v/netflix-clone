import React from 'react'
import styled from 'styled-components'

const headerHeightNavigator = "60px";

const WrapperMain = styled.div`
    width:100%;
    margin-top:${headerHeightNavigator};
`
const WrapperHeader = styled.header`
    background-color:rgba(0,0,0,.8);
    position:fixed;
    left:0;
    top:0;
    display:flex;
    z-index:100;
    width:100%;
    height:${headerHeightNavigator};
`

const FixedHeaderNavigator = ({ header, main }) => {
    return (
        <>
            <WrapperHeader>{header}</WrapperHeader>
            <WrapperMain>
                {main}
            </WrapperMain>
        </>
    )
}

export default FixedHeaderNavigator
