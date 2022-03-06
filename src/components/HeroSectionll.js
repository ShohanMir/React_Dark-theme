import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/hero.png';
import PrimaryButton from './button/PrimaryButton';
import ParagraphText from './paragraph/ParagraphText';
import HeroTitle from './title/HeroTitle';

const HeroSectionStyles = styled.div`
    min-height: 100vh;
    padding-top: calc(var(--header-height) + 30px); // height of header
    display: flex;
    align-items: center;
    justify-content: center;
    .hero_wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 1rem;
    }
    .hero_info {
        flex: 3;
    }
    .hero__img {
        flex: 4;
        img {
            object-fit: contain;
        }
    }
    .hero_title {
        margin-bottom: 1.5rem;
        max-width: 400px;
    }
    .hero_description {
        margin-bottom: 1.5rem;
        max-width: 300px;
    }
    @media only screen and (max-width: 768px) {
        .hero_wrapper {
            flex-direction: column-reverse;
            gap: 0.5rem;
        }
        .hero__img {
            display: flex;
            justify-content: center;
            img {
                max-width: 400px;
                margin-top: auto;
            }
        }
    }
`;

function HeroSection() {
    return (
        <HeroSectionStyles id="hero">
            <div className="container">
                <div className="hero_wrapper">
                    <div className="hero_info">
                        <HeroTitle className="hero_title">Professional Photographer</HeroTitle>
                        <ParagraphText classNmae="hero_description">
                            Because every picture tells a story. Let us help you tell the story
                            behind your photos.
                        </ParagraphText>
                        <PrimaryButton>Get a Quote</PrimaryButton>
                    </div>
                    <div className="hero__img">
                        <img src={HeroImg} alt="hero_image" />
                    </div>
                </div>
            </div>
        </HeroSectionStyles>
    );
}

export default HeroSection;
