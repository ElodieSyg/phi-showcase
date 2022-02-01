import styled from "styled-components";

const FormationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3rem;
    `;

const InformationsContent = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ImageContainer = styled.div`
    flex: 1;
`;

const Contact = styled.a`
    text-decoration: underline;
    color: black;
`;

const FormationCard = (props) => {
    return (
        <FormationContainer>
            <ImageContainer>
                <img src={props.source} alt={props.alt} width={250} height={200} />
            </ImageContainer>
            <InformationsContent>
                <h3>{props.title}</h3>
                <p>{props.body}</p>
                <Contact href="/contact">{props.contact}</Contact>
            </InformationsContent>
        </FormationContainer>
    );
};

export default FormationCard;