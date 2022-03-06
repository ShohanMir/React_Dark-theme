import React from 'react';
import styled from 'styled-components';
import PrimaryButton from '../button/PrimaryButton';
import ParagraphText from '../paragraph/ParagraphText';
import SectionTItles from '../title/SectionTitles';
import FormField from './FormField';

const ContactSectionStyles = styled.div`
    padding: 10rem 0;
    .contact__wrapper {
        max-width: 800px;
        margin: 0 auto;
        text-align: center;
    }
    .contact__info {
        margin-bottom: 4rem;
    }
    .contact__form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 1.5rem;
        row-gap: 3rem;
        .full-width {
            grid-column: span 2;
        }
        .contact__submit {
            width: max-content;
            cursor: pointer;
        }
    }
    @media only screen and (max-width: 768px) {
        .contact__form {
            grid-template-columns: 1fr;
            row-gap: 2rem;
            .full-width {
                grid-column: 1;
            }
        }
    }
`;

function ContactSection() {
    return (
        <ContactSectionStyles id="contact">
            <div className="container">
                <div className="contact__wrapper">
                    <div className="contact__info">
                        <SectionTItles>Get In Touc</SectionTItles>
                        <ParagraphText>We love to hear from you.</ParagraphText>
                    </div>
                    <form action="" className="contact__form">
                        <FormField
                            className="full-width"
                            label="Name"
                            id="name"
                            type="text"
                            name="name"
                            required
                        />
                        <FormField label="Email" id="email" type="email" name="email" required />
                        <FormField
                            label="Subject"
                            id="subject"
                            type="subject"
                            name="subject"
                            required
                        />
                        <FormField
                            className="full-width"
                            label="Message"
                            rows={6}
                            id="message"
                            name="message"
                            required
                        />
                        <PrimaryButton
                            type="submit"
                            className="contact__submit"
                            buttonType="button"
                        >
                            Submit
                        </PrimaryButton>
                    </form>
                </div>
            </div>
        </ContactSectionStyles>
    );
}

export default ContactSection;
