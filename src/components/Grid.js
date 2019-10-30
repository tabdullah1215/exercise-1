import React from 'react';
import styled from "styled-components";
import Cell from './Cell';
import content from "../content";

const Grid = (props) => {
    const getWidthString = (span) => {
        if (!span) return;
        let width = span / 12 * 100;
        return `width: ${width}%`;
    };

    const MainView = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
    `;
    const Row = styled.div`
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        &::after {
            content: "";
            clear: both;
            display: table;
        }
    `;
    const Column = styled.div`
        float: left;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        ${({xs}) => (xs ? getWidthString(xs) : "width: 100%")};
        
        @media only screen and (min-width: 768px)  {
            ${({sm}) => sm && getWidthString(sm)};
        }
        
        @media only screen and (min-width: 992px)  {
            ${({md}) => md && getWidthString(md)};
        }
        @media only screen and (min-width: 1200px)  {
            ${({lg}) => lg && getWidthString(lg)};
        }
    `;

    return(
        <MainView>
        <Row>
            <Column xs="12" sm="6" md="6" lg="6">
                <Cell title={content[2].title} body={content[2].body} links={content[2].links} inverted={false}/>
            </Column>
            <Column xs="12" sm="6" md="6" lg="6">
                <Cell title={content[3].title} body={content[3].body} links={content[3].links}  inverted={true}/>
            </Column>
        </Row>
        </MainView>
    );

};

export default Grid;