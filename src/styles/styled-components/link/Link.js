import styled from "styled-components";

const Link = styled.a`
    text-decoration: none;
`;

const StyledLink = (props) => {
    return (
        <Link href={props.to}>{props.children}</Link>
    );
};

export default StyledLink;