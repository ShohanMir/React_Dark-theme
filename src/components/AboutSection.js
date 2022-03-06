import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import AboutImg from '../assets/images/about.png';
import PrimaryButton from './button/PrimaryButton';
import ParagraphText from './paragraph/ParagraphText';
import SectionTItles from './title/SectionTitles';

const AboutStyles = styled.div`
    padding: 10rem 0;
    .about__wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .about__subtitle {
        margin-bottom: 1rem;
        font-weight: 400;
        text-transform: capitalize;
        color: var(--mediumSlateBlue);
    }
    .about__title {
        margin-bottom: 2rem;
        max-width: 300px;
    }
    .about__desc {
        margin-bottom: 2rem;
        max-width: 300px;
    }
    @media only screen and (max-width: 768px) {
        .about__wrapper {
            flex-direction: column;
        }
        .about__img {
            max-width: 400px;
        }
    }
`;

function AboutSection() {
    return (
        <AboutStyles id="about">
            <div className="container">
                <div className="about__wrapper">
                    <div className="about__img">
                        <img src={AboutImg} alt="aboutimage" />
                    </div>
                    <div className="about__info">
                        <ParagraphText className="abput__subtitle">Who are we</ParagraphText>
                        <SectionTItles className="about__title">
                            Capturing life as it happens
                        </SectionTItles>
                        <ParagraphText className="about__desc">
                            &ldquo;Artistic&ldquo; photography is a way of thinking about the world
                            in a way that is.
                        </ParagraphText>
                        <PrimaryButton buttonType={Link} smooth to="contact">
                            Get In Touch
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </AboutStyles>
    );
}

export default AboutSection;
