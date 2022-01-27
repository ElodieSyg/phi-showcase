import styled from "styled-components";

const WhiteText = styled.h3`
    color: white;
    font-weight: bold;
`;

const WhiteTitle = (props) => {
    return (
        <WhiteText>
            {props.text}
        </WhiteText>
    );
};

export default WhiteTitle;