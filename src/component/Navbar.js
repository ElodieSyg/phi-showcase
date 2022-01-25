import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { genericHashLink } from "react-router-hash-link";
// COMPONENTS IMPORTATION
import WhiteTitle from "../styles/styled-components/title/WhiteTitle";
// STYLED COMPONENTS IMPORTATION
import Image from "./Image";
import WhiteSmallText from "../styles/styled-components/text/WhiteSmallText";
import WhiteButton from "../styles/styled-components/button/WhiteButton";

const NavbarContainer = styled.div`
    height: 5rem;
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
`;

const ButtonContainer = styled.div`

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

    console.log("is responsive", isResponsive)

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
            <NavbarContainer>
                <BrandContainer>
                    <Link to="/">
                        <WhiteTitle text={"P H I"} />
                    </Link>
                </BrandContainer>
                {
                    isResponsive
                        ? <DropdownContainer onClick={toogleOpen}>
                            <Image source={"../img/menu.png"} alt={"Menu icon"} width={"30px"} height={"30px"} />
                        </DropdownContainer>
                        : <div>
                            <ItemContainer>
                                <Item>
                                    <Link to="/#expertise">
                                        <WhiteSmallText>Expertise</WhiteSmallText>
                                    </Link>
                                </Item>
                                <Item>
                                    <Link to="/#activity">
                                        <WhiteSmallText>Sécteurs d'activités</WhiteSmallText>
                                    </Link>
                                </Item>
                                <Item>
                                    <Link to="/#formation">
                                        <WhiteSmallText>Formations</WhiteSmallText>
                                    </Link>
                                </Item>
                            </ItemContainer>
                            <ButtonContainer>
                                <WhiteButton>
                                    Discuter d'un projet ?
                                </WhiteButton>
                            </ButtonContainer>

                        </div>
                }
                {
                    isOpen &&
                    <DropdownItems>
                        <WhiteSmallText>Expertise</WhiteSmallText>
                        <WhiteSmallText>Secteurs d'activités</WhiteSmallText>
                        <WhiteSmallText>Formations</WhiteSmallText>
                        <Link to="/contact">
                            <WhiteSmallText>Contact</WhiteSmallText>
                        </Link>
                    </DropdownItems>
                }
            </NavbarContainer>
        </>
    );
};

export default Navbar;