import styled from "styled-components";
// COMPONENTS IMPORTATION
import Image from "./Image";
// STYLED COMPONENTS IMPORTATION
import WhiteSmallText from "../styles/styled-components/text/WhiteSmallText";
import WhiteMediumText from "../styles/styled-components/text/WhiteMediumText";

const FooterContainer = styled.div`
    background: black;
`;

const GeneralInfo = styled.div`
    padding: 1rem;
`;

const SocialNetwork = styled.div`
    display: flex;
    padding: 1rem;
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
                <Image source={"../img/instagram.png"} alt={"Instagram logo"} />
                <Image source={"../img/linkedin.png"} alt={"Linkedin logo"} />
            </SocialNetwork>
        </FooterContainer>
    );
};

export default Footer;