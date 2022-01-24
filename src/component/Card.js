import styled from "styled-components";
// STYLED COMPONENTS IMPORTATION
import WhiteMediumText from "../styles/styled-components/text/WhiteMediumText";
import WhiteSmallText from "../styles/styled-components/text/WhiteSmallText";

const Card = (props) => {
    const CardContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
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
        `;

    return (
        <CardContainer>
            <BackgroundContainer>
                <WhiteMediumText>{props.title}</WhiteMediumText>
                <WhiteSmallText>{props.body}</WhiteSmallText>
                <WhiteSmallText>{props.contact}</WhiteSmallText>
            </BackgroundContainer>
        </CardContainer>
    );
};

export default Card;