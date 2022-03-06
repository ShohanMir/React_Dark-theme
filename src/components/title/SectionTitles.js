import React from 'react';
import styled from 'styled-components';
import themeList from '../../data/themeList';

const SectionTitleStyle = styled.h3`
    font-size: 4rem;
    font-weight: 800;
    color: ${({ theme: { theme } }) =>
        theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
    text-transform: capitalize;

    @media only screen and (max-width: 768px) {
        font-size: 3rem;
    }
`;

function SectionTItles({ children, ...rest }) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <SectionTitleStyle {...rest}>{children}</SectionTitleStyle>;
}

export default SectionTItles;
