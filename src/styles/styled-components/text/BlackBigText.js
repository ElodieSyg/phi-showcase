import styled from "styled-components";

const Text = styled.h2`
    color: black;
`;

const BlackBigText = (props) => {
    return (
        <Text>{props.children}</Text>
    );
};

export default BlackBigText;