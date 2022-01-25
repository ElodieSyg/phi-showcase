import { useState, useEffect } from "react";
import styled from "styled-components";
// COMPONENTS IMPORTATION
import WhiteTitle from "../styles/styled-components/title/WhiteTitle";
// STYLED COMPONENTS IMPORTATION
import Image from "./Image";
import WhiteSmallText from "../styles/styled-components/text/WhiteSmallText";
import WhiteButton from "../styles/styled-components/button/WhiteButton";
import StyledLink from "../styles/styled-components/link/Link";

const NavbarContainer = styled.div`
    height: 6rem;
    background: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const BrandContainer = styled.div`
    margin-left: 1rem;
`;

const ItemContainer = styled.div`
    display: flex;
`;

const Item = styled.div`
    margin: 1rem;
    text-decoration: none;
    display: inline-block;

    ::after {
        border-bottom: solid 3px white;  
        transform: scaleX(0);  
        transition: transform 250ms ease-in-out;
    }

    :hover::after {
        width: 100%
    }
`;

const ButtonContainer = styled.div`
    margin: 1rem;
`;

const DropdownContainer = styled.div`
    margin-right: 1rem;
`;

const DropdownItems = styled.div`
    background: black;
    padding: 0.5rem;
`;

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const [isResponsive, setResponsive] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    }, [isResponsive]);

    const toogleOpen = () => {
        setOpen(!isOpen);
    };

    const handleResize = () => {
        if (window.innerWidth < 720) {
            setResponsive(true);
        } else {
            setResponsive(false);
        };
    };

    return (
        <>
            {
                isResponsive
                    ?
                    <>
                        <NavbarContainer>
                            <BrandContainer>
                                <StyledLink to="/">
                                    <WhiteTitle text={"P H I"} />
                                </StyledLink>
                            </BrandContainer>
                            <DropdownContainer onClick={toogleOpen}>
                                <Image source={"../img/menu.png"} alt={"Menu icon"} width={"30px"} height={"30px"} />
                            </DropdownContainer>
                        </NavbarContainer>
                        {
                            isOpen &&
                            <DropdownItems>
                                <Item>
                                    <StyledLink to="/#expertise">
                                        <WhiteSmallText>Expertise</WhiteSmallText>
                                    </StyledLink>
                                </Item>
                                <Item>
                                    <StyledLink to="/#activity">
                                        <WhiteSmallText>Sécteurs d'activités</WhiteSmallText>
                                    </StyledLink>
                                </Item>
                                <Item>
                                    <StyledLink to="/#formation">
                                        <WhiteSmallText>Formations</WhiteSmallText>
                                    </StyledLink>
                                </Item>
                                <Item>
                                    <StyledLink to="/contact">
                                        <WhiteSmallText>Contact</WhiteSmallText>
                                    </StyledLink>
                                </Item>
                            </DropdownItems>
                        }
                    </>
                    : <>
                        <NavbarContainer>
                            <BrandContainer>
                                <StyledLink to="/">
                                    <WhiteTitle text={"P H I"} />
                                </StyledLink>
                            </BrandContainer>
                            <ItemContainer>
                                <Item>
                                    <StyledLink to="/#expertise">
                                        <WhiteSmallText>Expertise</WhiteSmallText>
                                    </StyledLink>
                                </Item>
                                <Item>
                                    <StyledLink to="/#activity">
                                        <WhiteSmallText>Sécteurs d'activités</WhiteSmallText>
                                    </StyledLink>
                                </Item>
                                <Item>
                                    <StyledLink to="/#formation">
                                        <WhiteSmallText>Formations</WhiteSmallText>
                                    </StyledLink>
                                </Item>
                            </ItemContainer>
                            <ButtonContainer>
                                <StyledLink to="/contact">
                                    <WhiteButton>
                                        Discuter d'un projet ?
                                    </WhiteButton>
                                </StyledLink>
                            </ButtonContainer>
                        </NavbarContainer>
                    </>
            }
        </>
    );
};

export default Navbar;