import styled from "styled-components";

const Text = styled.p`
    color: white;
    font-style: italic;

    @media (min-width: 720px) and (max-width: 768px) {
        font-size: 0.8rem;
    };
`;

const WhiteSmallText = (props) => {
    return (
        <Text>{props.children}</Text>
    );
};

export default WhiteSmallText;