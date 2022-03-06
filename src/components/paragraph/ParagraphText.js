import styled from 'styled-components';
import themeList from '../../data/themeList';

const ParagraphStyles = styled.p`
    font-size: 1.6rem;
    line-height: 1.4em;
    color: ${({ theme: { theme } }) =>
        theme === themeList.light ? 'var(--darkBlue_1)' : 'var(--lightBlue_2)'};
    @media only screen and (max-width: 720px) {
        font-size: 1.4rem;
    }
`;
function ParagraphText({ children, ...rest }) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <ParagraphStyles {...rest}>{children}</ParagraphStyles>;
}

export default ParagraphText;
