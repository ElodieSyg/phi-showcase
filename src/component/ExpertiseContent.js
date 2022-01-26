import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: red;
`;

const InformationsContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 2rem;
`;

const Title = styled.h3`
`;

const Body = styled.p`

`;

const Contact = styled.p`
    text-decoration: underline;
`;

const ImageContainer = styled.div`
    flex: 1;
    padding: 2rem;
`;

const ExpertiseContent = (props) => {
    return (
        <Container>
            <InformationsContainer>
                <Title>{props.title}</Title>
                <p>{props.body}</p>
                <Contact>{props.contact}</Contact>
            </InformationsContainer>
            <ImageContainer>
                <img src={props.src} alt={props.alt} />
            </ImageContainer>
        </Container>
    );
};

export default ExpertiseContent;