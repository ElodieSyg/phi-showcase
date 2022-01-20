const Image = (props) => {
    return (
        <div>
            <img src={props.source} alt={props.alt} />
        </div>
    );
};

export default Image;