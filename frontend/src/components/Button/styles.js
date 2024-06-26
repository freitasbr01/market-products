import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    background: ${({theme}) => theme.COLORS.GRADIENT_100};
    border: none;
    border-radius: .5rem;
    padding: 1.5rem;
    text-transform: uppercase;
    font-weight: bold;
`