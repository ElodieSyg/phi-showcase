import styled from "styled-components";
// STYLED COMPONENTS IMPORTATION
import WhiteMediumText from "../styles/styled-components/text/WhiteMediumText";

const ActivityCard = (props) => {
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
        align-items: center;
    `;

    return (
        <CardContainer>
            <BackgroundContainer>
                <WhiteMediumText>{props.title}</WhiteMediumText>
            </BackgroundContainer>
        </CardContainer>
    );
};

export default ActivityCard;