import styled from "styled-components";

const Button = styled.button`
    background: white;
    color: black;
    width: 10rem;
    height: 2rem;
    border-radius: 999px;
    border: 1px solid white;
    cursor: pointer;
    font-weight: bold;
`;

const WhiteButton = (props) => {
    return (
        <>
            <Button>
                {props.children}
            </Button>
        </>
    );
};

export default WhiteButton;