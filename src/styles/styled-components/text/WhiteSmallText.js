import styled from "styled-components";

const Text = styled.p`
    color: white;
    font-style: italic
`;

const WhiteSmallText = (props) => {
    return (
        <Text>{props.children}</Text>
    );
};

export default WhiteSmallText;