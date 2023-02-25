const ErrorCard = ({errorMessage}) => {
    return (
        <div className="card error">
              <p>{errorMessage}</p>
        </div>
    );
};

export default ErrorCard;