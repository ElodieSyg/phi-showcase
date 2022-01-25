import { useState } from "react";
import styled from "styled-components";
// STYLED COMPONENTS IMPORTATION
import BlackBigText from "../styles/styled-components/text/BlackBigText";
import BlackMediumText from "../styles/styled-components/text/BlackMediumText";
import BottomLineInput from "../styles/styled-components/input/BottomLineInput";
import BlackButton from "../styles/styled-components/button/BlackButton";


const TextContainer = styled.div`
    margin: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem;
`;

const ButtonContainer = styled.div`
    margin: 2rem;
`;

const Item = styled.div`
    margin: 0.5rem;
`;

const Contact = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [budget, setBudget] = useState(0);
    const [message, setMessage] = useState();

    return (
        <>
            <TextContainer>
                <BlackBigText>Un nouveau projet ?</BlackBigText>
                <BlackMediumText>Contactez-nous !</BlackMediumText>
            </TextContainer>
            <FormContainer>
                <Item>
                    <BottomLineInput
                        type={"text"}
                        placeholder={"Nom *"}
                        onChange={(e) => setName(e.target.value)} />
                </Item>
                <Item>
                    <BottomLineInput
                        type={"text"}
                        placeholder={"Email *"}
                        onChange={(e) => setEmail(e.target.value)} />
                </Item>
                <Item>
                    <BottomLineInput
                        type={"text"}
                        placeholder={"Numéro de téléphone"}
                        onChange={(e) => setPhoneNumber(e.target.value)} />
                </Item>
                <Item>
                    <BottomLineInput
                        type={"text"}
                        placeholder={"Budget"}
                        onChange={(e) => setBudget(e.target.value)} />
                </Item>
                <Item>
                    <BottomLineInput
                        type={"text"}
                        placeholder={"Parlez-nous de votre projet"}
                        onChange={(e) => setMessage(e.target.value)} />
                </Item>
                <ButtonContainer>
                    <BlackButton>Envoyer</BlackButton>
                </ButtonContainer>
            </FormContainer>
        </>
    );
};

export default Contact;