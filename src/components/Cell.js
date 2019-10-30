import React from 'react'
import styled from 'styled-components';

const Cell = (props) => {

    const MainView = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 40px 50px;
        ${({inverted}) => inverted ? `background-color: #000000` : `background-color: #F0F0F0` }
    `;
    const Title = styled.div`
        width: 100%;
        font-family: "Amiri", serif;
        font-size: 60px;
        ${({inverted}) => inverted ? `color: #ffffff` : `color: #000000` }
    `;
    const Body = styled.div`
        width: 100%;
        font-family: "TheinhardtPan-Light";
        font-size: 20px;
        ${({inverted}) => inverted ? `color: #ffffff` : `color: #333333` }
    `;

    const Links = styled.div`
        width: 100%;
        font-family: "TheinhardtPan-Light";
        font-size: 16px;
        ${({inverted}) => inverted ? `color: #ffffff` : `color: #333333` }
    `

    const background = {
        height: "100%",
        backgroundImage: 'url(TopBanner-illustration@2x.png)'
    };

    console.log(props);

    return(
        <MainView inverted={props.inverted}>
            <Title inverted={props.inverted}>{props.title}</Title>
            <Body inverted={props.inverted}>
            {
                props.body.map((b, i) => {
                    return <p key={i}>{b}</p>
                })
            }
            </Body>
            <Links inverted={props.inverted}>
            {
                props.links.map((lk, i) => {
                    return <p key={i}>{lk}</p>
                })
            }
            </Links>
        </MainView>
    )
};

export default Cell;