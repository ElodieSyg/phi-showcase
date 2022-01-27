import styled from "styled-components";
// STYLED COMPONENTS IMPORTATION
import WhiteMediumText from "../styles/styled-components/text/WhiteMediumText";
import WhiteSmallText from "../styles/styled-components/text/WhiteSmallText";

const ActivityCard = (props) => {
    const CardContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media only screen and (min-width: 1024px) {
            margin: 0.5rem;
        };

        @media only screen and (min-width: 1440px) {
            margin: 1rem;
        };
    `;

    const BackgroundContainer = styled.div`
        background-image: url("${props.backgroundImage}");
        background-repeat: no-repeat;
        background-size: contain;
        height: 16rem;
        width: 16rem;
        padding: 1rem;
        margin: 2rem 1rem 2rem 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media only screen and (min-width: 768px) {
            height: 7rem;
            width: 7rem;
        };

        @media only screen and (min-width: 1024px) {
            height: 9.5rem;
            width: 9.5rem;
        };

        @media only screen and (min-width: 1024px) {
            height: 12rem;
            width: 12rem;
        };    
    `;

    return (
        <CardContainer>
            <BackgroundContainer>
                {props.isResponsive ? <WhiteMediumText>{props.title}</WhiteMediumText> : <WhiteSmallText>{props.title}</WhiteSmallText>}
            </BackgroundContainer>
        </CardContainer>
    );
};

export default ActivityCard;