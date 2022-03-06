import React from 'react';
import styled from 'styled-components';
import themeList from '../../data/themeList';

const TitleStyles = styled.h1`
    font-size: 6rem;
    color: ${({ theme: { theme } }) =>
        theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
    font-wight: 900;
    text-transform: capitalize;
    @media only screen and (max-width: 720px) {
        font-size: 4rem;
    }
`;
function HeroTitle({ children, ...rest }) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <TitleStyles {...rest}>{children}</TitleStyles>;
}

export default HeroTitle;
