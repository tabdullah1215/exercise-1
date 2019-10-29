import React from 'react';
import styled from 'styled-components';
import Sticky from 'react-sticky-el';
import Slide from './Slide';
import Header from "./Header";
import navItems, {headerStyles} from '../constants';

const MainView = styled.div`
        height: 100%;
        background-color: #ffffff;
        overflow: auto;
    `;

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: '',
            scrollStatus: '',
            headerStyles: {
                ...headerStyles.initial
            }
        };
        this._timeout = null;
    }

    getClosestInViewRef = () => {
        let headerHeight = this.header && this.header.getBoundingClientRect().height;
        let mainHeight = this.main && this.main.getBoundingClientRect().height;
        return navItems.reduce((acc, item) => {
            let itemTop = this[item.name] && this[item.name].getBoundingClientRect().top;
            if(itemTop > headerHeight + 5 &&
                itemTop < mainHeight &&
                itemTop < acc.posY) {
                return {name: item.name, posY: itemTop};
            }
            return acc;
        }, {name: 'main', posY: this.main && mainHeight});
    };

    getHeaderStyles = () => {
        if(this.main.scrollTop > this.header.getBoundingClientRect().height){
            this.setState({
                headerStyles: {
                    ...headerStyles.shrunk
                }
            })
        } else {
            this.setState({
                headerStyles: {
                    ...headerStyles.initial
                }
            })
        }
    };

    handleScroll = (event) => {
        event.preventDefault();
        if(this._timeout){
            clearTimeout(this._timeout);
        }
        this._timeout = setTimeout(() => {
            this._timeout = null;
            this.getHeaderStyles();
            this.setState({
                scrollStatus:'stopped',
                activeItem: this.getClosestInViewRef().name
            });
        },1000);
        if(this.state.scrollStatus !== 'scrolling') {
            this.setState({
                scrollStatus:'scrolling'
            });
        }
    };

    setActiveItem = (activeItem) => {
        this.setState({
            activeItem
        });
        this[activeItem].scrollIntoView({block: 'end', behavior: 'smooth'});
    };

    render() {
        const {activeItem, headerStyles} = this.state;
        const { height, shadowColor, paddingTop, picWidth, picHeight, navPadding } = headerStyles;
        return (
            <MainView id="main" className="main" onScroll={this.handleScroll} ref={(ref) => this.main = ref}>
                <Sticky scrollElement=".main">
                    <Header ref={(ref) => this.header = ref}
                            name="header"
                            activeItem={activeItem}
                            setActiveItem={this.setActiveItem}
                            headerStyles={{height, shadowColor, paddingTop, picWidth, picHeight, navPadding}}
                    />
                </Sticky>
                <Slide ref={(ref) => this.intro = ref} name="intro" height="473" color="white">intro</Slide>
                <Slide ref={(ref) => this.overview = ref} name="overview" height="473" color="white">overview</Slide>
                <Slide ref={(ref) => this.resources = ref} name="resources" height="473" color="white">{}resources</Slide>
                <Slide ref={(ref) => this.roadmap = ref} name="roadmap" height="473" color="white">roadmap</Slide>
                <Slide ref={(ref) => this.community = ref} name="community" height="473" color="white">community</Slide>
                <Slide ref={(ref) => this.faq = ref} name="faq" height="473" color="white" style={{height: "473px", width: "100%"}}>faq</Slide>
            </MainView>
        );
    }
}

export default Container;