const ErrorCard = ({errorMessage}) => {
    return (
        <div class="card error">
              <p>{errorMessage}</p>
        </div>
    );
};

export default ErrorCard;