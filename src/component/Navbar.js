import { useState } from "react";
import styled from "styled-components";
// COMPONENTS IMPORTATION
import WhiteTitle from "../styles/styled-components/title/WhiteTitle";
// STYLED COMPONENTS IMPORTATION
import Image from "./Image";
import WhiteSmallText from "../styles/styled-components/text/WhiteSmallText";
import WhiteButton from "../styles/styled-components/button/WhiteButton";
import StyledLink from "../styles/styled-components/link/StyledLink";

const NavbarContainer = styled.div`
    height: 6rem;
    background: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0rem 1rem 0rem 1rem;

    @media only screen and (min-width: 768px) {
        padding: 0rem 2rem 0rem 2rem;
    };

    @media only screen and (min-width: 1024px) {
        padding: 0rem 4rem 0rem 4rem;
    };
`;

const BrandContainer = styled.div`
    margin-left: 1rem;
`;

const ItemContainer = styled.div`
    display: flex;
`;

const Item = styled.div`
    text-decoration: none;
    display: inline-block;

    @media only screen and (min-width: 768px) {
        margin: 0.5rem;
    };

    @media only screen and (min-width: 1024px) {
        margin: 1rem;
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
    display: flex;
    flex-direction: column;
`;

const Navbar = (props) => {
    const [isOpen, setOpen] = useState(false);

    const toogleOpen = () => {
        setOpen(!isOpen);
    };

    const DesktopBar = () => {
        return (
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
        );
    };

    const MobileBar = () => {
        return (
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
        )
    };

    return (
        <>
            {
                props.isResponsive ? <MobileBar /> : <DesktopBar />
            }
        </>
    );
};

export default Navbar;