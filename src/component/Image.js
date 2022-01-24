const Image = (props) => {
    return (
        <div>
            <img
                src={props.source}
                alt={props.alt}
                width={props.width}
                height={props.height} />
        </div>
    );
};

export default Image;