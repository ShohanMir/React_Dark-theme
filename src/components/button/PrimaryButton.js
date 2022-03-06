/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';

const ButtonStyles = styled.a`
    display: inline-block;
    background: var(--mediumSlateBlue);
    padding: 1.5rem 2rem;
    color: var(--white);
    font-size: 1.6rem;
    text-decoration: capitalize;
    border-radius: 8px;
    font-width: 500;
    border: none;
    @media only screen and (max-width: 720px) {
        font-size: 1.4rem;
        padding: 1.4rem 1.5rem;
    }
`;

function PrimaryButton({ children, buttonType, ...rest }) {
    return (
        <ButtonStyles as={buttonType} {...rest}>
            {children}
        </ButtonStyles>
    );
}

export default PrimaryButton;
