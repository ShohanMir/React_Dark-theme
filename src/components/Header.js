import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import themeList from '../data/themeList';
import Logo from './Logo';
import ModeSwitch from './ModeSwitch';
// import MaterialUISwitch from './MuiSwitch';

const HeaderStyles = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--header-height);
    background-color: ${({ theme: { theme } }) =>
        theme === themeList.light ? 'var(--lightBlue_1)' : 'var(--darkBlue_3)'}};
    border-bottom: 1px solid var(--mediumSlateBlue);
    .navigation {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 0;
    }
    nav ul li {
        display: inline-block;
        margin: 0 0.5rem;
        a {
            font-size: 1.6rem;
            font-width: 500;
            display: inline-block;
            paddinng: 0.5rem 1rem;
            color: ${({ theme: { theme } }) =>
                theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
        }
        &:hover {
            a {
                text-decoration: underline;
            }
        }
    }
    .navMenu {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .menuIcon,
    .closeIcon {
            width: 30px;
            height: 26px;
            curson: pointer;
            margin-left: 10px;
            border-radius: 4px;
            align-items: center;
            justify-content: center;
            svg {
                cursor: pointer;
                color: ${({ theme: { theme } }) =>
                    theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
            }
            &:hover {
                background-color: #8080803b;
            }
        }
        .closeIcon {
            position: absolute;
            right: 10px;
            top: 10px;
            &:hover {
                color: var(--white);
            }
        }
    }

    @media only screen and (max-width: 768px) {
        nav {
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: fixed;
            width: 90%;
            max-width: 250px;
            top: 0%;
            right: 0%;
            background-color: ${({ theme: { theme } }) =>
                theme === themeList.light ? 'var(--lightBlue_2)' : 'var(--darkBlue_4)'};
            height: 100vh;
            z-index: 100;
            transform: translateX(100%);
            transition: 0.3s ease transform;
            overflow: hidden;
        }
        nav.open {
            transform: translateX(0);
        }
        nav ul li {
            display: block;
            text-align: center;
            width: 100%;
            margin: 0.5rem 0;
            a {
                display: block;
                width: 100%;
            }
        }
    }
`;

function Header() {
    const [navOpen, setNavOpen] = useState(false);
    const [mobile, setMobile] = useState(window.matchMedia('(max-width: 768px)').matches);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setMobile(window.matchMedia('(max-width: 768px)').matches);
        });
    }, []);

    // console.log(navOpen);

    return (
        <HeaderStyles>
            <div className="container">
                <div className="navigation">
                    <Link to="home" smooth>
                        <Logo />
                    </Link>
                    <div className="navMenu">
                        <nav className={mobile && navOpen ? 'open' : undefined}>
                            {mobile && (
                                <div
                                    className="closeIcon"
                                    tabIndex="0"
                                    role="button"
                                    onClick={() => setNavOpen(false)}
                                    onKeyDown={() => setNavOpen(false)}
                                >
                                    <FiX />
                                </div>
                            )}
                            <ul>
                                <li>
                                    <Link to="home" smooth>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="services" smooth>
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link to="about" smooth>
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="contact" smooth>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <ModeSwitch />
                        {mobile && (
                            <div
                                className="menuIcon"
                                tabIndex="0"
                                role="button"
                                onClick={() => setNavOpen(true)}
                                onKeyDown={() => setNavOpen(true)}
                            >
                                <FiMenu />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </HeaderStyles>
    );
}

export default Header;
