import styled from "styled-components";

const Text = styled.h2`
    color: white;
`;

const WhiteBigText = (props) => {
    return (
        <Text>{props.children}</Text>
    );
};

export default WhiteBigText;
