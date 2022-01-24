import { useState } from "react";
import styled from "styled-components";
// COMPONENTS IMPORTATION
import WhiteTitle from "../styles/styled-components/title/WhiteTitle";
// STYLED COMPONENTS IMPORTATION
import Image from "./Image";
import WhiteSmallText from "../styles/styled-components/text/WhiteSmallText";

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

const DropdownContainer = styled.div`
    margin-right: 1rem;
`;

const DropdownItems = styled.div`
    background: black;
    padding: 0.5rem;
`;

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    const toogleOpen = () => {
        setOpen(!isOpen);
    };

    return (
        <>
            <NavbarContainer>
                <BrandContainer>
                    <WhiteTitle text={"P H I"} />
                </BrandContainer>
                <DropdownContainer onClick={toogleOpen}>
                    <Image source={"../img/menu.png"} alt={"Menu icon"} width={"30px"} height={"30px"}/>
                </DropdownContainer>
            </NavbarContainer>
            {
                isOpen &&
                <DropdownItems>
                    <WhiteSmallText>Expertise</WhiteSmallText>
                    <WhiteSmallText>Secteurs d'activités</WhiteSmallText>
                    <WhiteSmallText>Formations</WhiteSmallText>
                    <WhiteSmallText>Contact</WhiteSmallText>
                </DropdownItems>
            }
        </>
    );
};

export default Navbar;