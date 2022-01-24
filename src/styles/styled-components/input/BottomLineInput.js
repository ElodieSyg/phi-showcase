import styled from "styled-components";

const StyledInput = styled.input`
    border: none;
    border-bottom: 1px solid grey;
    width: 15rem;
    padding-bottom: 0.5rem;

    @media only screen and (min-width: 425px)  {
        width: 20rem;
    };

    @media only screen and (min-width: 768px) {
        width: 30rem;
    }
`;

const BottomLineInput = (props) => {
    return (
        <>
            <StyledInput 
                type={props.type}
                placeholder={props.placeholder}
                onChange={props.onChange} />
        </>
    );
};

export default BottomLineInput;