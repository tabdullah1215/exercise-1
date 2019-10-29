import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';

const Header = React.forwardRef(({activeItem, setActiveItem, headerStyles}, ref) => {
    const Title = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 15%;
        margin-top: 12px;
        margin-left: 30px;
    `;
    const Image = styled.img`
        width: ${headerStyles.picWidth}px;
        height: ${headerStyles.picHeight}px;
    `;
    const MainView = styled.div`
        display: flex;
        flex-direction: row;
        padding-top: ${headerStyles.paddingTop}em;
        margin-bottom: 20px;
        height: ${headerStyles.height}px;
        width: 100%;
        background-color: transparent;
        box-shadow: 0px 10px 5px ${headerStyles.shadowColor};
    `;

    return (
        <MainView ref={ref} >
            <Title><Image src="McK_ScriptMark_RGB_McKDeepBlue.png" alt="McKinsey & Company"/></Title>
            <NavBar activeItem={activeItem} setActiveItem={setActiveItem} paddingTop={headerStyles.navPadding}/>
        </MainView>
    )
});

export default Header;