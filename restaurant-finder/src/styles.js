import styled from "styled-components";

export const Container = styled.aside`
    background-color: ${(props) => props.theme.colors.background};
    width: 360px;
    height: 100vh;
    overflow-y: auto;
    

`;

export const Search = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    justify-content: center;
    padding: 16px;
`;

export const Input = styled.input`
    width: 250px;
    padding: 5px;
    margin-left: 3px
    
`;

export const FormContainer = styled.div`
    background-color: ${(props) => props.theme.colors.background};
    width: 345px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;