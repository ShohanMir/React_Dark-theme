import React from 'react';
import styled from 'styled-components';
import themeList from '../../data/themeList';
import ParagraphText from '../paragraph/ParagraphText';

const TeamMemberItemsStyles = styled.div`
    .teamMemeber__img {
        margin-bottom: 2rem;
        img {
            border-radius: 18px;
        }
    }
    .teamMember__name {
        font-size: 1.8rem;
        font-weight: 500;
        color: ${({ theme: { theme } }) =>
            theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
    }
    @media only screen and (max-width: 768px) {
        .teamMemeber__img {
            margin-bottom: 1rem;
        }
        img {
            max-width: 250px;
        }
    }
`;

function TeamMemberItems({ img, name, title }) {
    return (
        <TeamMemberItemsStyles>
            <div className="teamMemeber__img">
                <img src={img} alt={name} />
            </div>
            <ParagraphText className="teamMember__name">{name}</ParagraphText>
            <ParagraphText className="teamMember__subtitle">{title}</ParagraphText>
        </TeamMemberItemsStyles>
    );
}

export default TeamMemberItems;
