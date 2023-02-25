import PropTypes from "prop-types";

const PagingButton = ({ handleMoreClick }) => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="button-group fluid">
          <button className="button default" onClick={handleMoreClick}>
            More...
          </button>
        </div>
      </div>
    </div>
  );
};

PagingButton.propTypes = {
  handleMoreClick: PropTypes.func.isRequired,
};

export default PagingButton;
