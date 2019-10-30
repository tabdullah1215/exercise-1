import React from 'react';
import styled from 'styled-components';
import Grid from './Grid';

const TileBoard = (props) => {
    const MainView = styled.div`
        width: 100%;
        display: flex;
        flex-direction: row;
        box-sizing: border-box;
        padding: 10px 10px;
    `;
    const TileGroup = styled.div`
        width: 50%;
    `;

    console.log(props.content);
    const {tileBoard} = props.content;
    return(
        <MainView>
            {
                tileBoard.map((grid, i) => {
                    return <Grid isTileMode={true} content={grid}/>
                })
            }
        </MainView>
    )
};

export default TileBoard;