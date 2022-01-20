import styled from "styled-components";
// STYLED COMPONENTS IMPORTATION
import WhiteMediumText from "../styles/styled-components/text/WhiteMediumText";
import WhiteSmallText from "../styles/styled-components/text/WhiteSmallText";

const Card = (props) => {
    const CardContainer = styled.div`
        height: 16rem;
        width: 16rem;
        margin: 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1rem;
        background: url(${props.backgroundImage}); 
    `;

    return (
        <CardContainer>
            <img src="../img/design.png" />
            <WhiteMediumText>{props.title}</WhiteMediumText>
            <WhiteSmallText>{props.body}</WhiteSmallText>
            <WhiteSmallText>{props.contact}</WhiteSmallText>
        </CardContainer>
    );
};

export default Card;