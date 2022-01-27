import styled from "styled-components";
// COMPONENTS IMPORTATION
import Image from "./Image";
// STYLED COMPONENTS IMPORTATION
import WhiteSmallText from "../styles/styled-components/text/WhiteSmallText";
import WhiteMediumText from "../styles/styled-components/text/WhiteMediumText";

const FooterContainer = styled.div`
    background: black;

    @media only screen and (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: end;
    }
`;

const GeneralInfo = styled.div`
    padding: 1rem;
`;

const SocialNetwork = styled.div`
    display: flex;
    padding: 1rem;
`;

const Item = styled.div`
    padding: 0rem 1rem 0rem 0rem;

    @media only screen and (min-width: 768px) {
        padding: 0rem 1rem 1rem 0rem;
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <GeneralInfo>
                <WhiteMediumText>PHI Development</WhiteMediumText>
                <WhiteSmallText>66 T Grande rue, 59780 Camphin-en-pevele</WhiteSmallText>
                <WhiteSmallText>06 00 00 00 00</WhiteSmallText>
            </GeneralInfo>
            <SocialNetwork>
                <Item>
                    <Image source={"../img/instagram.png"} alt={"Instagram logo"} />
                </Item>
                <Item>
                    <Image source={"../img/linkedin.png"} alt={"Linkedin logo"} />
                </Item>
            </SocialNetwork>
        </FooterContainer>
    );
};

export default Footer;