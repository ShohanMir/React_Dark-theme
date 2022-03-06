import React from 'react';
import styled from 'styled-components';
// team images
import teamMember1 from '../../assets/images/team1.png';
import teamMember2 from '../../assets/images/team2.png';
import teamMember3 from '../../assets/images/team3.png';
import ParagraphText from '../paragraph/ParagraphText';
import SectionTItles from '../title/SectionTitles';
import TeamMemberItems from './TeamMemberItems';

const TeamSectionStyles = styled.div`
    padding: 10rem 0;
    .team__wrapper {
        display: flex;
        gap: 1rem;
    }
    .team__info {
        max-width: 250px;
    }
    .team__subtitle {
        margin-bottom: 1rem;
        font-weight: 600;
        color: var(--mediumSlateBlue);
        text-decoration: capitalize;
    }
    .team__members {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 5rem;
    }
    @media only screen and (max-width: 768px) {
        .team__wrapper {
            flex-direction: column;
            text-align: center;
            gap: 3rem;
        }
        .team__info {
            margin: 0 auto;
        }
        .team__members {
            gap: 2rem;
        }
    }
`;

function TeamSection() {
    return (
        <TeamSectionStyles>
            <div className="container">
                <div className="team__wrapper">
                    <div className="team__info">
                        <ParagraphText className="team__title">Team Memebers</ParagraphText>
                        <SectionTItles className="about__title">
                            The best team available
                        </SectionTItles>
                    </div>
                    <div className="team__members">
                        <TeamMemberItems img={teamMember1} name="Rasu" title="Photo Editor" />
                        <TeamMemberItems
                            img={teamMember2}
                            name="Alex"
                            title="Senior Photographer"
                        />
                        <TeamMemberItems img={teamMember3} name="Daddario" title="Set Designer" />
                    </div>
                </div>
            </div>
        </TeamSectionStyles>
    );
}

export default TeamSection;
