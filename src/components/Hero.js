import React from 'react'
import styled from 'styled-components';

const Hero = (props) => {

    const MainView = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding-left: 100px;
        padding-top: 20px;
    `;
    const Title = styled.div`
        width: 60%;
        font-family: "Amiri", serif;
        font-size: 60px;
        color: #000000;
    `;
    const Body = styled.div`
        width: 60%;
        font-family: "TheinhardtPan-Light";
        font-size: 20px;
        color: #333333;
    `;

    const Paragraph = styled.p`
        padding-right: 50px;
    `;

    const background = {
        height: "100%",
        backgroundImage: 'url(TopBanner-illustration@2x.png)'
    };

    console.log(props);

    return(
        <MainView>
            <Title>{props.title}</Title>
            <Body>
                {
                    props.body.map((b, i) => {
                        return (
                            <React.Fragment>
                                <Paragraph key={i}>{b}</Paragraph>
                            </React.Fragment>
                        )
                    })
                }
            </Body>
        </MainView>
    )
};

export default Hero;