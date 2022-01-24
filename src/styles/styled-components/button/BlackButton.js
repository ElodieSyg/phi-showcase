import styled from "styled-components";

const Button = styled.button`
    background: black;
    color: white;
    width: 8rem;
    height: 3rem;
    border-radius: 999px;
    border: 1px solid black;
    cursor: pointer;
`;

const BlackButton = (props) => {
    return (
        <>
            <Button>
                {props.children}
            </Button>
        </>
    );
};

export default BlackButton;