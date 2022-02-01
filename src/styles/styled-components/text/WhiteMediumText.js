import styled from "styled-components";

const Text = styled.h3`
    color: white;
    font-style: italic;
`;

const WhiteMediumText = (props) => {
    return (
        <Text>{props.children}</Text>
    );
};

export default WhiteMediumText;