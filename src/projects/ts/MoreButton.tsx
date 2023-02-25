interface MoreButtonProps {
    moreClick: () => void;
}
const MoreButton = ({ moreClick }: MoreButtonProps) => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="button-group fluid">
          <button className="button default" onClick={moreClick}>
            More...
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoreButton;
