const ErrorCardLarge = ({ error }) => {
  return (
    <div className="row">
      <div className="card large error">
        <section>
          <p>
            <span className="icon-alert inverse "></span>
            {error}
          </p>
        </section>
      </div>
    </div>
  );
};

export default ErrorCardLarge;
