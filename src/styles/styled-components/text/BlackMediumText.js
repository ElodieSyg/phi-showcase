import styled from "styled-components";

const Text = styled.h3`
    color: black;
`;

const BlackMediumText = (props) => {
    return (
        <Text>{props.children}</Text>
    );
};

export default BlackMediumText;