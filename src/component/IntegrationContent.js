import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25rem;

    @media only screen and (min-width: )
`;

const InformationsContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 0rem 2rem 0rem 2rem;

    @media only screen and (min-width: 1024px) {
        padding: 0rem 5rem 0rem 5rem;
    };

    @media only screen and (min-width: 1440px) {
        padding: 0rem 5rem 0rem 0rem;
    };
`;

const Contact = styled.a`
    text-decoration: underline;
    color: black;
`;

const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    padding: 2rem;
`;

const IntegrationContent = (props) => {
    return (
        <Container>
            <ImageContainer>
                <img src={props.src} alt={props.alt} width={250} />
            </ImageContainer>
            <InformationsContainer>
                <h3>{props.title}</h3>
                <p>{props.body}</p>
                <Contact href="/contact">{props.contact}</Contact>
            </InformationsContainer>
        </Container>
    );
};

export default IntegrationContent;