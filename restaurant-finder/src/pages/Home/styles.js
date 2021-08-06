import styled from "styled-components";
import Slider from 'react-slick';

export const Wrapper = styled.div`
    display: flex;
`;

export const Container = styled.aside `
    background-color: ${(props) => props.theme.colors.background};
    width: 360px;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
`;

export const Search = styled.section `
    display: flex;
    flex-direction: column;
    background-color: #fff;
    justify-content: center;
    padding: 16px;
`;

export const Input = styled.input `
    width: 250px;
    padding: 5px;
    margin-left: 3px;
    
`;

export const FormContainer = styled.div `
    background-color: ${(props) => props.theme.colors.background};
    width: 345px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center; 
`;

export const Logo = styled.img`
    margin-bottom: 15px;
    width: 200px;
    align-self: center;
`;

export const Map = styled.div`
    background-color: red;
    width: 500px;
`;

export const CarouselTitle = styled.h1`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-weight: bold;
    line-height: 29px;
    margin: 16px 0;
`;

export const Carousel = styled(Slider)`
    .slick-slide{
        margin-right: 30px;
    }

`;